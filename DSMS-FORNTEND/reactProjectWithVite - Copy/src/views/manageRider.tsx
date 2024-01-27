import Dropdown from '../components/Dropdown/Dropdown';
import React, { useState, useEffect } from 'react';
import Header from "../layout/header";
import Footer from "../layout/footer";
import { Link, useNavigate } from "react-router-dom";
import Swal, { SweetAlertResult, SweetAlertOptions } from 'sweetalert2';
import Cookies from "js-cookie";
import axios from "axios";

interface Data {
    id: number,
    riderName: string,
    riderNIC: string,
    riderAddress: string,
    riderPhoneNumber: string,
    riderEmail: string,
    status: string
}

const ManageRider = (): JSX.Element => {

    const navigate = useNavigate();

    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        getRiderDetails();
    }, []);

    const getRiderDetails = () => {
        const headers = {
            'Content-Type': 'application/json',
        }
        axios.get("http://localhost:8097/rider/riderList", { headers: headers })
            .then(r => {
                console.log(r.data.data);
                setData(r.data.data);
            })
            .catch(e => {
                Swal.fire({
                    icon: "error",
                    title: "Sorry!",
                    text: "Something went wrong"
                });
            })
    }

    const handleDeleteButton = (r: any) => {
        Swal.fire({
            icon: "question",
            title: "Are you sure to delete this ?",
            showCancelButton: true,
            confirmButtonText: "Yes",
            customClass: {
                confirmButton: 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2',
            },
        }).then((result) => {
            if (result.isConfirmed) {
                let id = r._id;
                const headers = {
                    'Content-Type': 'application/json',
                }

                axios.delete(`http://localhost:8097/rider/${id}`, { headers: headers })
                    .then(r => {
                        Swal.fire({
                            icon: "success",
                            title: "Success!",
                            text: "Rider deleted successfully!"
                        });
                        getRiderDetails();
                    })
                    .catch(e => {
                        Swal.fire({
                            icon: "error",
                            title: "Sorry!",
                            text: "Something went wrong"
                        });
                    })
            }
        });
    }
    return (

        <div>
            <Header />
            <div className='flex justify-between items-center  p-5'>
                {/* Page Title */}
                <h1 className="m-1 text-xl font-bold text-gray-600">Rider</h1>

                {/* Add New rider Button - if you want to add new one click this button */}
                <button className='bg-[#17A247] text-white px-10 py-2 hover:bg-[#148F3F]  rounded-lg m-2 absolute right-5 '>
                    <Link to={'/addRider'}> Add New Rider</Link>
                </button>
            </div>

            {/* view table */}
            <div className='mx-[85px] h-300 m-auto bg-white'>
                <table className="min-w-full bg-white shadow-md rounded-xl">
                    {/* table header */}
                    <thead>
                        <tr className='text-gray-700'>
                            <th className="py-3 px-4 text-center">Name</th>
                            <th className="py-3 px-4 text-center">Address</th>
                            <th className="py-3 px-4 text-center">Email</th>
                            <th className="py-3 px-4 text-center">NIC</th>
                            <th className="py-3 px-4 text-center ">Phone Number</th>
                            <th className="py-3 px-4 text-center">Action</th>

                        </tr>
                    </thead>
                    {/* table body */}
                    <tbody className='text-blue-gray-900'>
                        {
                            data.map((r: Data, index: number) => {
                                return <tr className="border-b">
                      
                                    <td className="py-3 px-4 text-center">{r.riderName}</td>
                                    <td className="py-3 px-4 text-center">{r.riderAddress}</td>
                                    <td className="py-3 px-4 text-center">{r.riderEmail}</td>
                                    <td className="py-3 px-4 text-center">{r.riderNIC}</td>
                                    <td className="py-3 px-4 text-center">{r.riderPhoneNumber}</td>

                                    
                                    <td className="py-3 px-4 text-center">
                                        <button className="font-medium text-[#68B984] hover:text-[#3B995B] m-4"  onClick={() => navigate('/addRider', { state: { rider: r } })}>Edit</button>

                                        <button onClick={() => handleDeleteButton(r)} className="font-medium text-red-600 hover:text-red-700"> Delete</button>
                                    </td>
                                </tr>
                            })}


                    </tbody>

                </table>

            </div>
            <Footer />
        </div>
    )
}

export default ManageRider