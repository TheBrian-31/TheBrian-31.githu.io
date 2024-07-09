import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { HiUserAdd } from "react-icons/hi";
import { FaClipboardList } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";

function Navbar() {

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


  return (
    <div className="flex flex-row sm:flex-wrap justify-center items-center w-auto gap-4 m-4">
      {(ADMNRenderization || VIGIRenderization || REENRenderization|| RESIRenderization) && <Link to="/invitar">
        <button className="flex items-center justify-center rounded-md text-purple-500 p-1 md:p-8 m-1 bg-white w-full max-w-sm h-10 sm:h-12 text-sm sm:text-lg">
          <HiUserAdd className="text-2xl md:text-3xl p-1" />
          <span>Invitar</span>
        </button>
      </Link>}
      {(ADMNRenderization || VIGIRenderization || REENRenderization) &&<Link to="/invitados">
        <button className="flex items-center justify-center rounded-md text-purple-500 p-1 md:p-8 m-1 bg-white w-full max-w-sm h-10 sm:h-12 text-sm  sm:text-lg">
          <FaClipboardList className="text-2xl md:text-3xl p-1" />
          <span>Lista de invitados</span>
        </button>
      </Link>}
      <Link to="/opciones">
        <button className="flex items-center justify-center rounded-md text-purple-500 p-1 md:p-8 m-1 bg-white w-full max-w-sm h-10 sm:h-12  text-sm  sm:text-lg">
          <CiCircleList className="text-2xl md:text-3xl p-1" />
          <span>Opciones</span>
        </button>
      </Link>
    </div>
  )
}

export default Navbar