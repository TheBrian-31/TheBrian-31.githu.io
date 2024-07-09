import React from 'react';
import GoogleLogin from "./components/GoogleLogin";
import backgroundImage from '../../assets/images/Fondo.jpg';
import logoHVLS from '../../assets/images/HVLS_logo.png';

import { useUserContext } from "../../context/userContext";

function Login() {
  const { loginWithGoogle, user } = useUserContext();

  const onGoogleSignIn = async (res) => {
    const { credential } = res;
    console.log('Credential:', credential);

    const signInResponse = await loginWithGoogle(credential);

    if (!signInResponse) {
      alert('El inicio de sesión no se completó. Por favor, intenta de nuevo.');
      return;
    }
    
    console.log('Usuario autenticado con Google');
    console.log('Usuario:', user);
    /*
    if(user){
      localStorage.setItem("roles",  JSON.stringify(user.roles.map(role => role.id)));
    }*/
    
    // Redirigir a la página de inicio
    window.location.href = '/#/home';
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className="saturate-150 bg-cover bg-center h-screen w-full">
      <div className="bg-gradient-to-b from-transparent to-black bg-center h-screen w-full flex flex-col gap-3 items-center justify-center">
        <img src={logoHVLS} alt="Logo HVLS" className="mx-auto w-64 md:w-128 object-cover" />
        <h1 className="text-white text-4xl md:text-6xl font-bold">HVLS</h1>
        <h2 className="text-custom-blue text-xl md:text-2xl font-bold">Manejo de visitantes</h2>
        <GoogleLogin onGoogleSignIn={onGoogleSignIn} />
      </div>
    </div>
  )
}

export default Login;
