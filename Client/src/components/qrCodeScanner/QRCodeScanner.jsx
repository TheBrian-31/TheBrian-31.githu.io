import React, {useState, useEffect } from 'react'
import { QrReader } from 'react-qr-reader';
import { hashService } from '../../services/hash.service';
import { FcOk } from "react-icons/fc";
import { MdCancel } from "react-icons/md";
import { TbDoorOff } from "react-icons/tb";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { anonymousService } from '../../services/anonymous.service';
function QRCodeScanner({doorValue, user, token}) {
    const [data, setData] = useState();
    const [entradaAceptada, setEntradaAceptada] = useState(false);
    const [entradaRechazada, setEntradaRechazada] = useState(false);
    const [seleccionePuerta, setSeleccionePuerta] = useState(false);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {getValidateHash} = hashService
    const {actionDoor} = anonymousService

    /*useEffect(() => {
      onOpen(); // Abre el modal automáticamente al montar el componente
    }, [onOpen]);*/
 


    const onResultHandler = async (result, error) => {
      if (isOpen) {
        onOpenChange(!isOpen);
      }
      //await new Promise(resolve => setTimeout(resolve, 50000));
  
      if (!!result) {
        console.log("ANTES:", doorValue);
        if (doorValue && result?.text && token) {
          setData(result?.text);
          setSeleccionePuerta(false);
          setEntradaAceptada(false);
          setEntradaRechazada(false);
          console.log("ID:", result?.text);
          console.log("DOOR", doorValue);
          console.log("TOKEN", token);
  
          try {
            const res = await getValidateHash(result?.text, doorValue, "ON", token);
            await new Promise(resolve => setTimeout(resolve, 5000));
            console.log(res);
            console.log("MODAL:", isOpen);
  
            if (res.ok) {
              setEntradaAceptada(true);
              onOpen();
              await new Promise(resolve => setTimeout(resolve, 5000));
              closeDoorAfterDelay();
            } else {
              setEntradaRechazada(true);
              onOpen();
            }
  
            
          } catch (e) {
            console.error("Error validating hash:", e);
            setEntradaRechazada(true);
            onOpen();
          }
        } else {
          setSeleccionePuerta(true);
          onOpen();
        }
      }
  
      if (!!error) {
        console.info(error);
      }
    };

    const closeDoorAfterDelay = async() => {
      const dataOff = { token, key: doorValue, value: "OFF" };
      console.log("Sending OFF request:", dataOff); // Debug log
      const responseOff = await anonymousService.actionDoor(dataOff);

      if (responseOff.ok) {
        console.log("Action performed successfully with value OFF");
      } else {
        console.error("Error with OFF request:", responseOff.message);
      }
      //console.log('Función ejecutada después del retraso');
      // Aquí va tu lógica para la función que quieres ejecutar después del retraso
    };

  return (
    <div className='flex flex-col gap-1 items-center justify-center'>
    <div className="w-[332px]  ">{/*h-[389.5px]*/}
    

     
    <QrReader
              facingMode="environment"
              onResult={(result, error) => {
                onResultHandler(result,error);
                      }}
                      style={{width: "200px", heigth: "100px"  }}
       
      />

      
      <Modal backdrop={"blur"} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              {entradaAceptada && <ModalHeader className="flex flex-col gap-1 text-center text-2xl">ENTRADA ACEPTADA</ModalHeader>}
              {entradaRechazada && <ModalHeader className="flex flex-col gap-1 text-center text-2xl">ENTRADA RECHAZADA</ModalHeader>}
              {seleccionePuerta && <ModalHeader className="flex flex-col gap-1 text-center text-2xl">SELECCIONE UNA PUERTA</ModalHeader>}
              <ModalBody className="flex flex-row items-center justify-center">
                {entradaAceptada && <FcOk className=" text-[300px] text-green-500" />}
                {entradaRechazada && <MdCancel className=" text-[300px] text-red-500" />}
                {seleccionePuerta && <TbDoorOff className=" text-[300px] text-red-500" />}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
    {data && <p className="text-black  bg-white p-2 rounded-full text-center">{`Su hash es: ${data}`}</p>}
    </div>
  )
}

export default QRCodeScanner