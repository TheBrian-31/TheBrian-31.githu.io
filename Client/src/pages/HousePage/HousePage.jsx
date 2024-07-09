import React, { useEffect, useState } from 'react';
import backgroundImage from '../../assets/images/Fondo.jpg';
import { useNavigate } from 'react-router-dom';
import HouseListEdit from '../../components/houseListEdit/HouseListEdit';
import HouseListByUser from '../../components/houseListByUser/HouseListByUser';
import { RiArrowLeftLine } from "react-icons/ri";

function HousePage() {
    const navigate = useNavigate();
    const [showHouseListEdit, setShowHouseListEdit] = useState(false);
    const [showHouseListByUser, setShowHouseListByUser] = useState(false);

    useEffect(() => {
        const rolesStorage = localStorage.getItem('roles');
        if (rolesStorage) {
        const roles = JSON.parse(rolesStorage);
        if (roles.includes('ADMN')) {
            setShowHouseListEdit(true);
        } else if (roles.includes('REEN')) {
            setShowHouseListByUser(true);
        }
        } else {
        console.log('No se encontró el array en localStorage');
        }
    }, []);

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className="saturate-150 bg-cover bg-center h-screen w-full">
        <div className="bg-gradient-to-b from-transparent to-black bg-center h-screen w-full flex flex-col gap-3 items-center justify-center">
            <button onClick={handleGoBack} className="absolute top-0 left-0 mt-1 ml-1 md:mt-2 md:ml-2 text-white bg-black opacity-80 rounded p-1 md:p-2 flex items-center justify-center">
            <RiArrowLeftLine className="text-lg md:text-xl"/>
            </button>
            {showHouseListEdit ? <HouseListEdit/> : showHouseListByUser ? <HouseListByUser/> : null}
        </div>
        </div>
    )
}

export default HousePage;