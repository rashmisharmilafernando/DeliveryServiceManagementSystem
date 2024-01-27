import Dropdown from '../components/Dropdown/Dropdown';
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "../layout/header";
import Footer from "../layout/footer";
import Swal from 'sweetalert2';
import axios from 'axios';;

interface Data {
    id: number,
    senderName: string,
    senderEmail: string,
    receiverName: string,
    receiverEmail: string,
    receiverPhoneNumber: string,
    receiverAddress: string,
    receiverNIC: string,
    productValue: string,
    codfee: string,
    activeStatus:string
}
const ManageOrder = (): JSX.Element => {
    const navigate = useNavigate();
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        getOrderDetails();
    }, []);

    const getOrderDetails = () => {
       
        const headers = {
            'Content-Type': 'application/json',
        }
        axios.get("http://localhost:8097/order/orderList", { headers: headers })
            .then(r => {
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

    const handleDeleteButton = (r: Data) => {
        console.log("hry")
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
                let id = r.id;

                const headers = {
                    'Content-Type': 'application/json',
                }

                axios.delete(`http://localhost:8097/order/${id}`, { headers: headers })
                    .then(r => {
                        Swal.fire({
                            icon: "success",
                            title: "Success!",
                            text: "Order deleted successfully!"
                        });
                        getOrderDetails();
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
                <h1 className="m-1 text-xl font-bold text-gray-600">Order</h1>

                {/* Add New order Button - if you want to add new one click this button */}
                <button className='bg-[#17A247] text-white px-10 py-2 hover:bg-[#148F3F]  rounded-lg m-2 absolute right-5 '>
                    <Link to={'/addOrder'}> Add New Order</Link>
                </button>

            </div>

            {/* view table */}
            <div className='mx-[85px] h-300 m-auto bg-white'>
                <table className="w-[100px] bg-white shadow-md rounded-xl">
                    {/* table header */}
                    <thead>
                        <tr className='text-gray-700'>
                            <th className="py-1 px-1 text-center">S: Name</th>
                            <th className="py-1 px-1 text-center">S: Email</th>
                            <th className="py-1 px-1 text-center">R: Name</th>
                            <th className="py-1 px-1 text-center">R: Email</th>
                            <th className="py-1 px-1 text-center">R: Number</th>
                            <th className="py-1 px-1 text-center">R: Address</th>
                            <th className="py-1 px-1 text-center">Product Value</th>
                            <th className="py-1 px-1 text-center">COD Fee</th>
                            <th className="py-1 px-1 text-center ">Status</th>
                            <th className="py-1 px-1 text-center">Action</th>

                        </tr>
                    </thead>
                    {/* table body */}
                    <tbody className='text-blue-gray-900'>
                        {
                            data.map((r: Data, index: number) => {
                                return <tr className='border-b'>
                                    <td className="py-3 px-4 text-center">{r.senderName}</td>
                                    <td className="py-3 px-4 text-center">{r.senderEmail}</td>
                                    <td className="py-3 px-4 text-center">{r.receiverName}</td>
                                    <td className="py-3 px-4 text-center">{r.receiverEmail}</td>
                                    <td className="py-3 px-4 text-center">{r.receiverPhoneNumber}</td>
                                    <td className="py-3 px-4 text-center">{r.receiverAddress}</td>
                                    <td className="py-3 px-4 text-center">{r.productValue}</td>
                                    <td className="py-3 px-4 text-center">{r.codfee}</td>
                                    <td className={`py-3 px-4 text-center ${(r.activeStatus === 'Schedule' || r.activeStatus=='Delivered'|| r.activeStatus=='Ongoing' ) ? 'active-status' : 'non-active-status'}`}>
                                        {r.activeStatus}
                                    </td>
                                    <td className="py-3 px-4 text-center">
                                        <button className="font-medium text-[#68B984] hover:text-[#3B995B] m-4" onClick={()=>navigate('/addOrder',{state:{order:r}})}>Edit</button>

                                    </td>
                                </tr>
                            })
                        }


                    </tbody>

                </table>

            </div>
            <Footer />
        </div>
    )
}

export default ManageOrder