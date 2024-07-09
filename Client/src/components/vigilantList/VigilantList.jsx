import React, { useState, useEffect, useContext } from 'react';
import PeopleCard from '../peopleCard/PeopleCard';
import houseImage from '../../assets/images/Userdefault.png';
import { RiUserAddFill, RiSearchEyeLine } from "react-icons/ri";
import { Input, Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
import { useUserContext } from "../../context/userContext";
import { userService } from '../../services/user.service';
import { roleService } from '../../services/role.service';

const VigilantList = () => {
    const [vigilants, setVigilants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { token } = useUserContext();
    const [showDialog, setShowDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const fetchVigilants = async () => {
            if (token) {
                console.log(token);
                const response = await userService.getAllVigilants({ token });
                if (response.ok) {
                    setVigilants(response.data);
                } else {
                    console.log(response.message);
                }
            }
        };

        fetchVigilants();
    }, [token]);

    const handleDelete = async (userEmail) => {
        const data = { userEmail, roleCode: "VIGI", token };
        const response = await roleService.removeRole(data);
        if (response.ok) {
            setVigilants(vigilants.filter(vigilant => vigilant.email !== userEmail));
        } else {
            console.log(response.message);
        }
    };

    const getFilteredVigilants = () => {
        if (!searchTerm) return vigilants;
        return vigilants.filter(vigilant => vigilant.email.includes(searchTerm));
    };

    const handleAdd = async () => {
        // Logic to find user by email and display dialog
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
            const data = { userEmail: selectedUser.email, roleCode: "VIGI", token };
            const response = await roleService.assignRole(data);
            if (response.ok) {
                setVigilants([...vigilants, selectedUser]);
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
                <h1 className="text-2xl font-bold text-center text-custom-yellow">Vigilantes</h1>
                <div className="flex items-center justify-center text-custom-yellow p-1 md:p-2 m-1">
                    <RiUserAddFill className="text-2xl md:text-3xl" />
                </div>
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
            <div className="w-auto grid grid-cols-1 lg:grid-cols-2 gap-3">
                {getFilteredVigilants().map((vigilant, index) => (
                    <PeopleCard key={index}
                        username={vigilant.name}
                        DUI={vigilant.dui || "XXXXXXXX-X"}
                        Email={vigilant.email}
                        image={houseImage}
                        onDelete={() => handleDelete(vigilant.email)}
                    />
                ))}
            </div>
            <Dialog open={showDialog} handler={handleCancel}>
                <DialogHeader>¿Desea agregar al Vigilante?</DialogHeader>
                <DialogBody>
                    {selectedUser && (
                        <PeopleCard
                            username={selectedUser.name}
                            DUI={selectedUser.dui  || "XXXXXXXX-X"}
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

export default VigilantList;