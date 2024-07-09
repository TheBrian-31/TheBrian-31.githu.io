import React, { useState, useEffect, useContext } from 'react';
import PeopleCard from '../peopleCard/PeopleCard';
import houseImage from '../../assets/images/Userdefault.png';
import { RiUserAddFill } from "react-icons/ri";
import { Input, Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
import { houseService } from '../../services/house.service';
import { useUserContext } from "../../context/userContext";
import { userService } from '../../services/user.service';
import { useParams } from 'react-router-dom';

const ResidentListHouse = () => {
    const { houseId } = useParams();
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { token } = useUserContext();
    const [house, setHouse] = useState({});
    const [showDialog, setShowDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const fetchHouseUsers = async () => {
            if (token && houseId) {
                try {
                    const response = await houseService.getAllHouse(token);
                    if (response.ok) {
                        const houses = response.data;
                        const house = houses.find(house => house.id === houseId);
                        if (house) {
                            setHouse(house);
                            setUsers(house.users);
                        }
                    } else {
                        console.log(response.message);
                    }
                } catch (error) {
                    console.error("Error fetching house users:", error);
                }
            }
        };

        fetchHouseUsers();
    }, [token, houseId]);

    const handleDelete = async (userIdentifier) => {
        const data = { houseId, userIdentifier, token };
        try {
            const response = await houseService.removeToUserHouse(data);
            if (response.ok) {
                setUsers(users.filter(user => user.email !== userIdentifier));
            } else {
                console.log(response.message);
            }
        } catch (error) {
            console.error("Error removing user from house:", error);
        }
    };

    const getFilteredUsers = () => {
        if (!searchTerm) return users;
        return users.filter(user => user.email.toLowerCase().includes(searchTerm.toLowerCase()));
    };

    const handleAdd = async () => {
        const data = { token, email: searchTerm };
        const response = await userService.getUserDataByEmail(data);
        if (response.ok) {
            setSelectedUser(response.data);
            setShowDialog(true);
        } else {
            console.log(response.message);
        }
    };

    const handleConfirm = async () => {
        if (selectedUser) {
            const data = { houseId, userIdentifier: selectedUser.email, token };
            const response = await houseService.assignToUserHouse(data);
            if (response.ok) {
                setUsers([...users, selectedUser]);
                setShowDialog(false);
                setSelectedUser(null);
            } else {
                console.log(response.message);
                setShowDialog(false);
            }
        }
    };

    const handleCancel = () => {
        setShowDialog(false);
        setSelectedUser(null);
    };

    return (
        <div className="w-11/12 md:w-10/12 h-full overflow-y-auto space-y-4 p-5 my-2 md:my-2 bg-custom-gray border-y-4 border-custom-yellow rounded-lg">
            <div className="flex flex-row items-center justify-center w-full md:w-full lg:w-1/2 mx-auto gap-2">
                <h1 className="text-2xl font-bold text-center text-custom-yellow">Residentes Casa #{house.n_house}</h1>
                <button className="flex items-center justify-center text-custom-yellow p-1 md:p-2 m-1">
                    <RiUserAddFill className="text-2xl md:text-3xl" />
                </button>
            </div>
            <div className="flex flex-row items-center justify-center w-full md:w-3/4 lg:w-1/2 mx-1 md:mx-auto gap-1 md:gap-2">
                <Input
                    type="search"
                    color="white"
                    label="Buscar..."
                    containerProps={{
                        className: "w-4/6 md:w-3/4",
                    }}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className="flex items-center justify-center text-custom-yellow bg-gray-900 p-2 rounded-xl hover:bg-custom-yellow hover:text-gray-900"
                    onClick={handleAdd}
                >
                    <p>Add</p>
                    <RiUserAddFill className="text-xl md:text-3xl m-1" />
                </button>
            </div>
            {getFilteredUsers().length === 1 ? (
                <p className="text-center text-gray-500">No hay residentes.</p>
            ) : (
                <div className="w-auto grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {getFilteredUsers().slice(1).map((user, index) => (
                        <PeopleCard
                            key={index}
                            username={user.username}
                            DUI={user.dui || 'N/A'}
                            Email={user.email}
                            image={user.image || houseImage}
                            onDelete={() => handleDelete(user.email)}
                        />
                    ))}
                </div>
            )}
            <Dialog open={showDialog} handler={handleCancel}>
                <DialogHeader>¿Desea agregar al residente?</DialogHeader>
                <DialogBody>
                    {selectedUser && (
                        <PeopleCard
                            username={selectedUser.name}
                            DUI={selectedUser.dui  || 'N/A'}
                            Email={selectedUser.email}
                            image={houseImage}
                            onDelete={null} // No delete in dialog
                        />
                    )}
                </DialogBody>
                <DialogFooter>
                    <Button className="mr-2" color="red" onClick={handleCancel}>Cancel</Button>
                    <Button color="green" onClick={handleConfirm}>Confirm</Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default ResidentListHouse;


