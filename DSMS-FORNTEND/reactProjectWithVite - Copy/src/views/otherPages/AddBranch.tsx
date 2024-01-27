import Header from "../../layout/header.tsx";
import Footer from "../../layout/footer.tsx";
import FormInput from "../../components/input/formInput.tsx";
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { useState } from "react";

function AddBranch(): JSX.Element {

    const navigate = useNavigate();
    const location = useLocation();

    let branch = location?.state?.branch;

    const [branchName, setbranchName] = useState<string>(branch ? branch.branchName : "");
    const [branchAddress, setbranchAddress] = useState<string>(branch ? branch.branchAddress : "");
    const [branchPhoneNumber, setbranchPhoneNumber] = useState<string>(branch ? branch.branchPhoneNumber : "");
    const [branchEmail, setbranchEmail] = useState<string>(branch ? branch.branchEmail : "");

    const handleInput = (e: any, type: string) => {
        switch (type) {
            case 'branchName':
                setbranchName(e.target.value)
                break;
            case 'branchAddress':
                setbranchAddress(e.target.value)
                break;
            case 'branchPhoneNumber':
                setbranchPhoneNumber(e.target.value)
                break;
            case 'branchEmail':
                setbranchEmail(e.target.value)
                break;
        }
    }

    const submitDetails = () => {
        const headers = {
            'Content-Type': 'application/json',
        }

        let body = branch ? {
            id: branch._id,
            branchName: branchName,
            branchAddress: branchAddress,
            branchPhoneNumber: branchPhoneNumber,
            branchEmail: branchEmail
        } : {
            branchName: branchName,
            branchAddress: branchAddress,
            branchPhoneNumber: branchPhoneNumber,
            branchEmail: branchEmail
        }
        if (branch) {
            axios.put("http://localhost:8097/branch/editBranch", body, { headers: headers })
                .then(r => {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Branch Details updaed successfully!"
                    });
                    navigate('/branch');
                })
                .catch(e => {
                    Swal.fire({
                        icon: "error",
                        title: "Sorry!",
                        text: "Something went wrong"
                    });
                })
        } else {
            axios.post("http://localhost:8097/branch/addBranch", body, { headers: headers })
                .then(r => {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Branch Details saved successfully!"
                    });
                    navigate('/branch');
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
                <h1 className="m-1 text-xl font-bold text-gray-600">{branch ? "Update Details" : "New Branch"}</h1>
            </div>
            <section className={'grid grid-rows-1 grid-flow-col gap-3'}>

                <div className="flex">
                    <div className="col w-full m-3 ">
                        <div className="w-100 bg-[#FFB534] m-auto py-5 px-5 ">
                            <h1><b>Branch Details</b></h1>
                        </div>
                        <form>
                            <div className="block w-100 p-4 border border-gray-200 ">
                                <FormInput
                                    type={'branchName'}
                                    name="branchName"
                                    label="Branch Name"
                                    placeholder="Branch Name"
                                    optional={false}
                                    callBack={handleInput}
                                    value={branchName}

                                />
                                <FormInput
                                    type={'branchAddress'}
                                    name="branchAddress"
                                    label="branch Address"
                                    placeholder="Address"
                                    optional={false}
                                    callBack={handleInput}
                                    value={branchAddress}


                                />
                                <FormInput
                                    type={'branchPhoneNumber'}
                                    name="branchPhoneNumber"
                                    label="Contact Number"
                                    placeholder="Contact Number"
                                    optional={false}
                                    callBack={handleInput}
                                    value={branchPhoneNumber}


                                />
                                <FormInput
                                    type={'branchEmail'}
                                    name="branchEmail"
                                    label="branch Email"
                                    placeholder="Email"
                                    optional={false}
                                    callBack={handleInput}
                                    value={branchEmail}


                                />

                            </div>
                        </form>

                    </div>

                    <div className="col w-full m-3">

                    </div>
                    <div className="col w-full m-3">

                    </div>




                </div>
            </section>

            <button className='bg-[#17A247] text-white px-10 py-2 hover:bg-[#148F3F] rounded-lg m-2 absolute right-5 ' onClick={submitDetails}>{branch ? "Update Details" : "Save Details"}</button>
            <Footer />
        </div>
    )
}
export default AddBranch