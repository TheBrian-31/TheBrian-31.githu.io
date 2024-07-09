import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import HouseCard from '../houseCard/HouseCard';
import houseImage from '../../assets/images/HouseDefault.png';
import { RiMenuSearchLine } from "react-icons/ri";
import { BsFillHouseAddFill } from "react-icons/bs";
import { Input, Button } from "@material-tailwind/react";
import { useUserContext } from "../../context/userContext";
import { houseService } from '../../services/house.service';
import { userService } from '../../services/user.service';

const HouseListEdit = () => {
    const [houses, setHouses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { token } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHouses = async () => {
            if (token) {
                const response = await userService.getAllHouseByUser(token);
                if (response.ok) {
                    setHouses(response.data);
                } else {
                    console.log(response.message);
                }
            }
        };

        fetchHouses();
    }, [token]);

    const handleView = (houseId) => {
        navigate(`/residentes/${houseId}`);
    };

    const getFilteredHouses = () => {
        if (!searchTerm) return houses;
        return houses.filter(house => house.users[0].name .toLowerCase().includes(searchTerm.toLowerCase()));
    };

    return (
        <div className="w-11/12 md:w-10/12 h-full overflow-y-auto space-y-4 p-5 my-2 md:my-2 bg-custom-gray border-y-4 border-custom-yellow rounded-lg">
            <div className="flex flex-row items-center justify-center w-full md:w-full lg:w-1/2 mx-auto gap-2">
                <h1 className="text-2xl font-bold text-center text-custom-yellow">Casas</h1>
                <div className="flex items-center justify-center text-custom-yellow p-1 md:p-2 m-1">
                    <BsFillHouseAddFill className="text-2xl md:text-3xl" />
                </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full md:w-3/4 lg:w-1/2 mx-1 md:mx-auto gap-1 md:gap-2">
                <Input
                    type="search"
                    color="white"
                    label="Buscar..."
                    containerProps={{
                        className: "w-4/6 md:w-3/4",
                    }}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="w-auto grid grid-cols-1 lg:grid-cols-2 gap-3">
                {getFilteredHouses().map((house, index) => (
                    <HouseCard key={index}
                        houseNumber={house.n_house}
                        capacity={house.capacity}
                        managerH={house.users && house.users[0] ? house.users[0].name : "Anonimo"}
                        image={house.image || houseImage}
                        onView={() => handleView(house.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HouseListEdit;
