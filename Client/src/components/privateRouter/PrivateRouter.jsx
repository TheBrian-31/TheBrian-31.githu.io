import React, {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from "../../context/userContext";

function PrivateRouter({ element, roles }) {
    //const { user } = useUserContext();
    var userRoles = [];
    const rolesStorage = localStorage.getItem('roles');
if (rolesStorage) {
     userRoles = JSON.parse(rolesStorage);
} else {
    console.log('No se encontró el array en localStorage');
}
    

    //console.log(roles.includes(user.roles))
    //console.log(roles)

    return roles.some(rol => userRoles.includes(rol)) ? element : <Navigate to="/formularioInicio" />;
}

export default PrivateRouter

