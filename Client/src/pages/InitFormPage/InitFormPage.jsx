import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/images/Fondo.jpg';
import { RiArrowLeftLine } from "react-icons/ri";
import { Input, Button } from "@nextui-org/react";
import { userService } from '../../services/user.service';
import { useUserContext } from "../../context/userContext";import { useEffect } from 'react';
; // Asegúrate de que esta ruta sea correcta

function InitFormPage() {
    const navigate = useNavigate();
    const { token } = useUserContext();
    const [dui, setDui] = useState('');
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleEditUser = async () => {
        setLoading(true);
        console.log('Token:', token);
        console.log('DUI:', dui);
        console.log('Username:', username);
        const response = await userService.editDataUser({ dui, username, token });
        setLoading(false);

        if (response.ok) {
            setMessage('Usuario editado con éxito');
            localStorage.clear();
            window.location.href = '/';
        } else {
            setMessage(response.message);
        }
    };

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className="saturate-150 bg-cover bg-center h-screen w-full">
            <div className="bg-gradient-to-b from-transparent to-black bg-center h-screen w-full flex flex-col gap-3 items-center justify-center">
                <button onClick={handleGoBack} className="absolute top-0 left-0 mt-1 ml-1 md:mt-2 md:ml-2 text-white bg-black opacity-80 rounded p-1 md:p-2 flex items-center justify-center">
                    <RiArrowLeftLine className="text-lg md:text-xl" />
                </button>
                <div className="w-11/12 md:w-10/12 h-full overflow-y-auto space-y-4 p-5 my-2 md:my-2 bg-custom-gray border-y-4 border-custom-yellow rounded-lg">
                    <h1 className="text-2xl font-bold text-center text-custom-yellow">Formulario de inicio</h1>
                    <div className="w-full h-auto flex flex-col items-center justify-center gap-2">
                        <div className="flex flex-col w-full h-full items-center gap-5">
                            <label className="w-10/12 md:w-8/12 text-white text-sm md:text-lg">DUI
                                <Input
                                    clearable
                                    type="text"
                                    placeholder="Número de DUI"
                                    value={dui}
                                    onChange={(e) => setDui(e.target.value)}
                                    className="text-black"
                                />
                            </label>

                            <label className="w-10/12 md:w-8/12 text-white text-sm md:text-lg">Nombre de usuario
                                <Input
                                    clearable
                                    type="text"
                                    placeholder="Nombre de usuario"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="text-black"
                                />
                            </label>

                            <Button
                                className="bg-white w-8/12 md:w-5/12 grow max-w-xs md:max-w-lg h-12 max-h-24 text-purple-500 text-sm md:text-lg mt-10"
                                variant="shadow"
                                onClick={handleEditUser}
                                disabled={loading}
                            >
                                {loading ? 'Editando...' : 'Editar Usuario'}
                            </Button>

                            {message && <p className='text-custom-yellow'>{message}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InitFormPage;
