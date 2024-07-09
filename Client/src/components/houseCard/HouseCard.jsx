import React from 'react';
import { RiDeleteBinLine, RiEdit2Line, RiUserAddFill } from "react-icons/ri";
import defectImage from '../../assets/images/HouseDefault.png';

const HouseCard = ({ houseNumber, capacity, managerH, image, onDelete, onEdit, onView }) => {
    return (
        <div className="flex flex-row justify-center w-full border border-black rounded p-4 bg-white">
            <div className="flex flex-col md:flex-row w-full">
                <div className="flex items-center flex-shrink-0 w-10 h-10 md:w-28 md:h-full md:border-r-4 md:p-1 md:border-gray-800">
                    {image ? (
                        <img src={image} alt="House" className="mx-auto w-10 h-10 md:w-28 md:h-28 object-cover" />
                    ) : (
                        <img src={defectImage} alt="Default" className="mx-auto w-10 h-10 md:w-28 md:h-28 object-cover" />
                    )}
                </div>
                <div className="flex flex-col justify-normal md:justify-center md:ml-3 flex-grow max-w-xs md:max-w-sm lg:max-w-md overflow-auto">
                    <p className="m-0 text-sm md:text-lg lg:text-lg font-bold">Casa #{houseNumber}</p>
                    <p className="m-0 text-sm md:text-lg lg:text-lg">Capacidad: {capacity}</p>
                    <p className="m-0 text-sm md:text-lg lg:text-lg">Encargado: {managerH}</p>
                </div>
            </div>
            <div className="flex flex-col ml-auto items-center">
                {onDelete && (
                    <button onClick={onDelete} className="flex items-center justify-center text-white bg-black border rounded p-1 md:p-2 m-1">
                        <RiDeleteBinLine className="text-lg md:text-xl" />
                    </button>
                )}
                {onEdit && (
                    <button onClick={onEdit} className="flex items-center justify-center text-white bg-black border rounded p-1 md:p-2 m-1">
                        <RiEdit2Line className="text-lg md:text-xl" />
                    </button>
                )}
                {onView && (
                    <button onClick={onView} className="flex items-center justify-center text-white bg-black border rounded p-1 md:p-2 m-1">
                        <RiUserAddFill className="text-lg md:text-xl" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default HouseCard;

