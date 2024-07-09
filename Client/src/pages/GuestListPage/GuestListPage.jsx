import React, { useEffect, useState} from 'react'
import { useNavigate  } from 'react-router-dom';
import backgroundImage from '../../assets/images/Fondo.jpg';
import { IoArrowBackSharp } from "react-icons/io5";
import { RiArrowLeftLine } from "react-icons/ri";
import InvitationCard from '../../components/invitationCard/InvitationCard';
import { useUserContext } from "../../context/userContext";
import { permissionService } from '../../services/permission.service';
import {CircularProgress} from "@nextui-org/react";
function GuestListPage() {
  const { token, user } = useUserContext();
  const [permissions, setPermissions] = useState({});
  const {getAllPermission} = permissionService
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPermissions = async () => { 
            const response = await getAllPermission(token);
            if (response.ok) {
                //console.log(response.data);
                setPermissions(response.data)
                console.log(response.data);
            } else {
                console.log(response.message);
            }
        
    };

      if(user){
        fetchPermissions();
      }
  }, [user]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className=" saturate-150 bg-cover bg-center h-screen w-full">
        <div className="bg-gradient-to-b from-transparent to-black bg-center h-screen w-full flex flex-col gap-3 items-center justify-center">
            <button onClick={handleGoBack} className="absolute top-0 left-0 mt-1 ml-1 md:mt-2 md:ml-2 text-white bg-black opacity-80 rounded p-1 md:p-2 flex items-center justify-center">
            <RiArrowLeftLine className="text-lg md:text-xl"/>
            </button>

            <div className="flex flex-col w-10/12 h-full space-y-4 p-5 my-2 md:my-2 bg-custom-gray border-y-4 border-custom-yellow rounded-lg">
            <h1 className="text-2xl font-bold text-center text-custom-yellow">Lista de invitados</h1>
            
            {permissions.length > 0 ? (
            <div className="overflow-y-auto h-full flex flex-col gap-4	">
              {permissions.map((permission) => (
                <InvitationCard key={permission.id} permission={permission} />
              ))}
            </div>
          ) : (
            <>
              <p className="text-center text-custom-yellow">Loading</p>
              <CircularProgress size="lg" aria-label="Loading..." />
            </>
          )}
 
       
            </div>
        </div>
    </div>
  )
}

export default GuestListPage