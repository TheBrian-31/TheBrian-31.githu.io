import React, {useState} from 'react'
import { permissionService } from '../../services/permission.service';
import { useUserContext } from "../../context/userContext";
function InvitationCard({
  permission = {}
}) {
  const [state, setEstate] = useState(permission.state.id);
  const [uniqueEntry, setUniqueEntry] = useState(permission.unique_entry ? permission.unique_entry.split("T")[0] : "No hay fecha");
  const {setPermission} = permissionService
  const { token, user } = useUserContext();

  const changeCard = async (button) => {
    if (button === 'aprobar') {
      
      const response = await setPermission({
        permissionId: permission.id,
        newStateId: "APRO",
        token:token
      });
      if (response.ok) {
        console.log(response);
        setEstate("APRO");
    } else {
        console.log(response.message);
    }
    } else if (button === 'rechazar') {
      
      const response = await setPermission({
        permissionId: permission.id,
        newStateId: "RECH",
        token:token
      });
      if (response.ok) {
        setEstate("RECH");
    } else {
        console.log(response.message);
    }
      
    }

    if(state === "APRO" || state === "RECH"){
      const response = await setPermission({
        permissionId: permission.id,
        newStateId: "PEND",
        token:token
      });

      if (response.ok) {
        setEstate("PEND");
    } else {
        console.log(response.message);
    }

    }
    
      
  };

  return (
    <div
    className={`w-full h-[200px] p-[20px] ${ state === "PEND" ? "bg-[#705E00]" : ""} ${ state === "APRO" ? "bg-[#0D1F17]" : ""} ${ state === "RECH" ? "bg-[#291415]" : ""} rounded-lg flex flex-col ` }>
        <div className="text-2xl text-white" >{`Nombre del visitante: ${permission.visitor.name}`}</div>
        <div className={`${ state === "PEND" ? "text-[#F0C000]" : ""} ${ state === "APRO" ? "text-[#50C28D]" : ""} ${ state === "RECH" ? "text-[#FD626B]" : ""} ` }>{`Residente normal 1, Fecha de entrada: ${uniqueEntry}`}</div>
        <div className="text-white">{ `Casa , 24/04/2024, 10:00 AM - 5:00 PM `}</div>
        <div className="flex  items-end justify-end   h-full gap-3">
          
          {state === "PEND" &&( 
            <>
              <button onClick={() => changeCard('aprobar')} className="bg-[#123124] p-3 rounded-full text-white text-base h-[39px] flex items-center justify-center">Aceptar</button> 
              <button onClick={() => changeCard('rechazar')} className="bg-[#661E23] p-3 rounded-full text-white h-[39px] flex items-center justify-center">Rechazar</button>
            </>      
          )}

          {(state === "APRO" || state === "RECH") &&( 
            <>
              <button  onClick={() => changeCard(null)} className="bg-[#661E23] p-3 rounded-full text-white h-[39px] flex items-center justify-center">Cancelar</button>
            </>      
          )}

          

        
        </div>
    </div>
  )
}

export default InvitationCard