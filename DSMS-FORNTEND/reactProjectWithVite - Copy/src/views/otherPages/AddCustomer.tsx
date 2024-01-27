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

function AddCustomer(): JSX.Element {

    const navigate = useNavigate();
    const location = useLocation();

    let customer = location?.state?.customer;

    const [bussinessName, setbussinessName] = useState<string>(customer ? customer.bussinessName : "");
    const [bussinessUsername, setUsername] = useState<string>(customer ? customer.bussinessUsername : "");
    const [bussinessEmail, setemail] = useState<string>(customer ? customer.bussinessEmail : "");
    const [bussinessAddress, setaddress] = useState<string>(customer ? customer.bussinessAddress : "");
    const [bussinessPhoneNumber, setphoneNumber] = useState<string>(customer ? customer.bussinessPhoneNumber : "");
    const [sealItems, setSelectedSealItem] = useState<string>(customer ? customer.sealItems : " ");
    const [accountHolderName, setaccountHolderName] = useState<string>(customer ? customer.accountHolderName : "");
    const [accountNumber, setaccountNumber] = useState<string>(customer ? customer.accountNumber : "");
    const [branchName, setbranchName] = useState<string>(customer ? customer.branchName : "");
    const [bankName, setSelectedBankName] = useState<string>(customer ? customer.bankName : " ");
    const [pickUpAddress, setpickUpAddress] = useState<string>(customer ? customer.pickUpAddress : "");
    const [pickUpPhoneNumber, setpickUpPhoneNumber] = useState<string>(customer ? customer.pickUpPhoneNumber : "");
    const [activeStatus, setSelectedsetActiveStatus] = useState<string>(customer ? customer.activeStatus : "");

    const handleInput = (e: any, type: string) => {
        switch (type) {
            case 'bussinessName':
                setbussinessName(e.target.value)
                break;
            case 'bussinessUsername':
                setUsername(e.target.value)
                break;
            case 'bussinessEmail':
                setemail(e.target.value)
                break;
            case 'bussinessAddress':
                setaddress(e.target.value)
                break;
            case 'bussinessPhoneNumber':
                setphoneNumber(e.target.value)
                break;
            case 'accountHolderName':
                setaccountHolderName(e.target.value)
                break;
            case 'accountNumber':
                setaccountNumber(e.target.value)
                break;
            case 'branchName':
                setbranchName(e.target.value)
                break;
           
            case 'pickUpAddress':
                setpickUpAddress(e.target.value)
                break;
            case 'pickUpPhoneNumber':
                setpickUpPhoneNumber(e.target.value)
                break;
        }
    }

    
    const handleSealItemsSelection = (selectedOption: string): void => {
        setSelectedSealItem(selectedOption);
    };

    const handleBankNameSelection = (selectedOption: string): void => {
        setSelectedBankName(selectedOption);
    };

    const handleActiveStatus = (selectedOption: string): void => {
        setSelectedsetActiveStatus(selectedOption);

        if (activeStatus === 'Active') {

            axios.post('http://localhost:8097/customer/send-email', {
                to: bussinessEmail,
                subject: 'Activated',
                text: 'Dear customer, your account is now active. Thank you for choosing our service.',
            })
                .then((response) => {
                    console.log('Email sent successfully', response.data);
                })
                .catch((error) => {
                    console.error('Failed to send email', error);
                });
        }
    };

    const submitDetails = () => {
        const headers = {
            'Content-Type': 'application/json',
        }

        let body = customer ? {
            id: customer._id,
            bussinessName: bussinessName,
            bussinessUsername: bussinessUsername,
            bussinessEmail: bussinessEmail,
            bussinessAddress: bussinessAddress,
            bussinessPhoneNumber: bussinessPhoneNumber,
            sealItems: sealItems,
            accountHolderName: accountHolderName,
            accountNumber: accountNumber,
            branchName: branchName,
            bankName: bankName,
            pickUpAddress: pickUpAddress,
            pickUpPhoneNumber: pickUpPhoneNumber,
            activeStatus: activeStatus
        } : {
            bussinessName: bussinessName,
            bussinessUsername: bussinessUsername,
            bussinessEmail: bussinessEmail,
            bussinessAddress: bussinessAddress,
            bussinessPhoneNumber: bussinessPhoneNumber,
            sealItems: sealItems,
            accountHolderName: accountHolderName,
            accountNumber: accountNumber,
            branchName: branchName,
            bankName: bankName,
            pickUpAddress: pickUpAddress,
            pickUpPhoneNumber: pickUpPhoneNumber,
            activeStatus: activeStatus
        }


        if (customer) {
            axios.put("http://localhost:8097/customer/editCustomer", body, { headers: headers })
                .then(r => {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Customer Details updaed successfully!"
                    });
                    navigate('/customer');
                })
                .catch(e => {
                    Swal.fire({
                        icon: "error",
                        title: "Sorry!",
                        text: "Something went wrong"
                    });
                })
        } else {
            axios.post("http://localhost:8097/customer/addCustomer", body, { headers: headers })
                .then(r => {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Customer Details saved successfully!"
                    });
                    navigate('/customer');
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
    return (
        <div>
            <Header />
            <div className='flex justify-between items-center  p-5'>
                {/* Page Title */}
                <h1 className="m-1 text-xl font-bold text-gray-600">{customer ? "Update Details" : "New Customer"}</h1>

            </div>
            <section className={'grid grid-rows-1 grid-flow-col gap-3'}>

                <div className="flex">
                    <div className="col w-full m-3 ">
                        <div className="w-100 bg-[#FFB534] m-auto py-5 px-5 ">
                            <h1><b>Business Details</b></h1>
                        </div>
                        <form>
                            <div className="block w-100 p-6 border border-gray-200 ">
                                <FormInput
                                    type={'bussinessName'}
                                    name="bussinessName"
                                    label="Bussiness Name"
                                    placeholder="Bussiness Name"
                                    optional={false}
                                    callBack={handleInput}
                                    value={bussinessName}
                                />
                                <FormInput
                                    type={'bussinessUsername'}
                                    name="bussinessUsername"
                                    label="Bussiness Username"
                                    placeholder="Bussiness Username"
                                    optional={false}
                                    callBack={handleInput}
                                    value={bussinessUsername}

                                />
                                <FormInput
                                    type={'bussinessEmail'}
                                    name="bussinessEmail"
                                    label="Email"
                                    placeholder="Email"
                                    optional={false}
                                    callBack={handleInput}
                                    value={bussinessEmail}


                                />
                                <FormInput
                                    type={'bussinessAddress'}
                                    name="bussinessAddress"
                                    label="Address  "
                                    placeholder="Address  "
                                    optional={false}
                                    callBack={handleInput}
                                    value={bussinessAddress}

                                />
                                <FormInput
                                    type={'bussinessPhoneNumber'}
                                    name="bussinessPhoneNumber"
                                    label="Phone Number"
                                    placeholder="Phone Number"
                                    optional={false}
                                    callBack={handleInput}
                                    value={bussinessPhoneNumber}


                                />
                                <FormDropdown
                                    options={['Fashion', 'Beauty']}
                                    label={"Seal Items"}
                                    onSelect={handleSealItemsSelection}
                                    value={sealItems}
                                />


                            </div>
                        </form>

                    </div>
                    <div className="col w-full m-3">
                        <div className="w-100 bg-[#FFB534] m-auto py-5 px-5 ">
                            <h1><b>Bank Details</b></h1>

                        </div>

                        <form>
                            <div className="block w-100 p-6 border border-gray-200 ">
                                <FormInput
                                    type={'accountHolderName'}
                                    name="accountHolderName"
                                    label="Account Holder Name"
                                    placeholder="Account Holder Name"
                                    optional={false}
                                    callBack={handleInput}
                                    value={accountHolderName}
                                />
                                <FormInput
                                    type={'accountNumber'}
                                    name="accountNumber"
                                    label="Account Number"
                                    placeholder="Account Number"
                                    optional={false}
                                    callBack={handleInput}
                                    value={accountNumber}

                                />
                                <FormInput
                                    type={'branchName'}
                                    name="branchName"
                                    label="Branch Name"
                                    placeholder="Branch Name"
                                    optional={false}
                                    callBack={handleInput}
                                    value={branchName}

                                />

                                <FormDropdown
                                    options={['Bank of Ceylon', 'Commercial Bank', 'DFCC Bank', 'Hatton National Bank', 'Peoples Bank']}
                                    onSelect={handleBankNameSelection}
                                    label={"Bank Name"}
                                    value={bankName}
                                />


                            </div>
                        </form>

                        <br></br>
                        <div className="w-100 bg-[#FFB534] m-auto py-5 px-5 ">
                            <h1><b>Pick Up Details</b></h1>
                        </div>
                        <form>
                            <div className="block w-100 p-6 border border-gray-200 ">
                                <FormInput
                                    type={'pickUpAddress'}
                                    name="pickUpAddress"
                                    label="Pick-Up Address"
                                    placeholder="Pick-Up Address"
                                    optional={false}
                                    callBack={handleInput}
                                    value={pickUpAddress}

                                />
                                <FormInput
                                    type={'pickUpPhoneNumber'}
                                    name="pickUpPhoneNumber"
                                    label="Phone Number"
                                    placeholder="Phone Number"
                                    optional={false}
                                    callBack={handleInput}
                                    value={pickUpPhoneNumber}

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
                                    options={['Panding', 'Active', 'Non-Active']}
                                    onSelect={handleActiveStatus}
                                    color={activeStatus === 'Active' ? 'text-green-500 border-green-500 bg-green-100' : 'text-red-500 border-red-500 bg-red-100'}
                                    value={activeStatus}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <button className='bg-[#17A247] text-white px-10 py-2 hover:bg-[#148F3F] rounded-lg m-2 absolute right-5 ' onClick={submitDetails}>{customer ? "Update Details" : "Save Details"}</button>
            <Footer />
        </div>
    )
}
export default AddCustomer