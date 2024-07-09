import React, { useState, useContext } from 'react';
import { Input, Select, SelectItem, Button } from "@nextui-org/react";
import { HiMiniUsers } from "react-icons/hi2";
import { useUserContext } from '../../context/userContext';
import { anonymousService } from '../../services/anonymous.service';

const entryOptions = [
  { value: "doorone", label: "Puerta peatonal" },
  { value: "doortwo", label: "Puerta de automóvil" }
];

const AnonymousForm = () => {
  const { token } = useUserContext;
  const [entryType, setEntryType] = useState(""); 

  const handleSelectChange = (value) => {
    console.log("Selected value:", value); // Debug log
    setEntryType(value);
  };

  const handleButtonClick = async () => {
    try {
      const dataOn = { token, key: entryType, value: "ON" };
      console.log("Sending ON request:", dataOn); // Debug log
      const response = await anonymousService.actionDoor(dataOn);

      if (response.ok) {
        console.log("Action performed successfully");
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 40 seconds

        const dataOff = { token, key: entryType, value: "OFF" };
        console.log("Sending OFF request:", dataOff); // Debug log
        const responseOff = await anonymousService.actionDoor(dataOff);

        if (responseOff.ok) {
          console.log("Action performed successfully with value OFF");
        } else {
          console.error("Error with OFF request:", responseOff.message);
        }
      } else {
        console.error("Error with ON request:", response.message);
      }
    } catch (error) {
      console.error("Unexpected error:", error.message);
    }
  };

  return (
    <div className="flex flex-col w-full h-full items-center gap-5">
      <label className="w-10/12 md:w-8/12 text-white text-sm md:text-lg">¿Quién entra?
        <Input
          isClearable
          type="text"
          placeholder="Nombre del visitante"
          labelPlacement="outside"
          variant="faded"
          className="text-black"
        />
      </label>

      <label className="w-10/12 md:w-8/12 text-white text-sm md:text-lg">¿Cuál es la razón de la entrada?
        <Input
          isClearable
          type="text"
          placeholder="Razón de entrada"
          labelPlacement="outside"
          variant="faded"
          className="text-black"
        />
      </label>

      <label className="w-10/12 md:w-8/12 text-white text-sm md:text-lg">¿Qué tipo de entrada?
        <Select
          value={entryType}
          onChange={(e) => handleSelectChange(e.target.value)}
          placeholder="Selecciona el tipo de entrada"
          className="text-black"
        >
          {entryOptions.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>
      </label>

      <Button
        className="bg-white w-8/12 md:w-5/12 grow max-w-xs md:max-w-lg h-12 max-h-24 text-purple-500 text-sm md:text-lg mt-10"
        variant="shadow"
        startContent={<HiMiniUsers size={50} />}
        onClick={handleButtonClick}
      >
        Abrir puerta
      </Button>
    </div>
  );
}

export default AnonymousForm;

