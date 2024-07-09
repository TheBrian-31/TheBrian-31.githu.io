import React, {useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import backgroundImage from '../../assets/images/Fondo.jpg';
import { IoArrowBackSharp } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import { FaHouseUser } from "react-icons/fa";
import { GrUserPolice } from "react-icons/gr";
import { IoBarChart } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowLeftLine } from "react-icons/ri";
import { FaPersonCircleExclamation } from "react-icons/fa6";
import { useEffect } from 'react';
function OptionsPage() {

    const navigate = useNavigate();
    
    const [ADMNRenderization, setADMNRenderization] = useState(false);
    const [VIGIRenderization, setVIGIRenderization] = useState(false);
    const [REENRenderization, setREENRenderization] = useState(false);
    const [RESIRenderization, setRESIRenderization] = useState(false);
    const [VISIRenderization, setVISIRenderization] = useState(false);

   

    useEffect(() => {
        const rolesStorage = localStorage.getItem('roles');
        if (rolesStorage) {
            if(JSON.parse(rolesStorage).some(rol => ["ADMN"].includes(rol))){
                setADMNRenderization(true);
            } else {
                setADMNRenderization(false);
            }

            if(JSON.parse(rolesStorage).some(rol => ["VIGI"].includes(rol))){
                setVIGIRenderization(true);
            } else {
                setVIGIRenderization(false);
            }

            if(JSON.parse(rolesStorage).some(rol => ["REEN"].includes(rol))){
                setREENRenderization(true);
            } else {
                setREENRenderization(false);
            }

            if(JSON.parse(rolesStorage).some(rol => ["RESI"].includes(rol))){
                setRESIRenderization(true);
            } else {
                setRESIRenderization(false);
            }

            if(JSON.parse(rolesStorage).some(rol => ["VISI"].includes(rol))){
                setVISIRenderization(true);
            } else {
                setVISIRenderization(false);
            }
        } else {
            console.log('No se encontró el array en localStorage');
        }
      

    }, []);

   

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
        <h1 className="text-2xl font-bold text-center text-custom-yellow">Opciones</h1>
                    { (ADMNRenderization || REENRenderization)  && <Link to="/casa">
                    <div
                    className="flex flex-col gap-2 items-center justify-center m-2">
                        <div className="flex flex-row items-center justify-between p-3 bg-white w-full rounded-[6px] gap-2 hover:bg-[#929292] hover:text-[#FDB623] transition duration-500 ease-in-out"
                        >
                            <FaHouseChimney size={50} />
                            <p className="text-[20px] w-full  p-2">Lista de casas</p>
                            <IoIosArrowForward  size={50} />
                        </div>

                    </div>
                    </Link>}
                    { (ADMNRenderization)  &&<Link to="/estadisticas">
                    <div
                    className="flex flex-col gap-2 items-center justify-center m-2">
                        <div className="flex flex-row items-center justify-between p-3 bg-white w-full rounded-[6px] gap-2 hover:bg-[#929292] hover:text-[#FDB623] transition duration-500 ease-in-out"
                        >
                            <IoBarChart size={50} />
                            <p className="text-[20px] w-full  p-2">Estadisticas</p>
                            <IoIosArrowForward  size={50} />
                        </div>

                    </div>
                    </Link>}
                    {(VIGIRenderization || ADMNRenderization ) && <Link to="/control">
                    <div
                    className="flex flex-col gap-2 items-center justify-center m-2">
                        <div className="flex flex-row items-center justify-between p-3 bg-white w-full rounded-[6px] gap-2 hover:bg-[#929292] hover:text-[#FDB623] transition duration-500 ease-in-out"
                        >
                            <FaFileAlt size={50} />
                            <p className="text-[20px] w-full  p-2">Lista de Entradas</p>
                            <IoIosArrowForward  size={50} />
                        </div>

                    </div>
                    </Link>}
                    { (ADMNRenderization)  &&<Link to="/vigilante">
                    <div
                    className="flex flex-col gap-2 items-center justify-center m-2">
                        <div className="flex flex-row items-center justify-between p-3 bg-white w-full rounded-[6px] gap-2 hover:bg-[#929292] hover:text-[#FDB623] transition duration-500 ease-in-out"
                        >
                            <GrUserPolice size={50} />
                            <p className="text-[20px] w-full  p-2">Lista de vigilantes</p>
                            <IoIosArrowForward  size={50} />
                        </div>

                    </div>
                    </Link>}
                    {(REENRenderization || ADMNRenderization) && <Link to="/casa">
                    <div
                    className="flex flex-col gap-2 items-center justify-center m-2">
                        <div className="flex flex-row items-center justify-between p-3 bg-white w-full rounded-[6px] gap-2 hover:bg-[#929292] hover:text-[#FDB623] transition duration-500 ease-in-out"
                        >
                            <FaHouseUser size={50} />
                            <p className="text-[20px] w-full  p-2">Lista de residentes de una casa</p>
                            <IoIosArrowForward  size={50} />
                        </div>

                    </div>
                    </Link>}
                    {(VIGIRenderization || ADMNRenderization) &&<Link to="/formularioAnonimo">
                    <div
                    className="flex flex-col gap-2 items-center justify-center m-2">
                        <div className="flex flex-row items-center justify-between p-3 bg-white w-full rounded-[6px] gap-2 hover:bg-[#929292] hover:text-[#FDB623] transition duration-500 ease-in-out"
                        >
                            <FaPersonCircleExclamation size={50} />
                            <p className="text-[20px] w-full  p-2">Entrada anonima</p>
                            <IoIosArrowForward  size={50} />
                        </div>

                    </div>
                    
                    </Link>}
                    <Link to="/">
                    <div
                    className="flex flex-col gap-2 items-center justify-center m-2">
                        <div className="flex flex-row items-center justify-between p-3 bg-white w-full rounded-[6px] gap-2 hover:bg-[#929292] hover:text-[#FDB623] transition duration-500 ease-in-out"
                        >
                            <PiSignOutBold size={50} />
                            <p className="text-[20px] w-full  p-2">Cerrar sesion</p>
                            <IoIosArrowForward  size={50} />
                        </div>

                    </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default OptionsPage