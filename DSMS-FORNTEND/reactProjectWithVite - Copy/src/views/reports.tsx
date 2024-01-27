import Header from "../layout/header";
import Footer from "../layout/footer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from "axios";
import * as DateHanlder from '../util/dateHander';
import jsPDF from 'jspdf';
import saveAs from "file-saver";
interface Data {
    orderNo: number,
    Date: string,
    senderName: string,
    senderEmail: string,
    receiverName: string,
    receiverPhoneNumber: string,
    receiverAddress: string,
    productValue: string,
    codfee: string,
}

const Reports = (): JSX.Element => {

    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        getReportDetails();
    }, []);

    const getReportDetails = () => {
        const headers = {
            'Content-Type': 'application/json',
        }
        axios.get("http://localhost:8097/order/orderList", { headers: headers })
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

    const handleDownload = (orderNo: number, date: string, senderName: string, senderEmail: string, receiverName: string, receiverPhoneNumber: string, receiverAddress: string, productValue: string, codfee: string,) => {
        const pdf = new jsPDF();
        const img = new Image()
        img.src = 'src/assets/logo.png'
        pdf.addImage(img, 'png', 80, 5, 30, 10);
        pdf.setFontSize(20);
        pdf.text(`Order Bill`, pdf.internal.pageSize.getWidth() / 2, 30, { align: "center" });

        pdf.setFontSize(15);
        pdf.text(`Form`, 20, 40,);
        pdf.setFontSize(15);

        pdf.text(`Order ID:   ${orderNo}`, 20, 55);
        pdf.text(`Date:     ${DateHanlder.formateDate(date)}`, 20, 60);
        pdf.text(`Name:    ${senderName}`, 20, 65);
        pdf.text(`Eamil:    ${senderEmail}`, 20, 70);

        pdf.text(`Recipient Details`, 20, 85,);
        pdf.setFontSize(15);


        pdf.text(`Name:    ${receiverName}`, 20, 100);
        pdf.text(`Address:    ${receiverAddress}`, 20, 105);
        pdf.text(`Phone Number:    ${receiverPhoneNumber}`, 20, 110);
        pdf.text(`Product Value:   ${productValue}`, 20, 115);
        pdf.text(`COD fee:   ${codfee}`, 20, 120);

        pdf.text("Thank you...!", pdf.internal.pageSize.getWidth() / 2, 150, { align: "center" });
        pdf.setFontSize(10);
        pdf.save(`Order_${orderNo}_Report.pdf`);


    }
    

    return (
        <div>
            <Header />
            <div className='flex justify-between items-center p-5'>
                {/* Page Title */}
                <h1 className="m-1 text-xl font-bold text-gray-600">Reports</h1>
            </div>

            {/* view table */}
            <div className='mx-[85px] h-300 m-auto bg-white'>
                <table className="min-w-full bg-white shadow-md rounded-xl">
                    {/* table header */}
                    <thead>
                        <tr className='text-gray-700'>
                            <th className="py-3 px-4 text-center">OrderId</th>
                            <th className="py-3 px-4 text-center">Date</th>
                            <th className="py-3 px-4 text-center">S: Name</th>
                            <th className="py-1 px-1 text-center">S: Email</th>

                            <th className="py-1 px-1 text-center">R: Name</th>
                            <th className="py-1 px-1 text-center">R: Number</th>
                            <th className="py-1 px-1 text-center">R: Address</th>


                            <th className="py-1 px-1 text-center">Product Value</th>
                            <th className="py-1 px-1 text-center">COD Fee</th>
                            <th className="py-3 px-4 text-center">Action</th>
                        </tr>
                    </thead>
                    {/* table body */}
                    <tbody className='text-blue-gray-900'>
                        {
                            data.map((r: Data, index: number) => {


                                return <tr className="border-b" key={index}>
                                    <td className="py-3 px-4 text-center">{r.orderNo}</td>
                                    <td className="py-3 px-4 text-center">{DateHanlder.formateDate(r.Date)}</td>
                                    <td className="py-3 px-4 text-center">{r.senderName}</td>
                                    <td className="py-3 px-4 text-center">{r.senderEmail}</td>
                                    <td className="py-3 px-4 text-center">{r.receiverName}</td>
                                    <td className="py-3 px-4 text-center">{r.receiverPhoneNumber}</td>
                                    <td className="py-3 px-4 text-center">{r.receiverAddress}</td>
                                    <td className="py-3 px-4 text-center">{r.productValue}</td>
                                    <td className="py-3 px-4 text-center">{r.codfee}</td>
                                    <td className="py-3 px-4 text-center">
                                        <button
                                            className="font-medium text-[#68B984] hover:text-[#3B995B] m-4"
                                            onClick={() => handleDownload(r.orderNo, r.Date, r.senderName, r.senderEmail, r.receiverName, r.receiverPhoneNumber, r.receiverAddress, r.productValue, r.codfee)}
                                        >
                                            Download
                                        </button>
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

export default Reports;
