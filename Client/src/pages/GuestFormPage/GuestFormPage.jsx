import React from 'react'
import { useNavigate  } from 'react-router-dom';
import backgroundImage from '../../assets/images/Fondo.jpg';
import { IoArrowBackSharp } from "react-icons/io5";
import { RiArrowLeftLine } from "react-icons/ri";
import GuestForm from '../../components/guestForm/GuestForm';


function GuestFormPage() {
  
  const navigate = useNavigate();

  


  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className=" saturate-150 bg-cover bg-center h-screen w-full">
        <div className="bg-gradient-to-b from-transparent to-black bg-center h-screen w-full flex flex-col gap-3 items-center justify-center">
        
        <button onClick={handleGoBack} className="absolute top-0 left-0 mt-1 ml-1 md:mt-2 md:ml-2 text-white bg-black opacity-80 rounded p-1 md:p-2 flex items-center justify-center">
        <RiArrowLeftLine className="text-lg md:text-xl"/>
        </button>
        {/*Si es necesario agregar overflow-y-auto*/}
        <div className="w-10/12 h-full space-y-4 p-5 my-2 md:my-2 bg-custom-gray border-y-4 border-custom-yellow rounded-lg">
        <h1 className="text-2xl font-bold text-center text-custom-yellow">Formulario invitacion</h1>
                <div
                className="w-full h-auto flex flex-col items-center justify-center  gap-2">
                    <GuestForm/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GuestFormPage