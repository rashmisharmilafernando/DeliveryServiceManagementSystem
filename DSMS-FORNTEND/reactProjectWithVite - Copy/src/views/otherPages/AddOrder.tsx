import Header from "../../layout/header.tsx";
import Footer from "../../layout/footer.tsx";
import FormDropdown from "../../components/Dropdown/formDropdown.tsx";
import FormInput from "../../components/input/formInput.tsx";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Cookies from "js-cookie";
import axios from "axios";
import Dropdown from "../../components/Dropdown/Dropdown.tsx";

function AddOrder(): JSX.Element {

    const navigate = useNavigate();
    const location = useLocation();

    let order = location?.state?.order;

    const [senderName, setsenderName] = useState<string>(order ? order.senderName : "");
    const [senderNIC, setsenderNIC] = useState<string>(order ? order.senderNIC : "");
    const [senderAddress, setsenderAddress] = useState<string>(order ? order.senderAddress : "");
    const [senderPhoneNumber, setsenderPhoneNumber] = useState<string>(order ? order.senderPhoneNumber : "");
    const [senderEmail, setsenderEmail] = useState<string>(order ? order.senderEmail : "");
    const [senderDistrict, setsenderDistrict] = useState<string>(order ? order.senderDistrict : "");
    const [senderCity, setsenderCity] = useState<string>(order ? order.senderCity : "");

    const [receiverName, setreceiverName] = useState<string>(order ? order.receiverName : "");
    const [receiverNIC, setreceiverNic] = useState<string>(order ? order.receiverNIC : "");
    const [receiverAddress, setreceiverAddress] = useState<string>(order ? order.receiverAddress : "");
    const [receiverEmail, setreceiverEmail] = useState<string>(order ? order.receiverEmail : "");
    const [receiverPhoneNumber, setreceiverPhoneNumber] = useState<string>(order ? order.receiverPhoneNumber : "");
    const [receiverDistrict, setreceiverDistrict] = useState<string>(order ? order.receiverDistrict : "");
    const [receiverCity, setreceiverCity] = useState<string>(order ? order.receiverCity : "");

    const [orderNo, setorderno] = useState<string>(order ? order.orderNo : "");
    const [orderWillbillNo, setWaybll] = useState<string>(order ? order.orderWillbillNo : "");
    const [orderDescription, setorderDes] = useState<string>(order ? order.orderDescription : "");
    const [productValue, setproductValue] = useState<string>(order ? order.productValue : "");
    const [codfee, setcodfee] = useState<string>(order ? order.codfee : "");

    const [senderAccountHolderName, setsenderAccountHolderName] = useState<string>(order ? order.senderAccountHolderName : "");
    const [senderAccountNumber, setsenderAccountNumber] = useState<string>(order ? order.senderAccountNumber : "");
    const [senderBranchName, setsenderBranchName] = useState<string>(order ? order.senderBranchName : "");
    const [senderBankName, setsenderBankName] = useState<string>(order ? order.senderBankName : "");
    const [activeStatus, setSelectedsetActiveStatus] = useState<string>(order ? order.activeStatus : "");


    const handlereceiverName = (e: any, type: string) => {
        setreceiverName(e.target.value);
    }
    const handlereceiverNic = (e: any, type: string) => {
        setreceiverNic(e.target.value);
    }
    const handlereceiverEmail = (e: any, type: string) => {
        setreceiverEmail(e.target.value);
    }
    const handlereceiverAddress = (e: any, type: string) => {
        setreceiverAddress(e.target.value);
    }
    const handlereceiverPhoneNumber = (e: any, type: string) => {
        setreceiverPhoneNumber(e.target.value);
    }
    const handlereceiverDistrict = (selectedOption: string): void => {
        setreceiverDistrict(selectedOption);
    }

    const handlereceiverCity = (selectedOption: string): void => {
        setreceiverCity(selectedOption);
    }


    const handlesenderName = (e: any, type: string) => {
        setsenderName(e.target.value);
    }
    const handlesenderNic = (e: any, type: string) => {
        setsenderNIC(e.target.value);
    }
    const handlesenderEmail = (e: any, type: string) => {
        setsenderEmail(e.target.value);
    }
    const handlesenderAddress = (e: any, type: string) => {
        setsenderAddress(e.target.value);
    }
    const handlesenderPhoneNumber = (e: any, type: string) => {
        setsenderPhoneNumber(e.target.value);
    }
    const handlesenderDistrict = (selectedOption: string): void => {
        setsenderDistrict(selectedOption);
    }

    const handlesenderCity = (selectedOption: string): void => {
        setsenderCity(selectedOption);
    }

    const handleorderno = (e: any, type: string) => {
        setorderno(e.target.value);
    }
    const handleWaybll = (e: any, type: string) => {
        setWaybll(e.target.value);
    }
    const handleorderDes = (e: any, type: string) => {
        setorderDes(e.target.value);
    }
    const handlecodfee = (e: any, type: string) => {
        setcodfee(e.target.value);
    }
    const handleproductVlaue = (e: any, type: string) => {
        setproductValue(e.target.value);
    }
    const handlesenderAccountHolderName = (e: any, type: string) => {
        setsenderAccountHolderName(e.target.value);
    }
    const handlesenderAccountNumber = (e: any, type: string) => {
        setsenderAccountNumber(e.target.value);
    }
    const handlesenderBranchName = (e: any, type: string) => {
        setsenderBranchName(e.target.value);
    }
    const handlesenderBankName = (selectedOption: string): void => {
        setsenderBankName(selectedOption);
    }


    const submitDetails = () => {

        const headers = {
            'Content-Type': 'application/json',
        }

        let body = order ? {
            id: order._id,
            senderName: senderName,
            senderNIC: senderNIC,
            senderAddress: senderAddress,
            senderPhoneNumber: senderPhoneNumber,
            senderEmail: senderEmail,
            senderDistrict: senderDistrict,
            senderCity: senderCity,

            receiverName: receiverName,
            receiverNIC: receiverNIC,
            receiverAddress: receiverAddress,
            receiverPhoneNumber: receiverPhoneNumber,
            receiverEmail: receiverEmail,
            receiverDistrict: receiverDistrict,
            receiverCity: receiverCity,

            orderNo: orderNo,
            orderWillbillNo: orderWillbillNo,
            orderDescription: orderDescription,
            productValue: productValue,
            codfee: codfee,

            senderAccountHolderName: senderAccountHolderName,
            senderAccountNumber: senderAccountNumber,
            senderBranchName: senderBranchName,
            senderBankName: senderBankName,
            activeStatus: activeStatus
        } : {
            senderName: senderName,
            senderNIC: senderNIC,
            senderAddress: senderAddress,
            senderPhoneNumber: senderPhoneNumber,
            senderEmail: senderEmail,
            senderDistrict: senderDistrict,
            senderCity: senderCity,

            receiverName: receiverName,
            receiverNIC: receiverNIC,
            receiverAddress: receiverAddress,
            receiverPhoneNumber: receiverPhoneNumber,
            receiverEmail: receiverEmail,
            receiverDistrict: receiverDistrict,
            receiverCity: receiverCity,

            orderNo: orderNo,
            orderWillbillNo: orderWillbillNo,
            orderDescription: orderDescription,
            productValue: productValue,
            codfee: codfee,

            senderAccountHolderName: senderAccountHolderName,
            senderAccountNumber: senderAccountNumber,
            senderBranchName: senderBranchName,
            senderBankName: senderBankName,
            activeStatus: activeStatus
        }
        if (order) {
            axios.put("http://localhost:8097/order/editOrder", body, { headers: headers })
                .then(r => {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Order Details updaed successfully!"
                    });
                    navigate('/order');
                })
                .catch(e => {
                    Swal.fire({
                        icon: "error",
                        title: "Sorry!",
                        text: "Something went wrong"
                    });
                })
        } else {
            axios.post("http://localhost:8097/order/addOrder", body, { headers: headers })
                .then(r => {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Order Details saved successfully!"
                    });
                    navigate('/order');
                })
                .catch(e => {
                    Swal.fire({
                        icon: "error",
                        title: "Sorry!",
                        text: "Something went wrong"
                    });
                })
        }
    }

    const handleActiveStatus = (selectedOption: string): void => {
        setSelectedsetActiveStatus(selectedOption);

        const emailData = {
            to: senderEmail,
            text: '',
            subject: '',

        };

        switch (selectedOption) {
            case 'Schedule':
                emailData.subject = 'Schedule';
                emailData.text = `Dear ${senderName},\n\nYour order has been scheduled for delivery...\n\n    Order Details\n      Order No :- ${orderNo}\n      Order Description :- ${orderDescription}\n\nWe will inform you of any changes in your order scheduling and welcome any questions or concerns. Contact our customer support team at expressgo@gmail.com / 0114782561.\nThank you for choosing us.\n\n\nBest regards,\n\nExpressGo\n0114782561`;
                break;
            case 'Ongoing':
                emailData.subject = 'Ongoing';
                emailData.text = `Dear ${senderName},\n\nYour order is officially on its way...!\n\n    Order Details\n      Order No :- ${orderNo}\n      Order Description :- ${orderDescription}\n\nIf you have any burning questions or just want to share the hype, hit us up at expressgo@gmail.com / 0114782561.\nThank you for choosing us.\n\n\nBest regards,\n\nExpressGo\n0114782561`;
                break;
            case 'Reschedule':
                emailData.subject = 'Reschedule';
                emailData.text = `Dear ${senderName},\n\nYour order has been rescheduled because we couldn't catch receiver on the phone. Tomorrow it scheduled again\n\n    Order Details\n      Order No :- ${orderNo}\n      Order Description :- ${orderDescription}\n\nWe will inform you of any changes in your order scheduling and welcome any questions or concerns. Contact our customer support team at expressgo@gmail.com / 0114782561.\nThank you for choosing us.\n\n\nBest regards,\n\nExpressGo\n0114782561`;
                break;
            case 'Delivered':
                emailData.subject = 'Delivered';
                emailData.text = `Dear ${senderName},\n\nYour order has been successfully delivered to the lucky recipient...!\n\n    Order Details\n      Order No :- ${orderNo}\n      Order Description :- ${orderDescription}\n\nFor any post-delivery high-fives or if you need assistance with anything else, hit us up a expressgo@gmail.com / 0114782561.\nThank you for choosing us.\n\n\nBest regards,\n\nExpressGo\n0114782561`;
                break;
            default:
                break;
        }

        axios.post('http://localhost:8097/order/send-email', emailData)
        .then((response) => {
            console.log('Email sent successfully', response.data);
            console.log(emailData.subject);
        })
        .catch((error) => {
            console.error('Failed to send email', error);
        });
    }
    return (
        <div>
            <Header />
            <div className='flex justify-between items-center  p-5'>
                {/* Page Title */}
                <h1 className="m-1 text-xl font-bold text-gray-600">{order ? "Update Details" : "New Order"}</h1>
            </div>
            <section className={'grid grid-rows-1 grid-flow-col gap-1'}>


                <div className="col w-full m-3 ">

                    <section className={'grid grid-rows-1 grid-flow-col gap-2'}>

                        <div className="flex">
                            <div className="col w-full m-3 ">
                                <div className="w-100 bg-[#FFB534] m-auto py-5 px-5 ">
                                    <h1><b>Sender Details</b></h1>
                                </div>
                                <form>
                                    <div className="block w-100 p-6 border border-gray-200 ">
                                        <FormInput
                                            type={'text'}
                                            name="name"
                                            label="Name"
                                            placeholder="Name"
                                            optional={false}
                                            callBack={handlesenderName}
                                            value={senderName}

                                        />
                                        <FormInput
                                            type={'text'}
                                            name="nic"
                                            label="NIC"
                                            placeholder="NIC"
                                            optional={false}
                                            callBack={handlesenderNic}
                                            value={senderNIC}

                                        />
                                        <FormInput
                                            type={'email'}
                                            name="email"
                                            label="Email"
                                            placeholder="Email"
                                            optional={false}
                                            callBack={handlesenderEmail}
                                            value={senderEmail}

                                        />
                                        <FormInput
                                            type={'text'}
                                            name="address"
                                            label="Address  "
                                            placeholder="Address  "
                                            optional={false}
                                            callBack={handlesenderAddress}
                                            value={senderAddress}

                                        />
                                        <FormInput
                                            type={'text'}
                                            name="phoneNumber"
                                            label="Phone Number"
                                            placeholder="Phone Number"
                                            optional={false}
                                            callBack={handlesenderPhoneNumber}
                                            value={senderPhoneNumber}

                                        />
                                        <FormDropdown
                                            options={['Colombo', 'Gampaha', 'Kalutara', ' Kandy', ' Matale',
                                                ' Nuwara Eliya', 'Galle', 'Matara', ' Hambantota', 'Jaffna',
                                                'Kilinochchi', 'Mannar', 'Vavuniya', 'Mullaitivu', 'Batticaloa',
                                                'Ampara', 'Trincomalee', 'Kurunegala', 'Puttalam', 'Anuradhapura',
                                                'Polonnaruwa', 'Badulla', 'Monaragala', 'Ratnapura', 'Kegalle']}
                                            label={"District"}
                                            onSelect={handlesenderDistrict}
                                            value={senderDistrict}
                                        />

                                        <FormDropdown
                                            options={['Colombo ', 'Dehiwala', 'Sri Jayawardenepura Kotte', ' Negombo', ' Gampaha',
                                                ' Kalutara', 'Kandy', 'Matale', ' Nuwara Eliya', 'Galle',
                                                'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
                                                'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee',
                                                'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Monaragala', 'Ratnapura', 'Kegalle']}

                                            label={"City"}
                                            onSelect={handlesenderCity}
                                            value={senderCity}
                                        />


                                    </div>
                                </form>
                                <br></br>

                                <div className="w-100 bg-[#FFB534] m-auto py-5 px-5 ">
                                    <h1><b>Sender Bank Details</b></h1>

                                </div>

                                <form>
                                    <div className="block w-100 p-6 border border-gray-200 ">
                                        <FormInput
                                            type={'accountHolderName'}
                                            name="accountHolderName"
                                            label="Account Holder Name"
                                            placeholder="Account Holder Name"
                                            optional={false}
                                            callBack={handlesenderAccountHolderName}
                                            value={senderAccountHolderName}
                                        />
                                        <FormInput
                                            type={'accountNumber'}
                                            name="accountNumber"
                                            label="Account Number"
                                            placeholder="Account Number"
                                            optional={false}
                                            callBack={handlesenderAccountNumber}
                                            value={senderAccountNumber}

                                        />
                                        <FormInput
                                            type={'branchName'}
                                            name="branchName"
                                            label="Branch Name"
                                            placeholder="Branch Name"
                                            optional={false}
                                            callBack={handlesenderBranchName}
                                            value={senderBranchName}

                                        />

                                        <FormDropdown
                                            options={['Bank of Ceylon', 'Commercial Bank', 'DFCC Bank', 'Hatton National Bank', 'Peoples Bank']}
                                            onSelect={handlesenderBankName}
                                            label={"Bank Name"}
                                            value={senderBankName}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="col w-full m-3 ">
                                <div className="w-100 bg-[#FFB534] m-auto py-5 px-5 ">
                                    <h1><b>Receiver Details</b></h1>
                                </div>
                                <form>
                                    <div className="block w-100 p-6 border border-gray-200 ">
                                        <FormInput
                                            type={'text'}
                                            name="name"
                                            label=" Name"
                                            placeholder=" Name"
                                            optional={false}
                                            callBack={handlereceiverName}
                                            value={receiverName}


                                        />
                                        <FormInput
                                            type={'text'}
                                            name="nic"
                                            label="NIC"
                                            placeholder="NIC"
                                            optional={false}
                                            callBack={handlereceiverNic}
                                            value={receiverNIC}

                                        />
                                        <FormInput
                                            type={'email'}
                                            name="email"
                                            label="Email"
                                            placeholder="Email"
                                            optional={false}
                                            callBack={handlereceiverEmail}
                                            value={receiverEmail}

                                        />
                                        <FormInput
                                            type={'text'}
                                            name="address"
                                            label="Address"
                                            placeholder="Address"
                                            optional={false}
                                            callBack={handlereceiverAddress}
                                            value={receiverAddress}

                                        />
                                        <FormInput
                                            type={'text'}
                                            name="phoneNumber"
                                            label="Phone Number"
                                            placeholder="Phone Number"
                                            optional={false}
                                            callBack={handlereceiverPhoneNumber}
                                            value={receiverPhoneNumber}

                                        />
                                        <FormDropdown
                                            options={['Colombo', 'Gampaha', 'Kalutara', ' Kandy', ' Matale',
                                                ' Nuwara Eliya', 'Galle', 'Matara', ' Hambantota', 'Jaffna',
                                                'Kilinochchi', 'Mannar', 'Vavuniya', 'Mullaitivu', 'Batticaloa',
                                                'Ampara', 'Trincomalee', 'Kurunegala', 'Puttalam', 'Anuradhapura',
                                                'Polonnaruwa', 'Badulla', 'Monaragala', 'Ratnapura', 'Kegalle']}
                                            onSelect={handlereceiverDistrict}
                                            label={"District"}
                                            value={receiverDistrict}
                                        />

                                        <FormDropdown
                                            options={['Colombo ', 'Dehiwala', 'Sri Jayawardenepura Kotte', ' Negombo', ' Gampaha',
                                                ' Kalutara', 'Kandy', 'Matale', ' Nuwara Eliya', 'Galle',
                                                'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
                                                'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee',
                                                'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Monaragala', 'Ratnapura', 'Kegalle']}
                                            onSelect={handlereceiverCity}
                                            label={"City"}
                                            value={receiverCity}
                                        />


                                    </div>
                                </form>
                                <br></br>
                                <div className="w-100 bg-[#FFB534] m-auto py-5 px-5 ">
                                    <h1><b>Order Details</b></h1>
                                </div>

                                <form>
                                    <div className="block w-100 p-6 border border-gray-200 ">
                                        <FormInput
                                            type={'text'}
                                            name="OrderNo"
                                            label="Order No"
                                            placeholder="Order No"
                                            optional={false}
                                            callBack={handleorderno}
                                            value={orderNo}
                                        />
                                        <FormInput
                                            type={'text'}
                                            name="waybill"
                                            label="Waybill Number"
                                            placeholder="Waybill Number"
                                            optional={false}
                                            callBack={handleWaybll}
                                            value={orderWillbillNo}
                                        />
                                        <FormInput
                                            type={'text'}
                                            name="orderDescription"
                                            label="Order Description"
                                            placeholder="Order Description"
                                            optional={false}
                                            callBack={handleorderDes}
                                            value={orderDescription}
                                        />
                                        <FormInput
                                            type={'text'}
                                            name="productValue"
                                            label="Product Value"
                                            placeholder="Product Value"
                                            optional={false}
                                            callBack={handleproductVlaue}
                                            value={productValue}
                                        />
                                        <FormInput
                                            type={'text'}
                                            name="COD"
                                            label="COD"
                                            placeholder="COD"
                                            optional={false}
                                            callBack={handlecodfee}
                                            value={codfee}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="col w-full m-3">

                                <div className="w-100 bg-[#17A247] m-auto py-5 px-5 ">
                                    <h1><b>Active Status</b></h1>
                                </div>
                                <form>
                                    <div className="block w-100 p-6 border border-gray-200 ">
                                        <Dropdown
                                            options={['Panding', 'Schedule', 'Ongoing', 'Reschedule', 'Delivered']}
                                            onSelect={handleActiveStatus}
                                            color={(activeStatus === 'Schedule' || activeStatus === 'Delivered' || activeStatus === 'Ongoing') ? 'text-green-500 border-green-500 bg-green-100' : 'text-red-500 border-red-500 bg-red-100'}
                                            value={activeStatus}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>

                    </section>
                </div>

            </section>

            <button className='bg-[#17A247] text-white px-10 py-2 hover:bg-[#148F3F] rounded-lg m-2 absolute right-5 ' onClick={submitDetails}>
                {order ? "Update Details" : "Save Details"}
            </button>
            <Footer />
        </div>
    )
}
export default AddOrder