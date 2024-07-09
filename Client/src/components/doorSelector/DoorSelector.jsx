import React, {useState} from 'react';
import {Select, SelectItem} from "@nextui-org/react";
import { FaDoorClosed } from "react-icons/fa";
const doors = [
    {label: "Porton 1", value: "doorone"},
    {label: "Porton 2", value: "doortwo"},
  ];

function DoorSelector({onValueChange }) {
    const [selectedDoor, setSelectedDoor] = useState("Porton_1");
    
    const handleSelect = (value) => {
        console.log(value.target.value);
      setSelectedDoor(value.target.value);
      onValueChange(value.target.value);
    };

    let color;
switch (selectedDoor) {
  case 'doorone':
    console.log('Entró a Porton_1');
    color = "purple";
    break;
  case 'doortwo':
    color = "danger";
    break;
  // Agrega más casos según sea necesario
  default:
    color = 'default';
}
  return (
    <div className="flex p-2 w-5/12 md:w-3/12 ml-auto">
        <Select
            color={color}
            label="Portón"
            placeholder="Seleccione un porton"
            startContent={<FaDoorClosed />}
            defaultSelectedKeys={["Porton_1"]}
            className="w-full"
            onChange={handleSelect}
        >
            {doors.map((door) => (
            <SelectItem key={door.value} value={door.value}>
            {door.label}
            </SelectItem>
            ))}
        </Select>
    </div>
  )
}

export default DoorSelector