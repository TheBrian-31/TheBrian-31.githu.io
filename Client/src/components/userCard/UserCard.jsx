import React, { useState, useEffect } from 'react';
import { Card, CardBody, Image, Skeleton, Chip } from "@nextui-org/react";
import defectImage from '../../assets/images/Userdefault.png';

function UserCard({ name, userEmail, rolesCard }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000); // 1000ms delay
        return () => clearTimeout(timer); // Clean up the timer if the component unmounts
    }, []);

    return (
        <>
            <Card
                isBlurred
                className="border-none bg-black-600  w-11/12 md:w-1/2 md:shadow-sm shado"
                shadow="sm"
            >
                <CardBody className="flex flex-row gap-4">
                    <Skeleton isLoaded={isLoaded} className="rounded-lg md:w-7/12 w-3/4 md:h-7/12 h-3/4">
                        <Image
                            src={isLoaded ? defectImage : "https://via.placeholder.com/150"}
                            alt="Card image"
                            width={150}
                            height={150}
                            className="w-full" // Agrega la clase CSS w-full para pantallas más pequeñas
                        />
                    </Skeleton>
                    <div className="flex flex-col gap-1 items-center justify-center text-gray-100">
                        <Skeleton isLoaded={isLoaded} className="rounded-lg">
                            <h1>{name}</h1>
                        </Skeleton>
                        <p>
                            {userEmail}
                        </p>
                        <div className='flex flex-wrap gap-1'>
                        {rolesCard && rolesCard.map((item, index) => {
                            if (item === "ADMN") {
                                return <Chip key={index} className="bg-[#052814] border-[#17C964] border-2 text-[#17C964]">Administrador</Chip>;
                            } else if (item === "VIGI") {
                                return <Chip key={index} className="bg-[#052814] border-[#17C964] border-2 text-[#17C964]">Vigilante</Chip>;
                            } else if (item === "REEN") {
                                return <Chip key={index} className="bg-[#052814] border-[#17C964] border-2 text-[#17C964]">Residente encargado</Chip>;
                            } else if (item === "RESI") {
                                return <Chip key={index} className="bg-[#052814] border-[#17C964] border-2 text-[#17C964]">Residente</Chip>;
                            } else if (item === "VISI") {
                                return <Chip key={index} className="bg-[#052814] border-[#17C964] border-2 text-[#17C964]">Visitante</Chip>;
                            } else {
                                return null; // Return null if none of the conditions match
                            }
                        })}
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}

export default UserCard;