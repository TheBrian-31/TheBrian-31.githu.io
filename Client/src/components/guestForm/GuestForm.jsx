import React, { useState, useEffect } from 'react';
import { Input, Select, SelectItem, DatePicker, DateRangePicker, TimeInput, Button } from "@nextui-org/react";
import { now, getLocalTimeZone, parseZonedDateTime, Time } from "@internationalized/date";
import { HiMiniUsers } from "react-icons/hi2";
import { FaClock } from "react-icons/fa";
import { useUserContext } from "../../context/userContext";
import { houseService } from '../../services/house.service';
import { permissionService } from '../../services/permission.service';

function GuestForm() {
  const casas = [
    { key: "casa1", label: "Casa 1" },
    { key: "casa2", label: "Casa 2" },
    { key: "casa3", label: "Casa 3" },
    { key: "casa4", label: "Casa 4" },
    { key: "casa5", label: "Casa 5" },
    { key: "casa6", label: "Casa 6" },
    { key: "casa7", label: "Casa 7" },
    { key: "casa8", label: "Casa 8" },
    { key: "casa9", label: "Casa 9" },
    { key: "casa10", label: "Casa 10" },
  ];

  const [entryType, setEntryType] = useState("");
  const [houses, setHouses] = useState({});
  const [fechaEntrada, setFechaEntrada] = useState();
  const [houseId, setHouseId] = useState();
  const [visitorId, setVisitorId] = useState();
  const [encargadoId, setEncargadoId] = useState();
  const { token, user } = useUserContext();
  const { getAllHouse } = houseService;
  const {createPermissionUniqueEntry} = permissionService

  useEffect(() => {
    const fetchHouses = async () => { 
            const response = await getAllHouse(token);
            if (response.ok) {
              
                //console.log(response.data);
                //console.log(user.email);
                //console.log(response.data.filter((house) => house.users[0].email === "00175520@uca.edu.sv"));
                const userHouses = response.data.filter((house) => house.users[0].email === user.email);
                const sortedHouses = [...userHouses].sort((a, b) => a.n_house - b.n_house);
                setHouses(sortedHouses);
               
                /*houses.map((casa) => (
                  console.log(casa)
                ))*/
            } else {
                console.log(response.message);
            }
       
    };

      if(user){
        fetchHouses();
      }
        
    
  }, [user]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    var unique_entry = `${fechaEntrada.year}-${fechaEntrada.day}-${fechaEntrada.month}`;
    if(fechaEntrada.day < 10){
     unique_entry = `${fechaEntrada.year}-0${fechaEntrada.day}-${fechaEntrada.month}`
    }

    if(fechaEntrada.month < 10){
      unique_entry= `${fechaEntrada.year}-${fechaEntrada.day}-0${fechaEntrada.month}`
    }

    console.log(fechaEntrada)
    if(fechaEntrada.day < 10 && fechaEntrada.month < 10){
      unique_entry = `${fechaEntrada.year}-0${fechaEntrada.day}-0${fechaEntrada.month}`
    }

    console.log(unique_entry);
    console.log({
      unique_entry, 
      houseId,
      encargadoId,
      visitorId,
      token
    });
    const success = await createPermissionUniqueEntry({
      unique_entry: unique_entry, 
      house_id:houseId,
      user_permitted_id: encargadoId,
      visitor_id: visitorId,
      token: token
    })
    
    console.log(success)

   

    /*const requestData = {
        unique_entry: ,
        house_id: ,
        user_permitted_id: ,
        visitor_id: ,
        token: localStorage.getItem('token')
    }*/
    /*console.log(requestData)
    const success = await request(requestData, token);
    console.log(success)*/
    // Aquí deberías enviar appointmentData a tu backend
    //console.log('Appointment Data:', appointmentData);
    
};
  return (
    <div className="flex flex-col w-full h-full gap-2">
      <form onSubmit={handleSubmit}>
      <label className="text-white">DUI o Correo Electronico
        <Input
          isClearable
          type="text"
          placeholder="example@example or 00000000"
          labelPlacement="outside"
          variant="faded"
          className="text-black"
          onChange={(e) => {setEncargadoId(e.target.value)}}
        />
      </label>

      <label className="text-white">Nombre del visitante
        <Input
          isClearable
          type="text"
          placeholder="Nombre del visitante"
          labelPlacement="outside"
          variant="faded"
          className="text-black"
          onChange={(e) => {setVisitorId(e.target.value)}}
        />
      </label>

      { houses.length > 0 && (
            <label className="text-white flex flex-col items-start"> {/* Corrige la clase "items-" a "items-start" */}
                Casa a visitar
                <Select label="Seleccione la casa a visitar" className="w-full" onChange={e => setHouseId(e.target.value)}>
                    {houses.map((casa) => (
                        <SelectItem key={casa.id}>
                            {`Casa: ${casa.n_house}`}
                        </SelectItem>
                    ))}
                </Select>
            </label>
        )}

      <label className="text-white flex flex-col items-">Tipo de entrada
        <Select
          label="Seleccione el tipo de entrada"
          className="w-full"
          value={entryType}
          onChange={(e) => {setEntryType(e.target.value);}}
        >
          <SelectItem key="opcion1" >Seleccione una opción</SelectItem>
          <SelectItem key="opcion2" >Entrada única</SelectItem>
          <SelectItem key="opcion3" >Entrada diaria</SelectItem>
          <SelectItem key="opcion4" >Entrada periódica</SelectItem>
        </Select>
      </label>

      {entryType === "opcion2" && (
        <label className="text-white flex flex-col items-">Entrada única
          <DatePicker
            label="Fecha y hora de visita"
            variant="faded"
            hideTimeZone
            showMonthAndYearPickers
            defaultValue={now(getLocalTimeZone())}
            onChange={(e) => {setFechaEntrada(e)}}
          />
        </label>
      )}

      {entryType === "opcion3" && (
        <div className="text-white flex flex-col items-">Entrada diaria
          <div className="flex flex-row gap-2 items-center justify-around">
            <DatePicker label="Fecha de visita" className="max-w-[284px]" />
            <TimeInput
              label="Hora de inicio"
              className="max-w-[284px]"
              defaultValue={new Time(11, 45)}
              startContent={(
                <FaClock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
              )}
            />
            <TimeInput
              label="Hora de fin"
              className="max-w-[284px]"
              defaultValue={new Time(11, 45)}
              startContent={(
                <FaClock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
              )}
            />
          </div>
        </div>
      )}

      {entryType === "opcion4" && (
        <label className="text-white flex flex-col items-">Entrada periódica
          <DateRangePicker
            label="Duración del evento"
            hideTimeZone
            visibleMonths={2}
            defaultValue={{
              start: parseZonedDateTime("2024-04-01T00:45[America/Los_Angeles]"),
              end: parseZonedDateTime("2024-04-08T11:15[America/Los_Angeles]"),
            }}
          />
        </label>
      )}

      <Button type="submit" className="bg-white w-[250px] grow max-w-[400px] h-[50px] max-h-[100px] text-purple-500 text-[20px]" variant="shadow" startContent={<HiMiniUsers size={50} />}>
        Solicitar permiso
      </Button>
      </form>
    </div>
  );
}

export default GuestForm;
