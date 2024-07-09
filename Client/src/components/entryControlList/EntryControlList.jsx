import React, { useState } from 'react';
import defectImage from '../../assets/images/Userdefault.png';
import {
    Card,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Avatar,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Correlativo", "Nombre/Apellido", "DUI", "N° De Casa", "Fecha", "Hora"];

const TABLE_ROWS = [
    {
        id: 1,
        img: defectImage,
        name: "John Michael",
        email: "john@creative-tim.com",
        dui: "12345678-9",
        houseNumber: "10",
        date: "23/04/18",
        time: "10:00 AM",
    },
    {
        id: 2,
        img: defectImage,
        name: "Alexa Liras",
        email: "alexa@creative-tim.com",
        dui: "98765432-1",
        houseNumber: "20",
        date: "23/04/18",
        time: "11:00 AM",
    },
    {
        id: 3,
        img: defectImage,
        name: "David Smith",
        email: "david@creative-tim.com",
        dui: "23456789-0",
        houseNumber: "30",
        date: "24/04/18",
        time: "09:00 AM",
    },
    {
        id: 4,
        img: defectImage,
        name: "Emily Clark",
        email: "emily@creative-tim.com",
        dui: "34567890-1",
        houseNumber: "40",
        date: "24/04/18",
        time: "11:30 AM",
    },
    {
        id: 5,
        img: defectImage,
        name: "Michael Doe",
        email: "michael@creative-tim.com",
        dui: "45678901-2",
        houseNumber: "50",
        date: "25/04/18",
        time: "12:00 PM",
    },
    {
        id: 6,
        img: defectImage,
        name: "Sophia White",
        email: "sophia@creative-tim.com",
        dui: "56789012-3",
        houseNumber: "60",
        date: "25/04/18",
        time: "01:00 PM",
    },
    {
        id: 7,
        img: defectImage,
        name: "Chris Johnson",
        email: "chris@creative-tim.com",
        dui: "67890123-4",
        houseNumber: "70",
        date: "26/04/18",
        time: "02:00 PM",
    },
    {
        id: 8,
        img: defectImage,
        name: "Lisa Brown",
        email: "lisa@creative-tim.com",
        dui: "78901234-5",
        houseNumber: "80",
        date: "26/04/18",
        time: "03:00 PM",
    },
    {
        id: 9,
        img: defectImage,
        name: "Tom Harris",
        email: "tom@creative-tim.com",
        dui: "89012345-6",
        houseNumber: "90",
        date: "27/04/18",
        time: "04:00 PM",
    },
    {
        id: 10,
        img: defectImage,
        name: "Anna Davis",
        email: "anna@creative-tim.com",
        dui: "90123456-7",
        houseNumber: "100",
        date: "27/04/18",
        time: "05:00 PM",
    },
    {
        id: 5,
        img: defectImage,
        name: "Michael Doe",
        email: "michael@creative-tim.com",
        dui: "45678901-2",
        houseNumber: "50",
        date: "25/04/18",
        time: "12:00 PM",
    },
    {
        id: 6,
        img: defectImage,
        name: "Sophia White",
        email: "sophia@creative-tim.com",
        dui: "56789012-3",
        houseNumber: "60",
        date: "25/04/18",
        time: "01:00 PM",
    },
    {
        id: 7,
        img: defectImage,
        name: "Chris Johnson",
        email: "chris@creative-tim.com",
        dui: "67890123-4",
        houseNumber: "70",
        date: "26/04/18",
        time: "02:00 PM",
    },
    {
        id: 8,
        img: defectImage,
        name: "Lisa Brown",
        email: "lisa@creative-tim.com",
        dui: "78901234-5",
        houseNumber: "80",
        date: "26/04/18",
        time: "03:00 PM",
    },
    {
        id: 9,
        img: defectImage,
        name: "Tom Harris",
        email: "tom@creative-tim.com",
        dui: "89012345-6",
        houseNumber: "90",
        date: "27/04/18",
        time: "04:00 PM",
    },
    {
        id: 10,
        img: defectImage,
        name: "Anna Davis",
        email: "anna@creative-tim.com",
        dui: "90123456-7",
        houseNumber: "100",
        date: "27/04/18",
        time: "05:00 PM",
    },
];

const EntryControlList = () => {
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setCurrentPage(1); // Reset to first page on rows per page change
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        const totalPages = Math.ceil(TABLE_ROWS.length / rowsPerPage);
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentRows = TABLE_ROWS.slice(startIndex, endIndex);

    return (
        <div className="w-11/12 md:w-10/12 h-full overflow-y-auto space-y-4 p-5 my-2 md:my-2 bg-custom-gray border-y-4 border-custom-yellow rounded-lg">
        <div className="flex flex-col items-center justify-center w-full mx-auto gap-2">
        <h1 className="text-2xl font-bold text-center text-custom-yellow">Control de entrada</h1>
        <Card className="w-full">
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.map(
                            ({ id, img, name, email, dui, houseNumber, date, time }) => (
                                <tr key={id} className="even:bg-blue-gray-50/50">
                                    <td className="p-4">{id}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <Avatar src={img} alt={name} size="sm" />
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {name}
                                                </Typography>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal opacity-70"
                                                >
                                                    {email}
                                                </Typography>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">{dui}</td>
                                    <td className="p-4">{houseNumber}</td>
                                    <td className="p-4">{date}</td>
                                    <td className="p-4">{time}</td>
                                </tr>
                            ),
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className='flex flex-row justify-between'>
                <div className="flex items-center gap-2">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        Filas por página:
                    </Typography>
                    <select
                        className="border border-blue-gray-300 rounded-md px-2"
                        value={rowsPerPage}
                        onChange={handleRowsPerPageChange}
                    >
                        <option value="5" >5</option>
                        <option value="10" >10</option>
                        <option value="15" >15</option>
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outlined"
                        size="sm"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        Anterior
                    </Button>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        Página {currentPage}
                    </Typography>
                    <Button
                        variant="outlined"
                        size="sm"
                        onClick={handleNextPage}
                        disabled={endIndex >= TABLE_ROWS.length}
                    >
                        Siguiente
                    </Button>
                </div>
            </CardFooter>
        </Card>
        </div>
        </div>
    );
}

export default EntryControlList;
