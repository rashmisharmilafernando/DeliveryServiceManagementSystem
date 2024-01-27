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

function AddRider(): JSX.Element {

    const navigate = useNavigate();
    const location = useLocation();

    let rider = location?.state?.rider;

    const [riderName, setriderName] = useState<string>(rider ? rider.riderName : "");
    const [riderNIC, setriderNIC] = useState<string>(rider ? rider.riderNIC : "");
    const [riderAddress, setriderAddress] = useState<string>(rider ? rider.riderAddress : "");
    const [riderPhoneNumber, setriderPhoneNumber] = useState<string>(rider ? rider.riderPhoneNumber : "");
    const [riderEmail, setriderEmail] = useState<string>(rider ? rider.riderEmail : "");
    const [riderGender, setSelectedriderGender] = useState<string>(rider ? rider.riderGender : " ");
    const [riderVehicleType, setriderVehicleType] = useState<string>(rider ? rider.riderVehicleType : "");
    const [riderAccountHolderName, setriderAccountHolderName] = useState<string>(rider ? rider.riderAccountHolderName : "");
    const [riderAccountNumber, setriderAccountNumber] = useState<string>(rider ? rider.riderAccountNumber : "");
    const [riderBranchName, setSelectedriderBranchName] = useState<string>(rider ? rider.riderBranchName : " ");
    const [riderBankName, setriderBankName] = useState<string>(rider ? rider.riderBankName : "");

    const handleRiderName = (e: any, type: string) => {
        setriderName(e.target.value);
    }

    const handleRidernic = (e: any, type: string) => {
        setriderNIC(e.target.value);
    }
    const handleRiderAddress = (e: any, type: string) => {
        setriderAddress(e.target.value);
    }
    const handleRiderPhoneNumber = (e: any, type: string) => {
        setriderPhoneNumber(e.target.value);
    }
    const handleRiderEmail = (e: any, type: string) => {
        setriderEmail(e.target.value);
    }

    const handleSelectGender = (selectedOption: string): void => {
        setSelectedriderGender(selectedOption);
    }
    const handleVehicleType= (selectedOption: string): void => {
        setriderVehicleType(selectedOption);
    }
    const handleAccountHolderName = (e: any, type: string) => {
        setriderAccountHolderName(e.target.value);
    }
    const handleAccountNumber = (e: any, type: string) => {
        setriderAccountNumber(e.target.value);
    }
    const handleBranchName = (e: any, type: string) => {
        setSelectedriderBranchName(e.target.value);
    }

    const handleBankNameSelection = (selectedOption: string): void => {
        setriderBankName(selectedOption);
    };

    const submitDetails = () => {
        const headers = {
            'Content-Type': 'application/json',
        }

        let body = rider ? {
            id: rider._id,
            riderName:riderName,
            riderNIC: riderNIC,
            riderAddress: riderAddress,
            riderPhoneNumber: riderPhoneNumber,
            riderEmail: riderEmail,
            riderGender: riderGender,
            riderVehicleType: riderVehicleType,
            riderAccountHolderName: riderAccountHolderName,
            riderAccountNumber: riderAccountNumber,
            riderBranchName: riderBranchName,
            riderBankName: riderBankName,
        } : {
            riderName:riderName,
            riderNIC: riderNIC,
            riderAddress: riderAddress,
            riderPhoneNumber: riderPhoneNumber,
            riderEmail: riderEmail,
            riderGender: riderGender,
            riderVehicleType: riderVehicleType,
            riderAccountHolderName: riderAccountHolderName,
            riderAccountNumber: riderAccountNumber,
            riderBranchName: riderBranchName,
            riderBankName: riderBankName,
        }


        if (rider) {
            axios.put("http://localhost:8097/rider/editRider", body, { headers: headers })
                .then(r => {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Rider Details updaed successfully!"
                    });
                    navigate('/rider');
                })
                .catch(e => {
                    Swal.fire({
                        icon: "error",
                        title: "Sorry!",
                        text: "Something went wrong"
                    });
                })
        } else {
            axios.post("http://localhost:8097/rider/addRider", body, { headers: headers })
                .then(r => {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Rider Details saved successfully!"
                    });
                    navigate('/rider');
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
                <h1 className="m-1 text-xl font-bold text-gray-600">{rider ? "Update Details" : "New Rider"}</h1>

            </div>
            <section className={'grid grid-rows-1 grid-flow-col gap-3'}>

                <div className="flex">
                    <div className="col w-full m-3 ">
                        <div className="w-100 bg-[#FFB534] m-auto py-5 px-5 ">
                            <h1><b>Rider Details</b></h1>
                        </div>
                        <form>
                            <div className="block w-100 p-6 border border-gray-200 ">
                                <FormInput
                                    type={'riderName'}
                                    name="riderName"
                                    label="Rider Name"
                                    placeholder="Rider Name"
                                    optional={false}
                                    callBack={handleRiderName}
                                    value={riderName}
                                />
                                <FormInput
                                    type={'riderNIC'}
                                    name="riderNIC"
                                    label="Rider NIC"
                                    placeholder="Rider NIC"
                                    optional={false}
                                    callBack={handleRidernic}
                                    value={riderNIC}

                                />
                                <FormInput
                                    type={'riderAddress'}
                                    name="riderAddress"
                                    label="Rider Address"
                                    placeholder="Rider Address"
                                    optional={false}
                                    callBack={handleRiderAddress}
                                    value={riderAddress}


                                />
                                <FormInput
                                    type={'riderPhoneNumber'}
                                    name="riderPhoneNumber"
                                    label="Rider PhoneNumber  "
                                    placeholder="Rider PhoneNumber  "
                                    optional={false}
                                    callBack={handleRiderPhoneNumber}
                                    value={riderPhoneNumber}

                                />
                                <FormInput
                                    type={'riderEmail'}
                                    name="riderEmail"
                                    label="Rider Email"
                                    placeholder="Rider Email"
                                    optional={false}
                                    callBack={handleRiderEmail}
                                    value={riderEmail}


                                />
                                <FormDropdown
                                    options={['Male', 'Female']}
                                    label={"Gender"}
                                    onSelect={handleSelectGender}
                                    value={riderGender}
                                />

                                  <FormDropdown
                                    options={['Bick', 'Threeweel','Lorry']}
                                    label={"Vehicle Type"}
                                    onSelect={handleVehicleType}
                                    value={riderVehicleType}
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
                                    callBack={handleAccountHolderName}
                                    value={riderAccountHolderName}
                                />
                                <FormInput
                                    type={'accountNumber'}
                                    name="accountNumber"
                                    label="Account Number"
                                    placeholder="Account Number"
                                    optional={false}
                                    callBack={handleAccountNumber}
                                    value={riderAccountNumber}

                                />
                                <FormInput
                                    type={'branchName'}
                                    name="branchName"
                                    label="Branch Name"
                                    placeholder="Branch Name"
                                    optional={false}
                                    callBack={handleBranchName}
                                    value={riderBranchName}

                                />

                                <FormDropdown
                                    options={['Bank of Ceylon', 'Commercial Bank', 'DFCC Bank', 'Hatton National Bank', 'Peoples Bank']}
                                    onSelect={handleBankNameSelection}
                                    label={"Bank Name"}
                                    value={riderBankName}
                                />


                            </div>
                        </form>
                    </div>
                    <div className="col w-full m-3">
                        

                        
                    </div>

                    
                </div>
            </section>

            <button className='bg-[#17A247] text-white px-10 py-2 hover:bg-[#148F3F] rounded-lg m-2 absolute right-5 ' onClick={submitDetails}>{rider ? "Update Details" : "Save Details"}</button>
            <Footer />
        </div>
    )
}
export default AddRider