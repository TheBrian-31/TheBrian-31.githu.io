import React, { useState, useEffect } from 'react';
import {QRCodeSVG} from 'qrcode.react';
import Logo from '../../assets/images/LogoB.png';
import {Progress,Card, CardHeader, CardBody, CardFooter,Skeleton} from "@nextui-org/react";
import { RiArrowLeftLine,RiArrowRightLine } from "react-icons/ri";

import { permissionService } from '../../services/permission.service';

import { hashService } from '../../services/hash.service';
const qrCodes = [
    
    "https://picturesofpeoplescanningqrcodes.tumblr.com/",
    "https://developer.mozilla.org/es/",
    "https://go.dev/",
    "https://www.minecraft.net/es-es",
    "https://open.spotify.com/intl-es"
    // Agrega más URLs de imágenes aquí según sea necesario
  ];

 
function QRCodeGenerator({value ="https://picturesofpeoplescanningqrcodes.tumblr.com/",
    size = 300,
    bgColor = "#ffffff",
    fgColor = "#000000",
    level="H",
    includeMargin = false,
    imageSettings,
    user,
    token
  }) {

            
    const [seconds, setSeconds] = useState(600); // Inicia el contador en 600 segundos (10 minutos)
    const [nextIndex, setNextIndex] = useState(0);
    const [sizeQR, setSizeQR] = useState(size);
    const [isLoaded, setIsLoaded] = useState(false);


    const [carruselCurrentIndex, setCarruselCurrentIndex] = useState(0);
    const [hashQRNow, sethashQRNow] = useState();
    const [permissions, setPermissions] = useState({});
    const {getAllPermissionByUser} = permissionService
    const {getHash} = hashService

    const handlePrev = async() => {
      setSeconds(600);
      console.log("CARRUSEL",permissions[carruselCurrentIndex-1]);
      const res = await generateHash(permissions[carruselCurrentIndex-1].id,token)
      console.log(res);
      if(res.success){
        sethashQRNow(res.data);
      }
      if (carruselCurrentIndex > 0) {
        setCarruselCurrentIndex((prevIndex) => prevIndex - 1);
      }
    };
  
    const handleNext = async() => {
      setSeconds(600);
      console.log("CARRUSEL",permissions[carruselCurrentIndex+1]);
      const res = await generateHash(permissions[carruselCurrentIndex+1].id,token)
      console.log(res);
      if(res.success){
        sethashQRNow(res.data);
      }

      if (carruselCurrentIndex < permissions.length - 1) {
        setCarruselCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(!isLoaded);
        }, 800); // 3000ms delay
        return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
    }, []);

    const incrementCount = async() => {
        console.log(qrCodes[nextIndex]);
        const res = await generateHash(permissions[carruselCurrentIndex].id,token)
        console.log(res);
        if(res.success){
          sethashQRNow(res.data);
        }
        //setNextIndex((prevIndex) => (prevIndex + 1) % qrCodes.length);
        setSeconds(600);
        console.log(nextIndex);
        console.log(!isLoaded);
        
        setIsLoaded(!isLoaded);
        setTimeout(() => {
            setIsLoaded(isLoaded);
            console.log('TEST');
          }, 600); // cambiar este valor para ajustar la duración

          
      };

      const generateHash = async (idPermission, token) => {
          const response = await getHash(idPermission,token);
                if (response.ok) {
                    //console.log(response.data);
                    //setPermissions(response.data)
                    return { success: true, data: response.data };
                } else {
                    //console.log(response.message);
                    return { success: false, message: response.message };
                }
          
      };

      useEffect(() => {
        if (seconds === 0) {
          console.log('El contador ha terminado!');
          incrementCount(nextIndex);
          return;
        }

        const timerId = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
        return () => clearInterval(timerId);
      }, [seconds]);


     useEffect(() => {
        const fetchPermissions = async () => { 
          console.log(user.email);
          console.log(token);
                const response = await getAllPermissionByUser(user.email,token);
                if (response.ok) {
                    //console.log(response.data);
                    var per = response.data.filter(permission => permission.state.id === 'APRO');
                    setPermissions(per)
                    if(per.length > 0){
                    const res = await generateHash(per[0].id,token)
                    console.log("PERRRRR2222222222222",response.data);
                    console.log("PERRRRR",response.data[0].id);
                    console.log("DATA",res);
                    if(res.success){
                      sethashQRNow(res.data);
                    }
                  }
                    

                    console.log(response.data);
                    console.log(user);
                } else {
                    console.log(response.message);
                }
            
        };
    
          if(user && token){
            fetchPermissions();
          }
      }, [user]);


    
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      const porcentaje = (seconds * 100) / 600;
      

  return (
    <div className='flex flex-col gap-2 items-center justify-center'>
      <div className='flex flex-row gap-2 bg-white'>
        <div>{`Nombre del visitante: ${user.name}`}</div>
        <div>{`Numero de casa: 2`}</div>

      </div>
    <div className='flex flex-row gap-2 '>
    {carruselCurrentIndex > 0 ? (
            <button onClick={handlePrev} className="flex items-center justify-center w-20 h-20 mt-[126px] bg-blue-500 text-white rounded-full">
    <RiArrowLeftLine className="text-[200px] "/>
</button>): (
        <div className="w-[80px] h-[200px]"></div>
      )}


    <div onClick={incrementCount} className={`flex flex-col gap-1 items-center justify-center bg-transparent shrink-0 grow-0 w-[332px] h-[389.5px]`}>
        <Skeleton isLoaded={isLoaded} className="rounded-lg w-[332px] h-[332px]">
        <div className="bg-white p-4 ">
        <QRCodeSVG
            value={hashQRNow}
            size={sizeQR}
            bgColor={bgColor}
            fgColor={fgColor}
            level={level}
            includeMargin={includeMargin}
            imageSettings={{
                src: Logo,
                x: undefined,
                y: undefined,
                height: 63,
                width: 150,
                excavate: true,
            }}
            />
        </div>
        </Skeleton>

      <p className="text-white text-[25px] text-left">Nuevo codigo en {minutes}:{remainingSeconds < 10 ? '0' : ''}{remainingSeconds}</p>


<Progress
        size="md"
        value={porcentaje}
        color={porcentaje < 25 ? 'danger' : porcentaje < 50 ? 'warning' : 'success'} 
        className="max-w-md text-9xl text-white"
    />
    </div>
    {carruselCurrentIndex < permissions.length - 1 ? (
    <button onClick={handleNext} className="flex items-center justify-center w-20 h-20 mt-[126px] bg-blue-500 text-white rounded-full">
    <RiArrowRightLine className="text-[200px] "/>
</button>
    ) : (
      <div className="w-[80px] h-[200px]"></div>
    )}
    </div>
    </div>
  )
}

export default QRCodeGenerator