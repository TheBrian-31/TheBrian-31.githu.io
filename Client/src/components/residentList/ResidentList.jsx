import React, { useState } from 'react';
import PeopleCard from '../peopleCard/PeopleCard';
import houseImage from '../../assets/icons/react.svg';
import { RiUserAddFill } from "react-icons/ri";
import {
    Button,
    Input,
  } from "@material-tailwind/react";


const initialUsers = [
    { username: 'Juan Perez', DUI: '00000000-0', Email: 'juan@gmail.com'},
    { username: 'Maria Lopez', DUI: '11111111-1', Email: 'maria@gmail.com', image: houseImage },
    { username: 'Pedro Martinez', DUI: '22222222-2', Email: 'maria@gmail.com', image: houseImage },
    { username: 'Ana Garcia', DUI: '33333333-3', Email: 'maria@gmail.com'},
    { username: 'Jose Rodriguez', DUI: '44444444-4', Email: 'maria@gmail.com', image: houseImage },
    { username: 'Laura Perez', DUI: '55555555-5', Email: 'Laura@gmail.com', image: houseImage },
    { username: 'Maria Lopez', DUI: '11111111-1', Email: 'maria@gmail.com'},
    { username: 'Pedro Martinez', DUI: '22222222-2', Email: 'maria@gmail.com', image: houseImage },
    { username: 'Ana Garcia', DUI: '33333333-3', Email: 'maria@gmail.com', image: houseImage },
    { username: 'Jose Rodriguez', DUI: '44444444-4', Email: 'maria@gmail.com', image: houseImage },
    { username: 'Laura Perez', DUI: '55555555-5', Email: 'Laura@gmail.com', image: houseImage },
];
{/*<ResidentList house={casaH}/>*/}
const ResidentList = ({house}) => {
    const [users, setUsers] = useState(initialUsers);

    const handleDelete = (DUI) => {
        const updatedUsers = users.filter(user => user.DUI !== DUI);
        setUsers(updatedUsers);
    };
    return (
        <div className="w-11/12 md:w-10/12 h-full overflow-y-auto space-y-4 p-5 my-2 md:my-2 bg-custom-gray border-y-4 border-custom-yellow rounded-lg">
        <div className="flex flex-row items-center justify-center w-full md:w-full lg:w-1/2 mx-auto gap-2">
        <h1 className="text-2xl font-bold text-center text-custom-yellow">Residentes Casa # {house}</h1>
        <button className="flex items-center justify-center text-custom-yellow p-1 md:p-2 m-1">
                    <RiUserAddFill className="text-2xl md:text-3xl" />
        </button>
        </div>
        <div className="relative flex flex-wrap w-full md:w-full lg:w-1/2 mx-auto gap-2">
                <Input
                    type="search"
                    color="white"
                    label="Buscar..."
                    containerProps={{
                        className: "w-full",
                    }}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button
                    size="sm"
                    color="white"
                    className="!absolute md:relative right-1 top-1 rounded"
                >
                    Search
                </Button>
            </div>
        <div className="w-auto grid grid-cols-1 lg:grid-cols-2 gap-3">
            {/* Mapea la lista de casas y crea un componente HouseCard para cada una */}
            {users.map((user, index) => (
                <PeopleCard key={index} 
                username={user.username} 
                DUI={user.DUI}
                Email={user.Email}
                image={user.image}
                onDelete={() => handleDelete(user.DUI)}
                />
            ))}
        </div>
        </div>
    );
};

export default ResidentList;