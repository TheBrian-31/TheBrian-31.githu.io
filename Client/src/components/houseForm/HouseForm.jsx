import React, { useState, useEffect, useContext } from 'react';
import { Input, Button } from "@nextui-org/react";
import { FaHouseChimney } from "react-icons/fa6";
import { HiUserAdd } from "react-icons/hi";
import { houseService } from '../../services/house.service';
import { useUserContext } from "../../context/userContext";

function HouseForm() {
  const { token } = useUserContext();
  const [houseData, setHouseData] = useState({
    n_house: '',
    capacity: '',
    userIdentifier: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHouseData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveHouse = async () => {
    const response = await houseService.saveHouse({ 
      ...houseData, 
      token 
    });
    if (response.ok) {
      setMessage("Casa creada con éxito");
      //Limpiar formulario
      setHouseData({
        n_house: '',
        capacity: '',
        userIdentifier: ''
      });
    } else {
      setMessage("Datos inválidos");
    }
  };

  return (
    <div className="flex flex-col w-full h-full gap-2">
      <label className="text-white">Número de Casa
        <Input
          isClearable
          type="text"
          name="n_house"
          value={houseData.n_house}
          onChange={handleChange}
          placeholder="#506"
          labelPlacement="outside"
          variant="faded"
          className="text-black"
        />
      </label>

      <label className="text-white">Capacidad
        <Input
          isClearable
          type="text"
          name="capacity"
          value={houseData.capacity}
          onChange={handleChange}
          placeholder="5"
          labelPlacement="outside"
          variant="faded"
          className="text-black"
        />
      </label>

      <label className="text-white">Residente encargado
        <Input
          isClearable
          type="text"
          name="userIdentifier"
          value={houseData.userIdentifier}
          onChange={handleChange}
          placeholder="example@example.com or 00000000"
          labelPlacement="outside"
          variant="faded"
          className="text-black"
        />
      </label>

      <div className="flex flex-row items-end justify-around grow mb-[200px]">
        <Button 
          className="bg-white w-[250px] grow max-w-[250px] h-[50px] max-h-[100px] text-purple-500 text-[20px]" 
          variant="shadow" 
          startContent={<FaHouseChimney size={50}/>}
          onClick={handleSaveHouse}
        >
          Crear Casa
        </Button>

      </div>
      {message && <p className='text-custom-yellow'>{message}</p>}
    </div>
  );
}

export default HouseForm;
