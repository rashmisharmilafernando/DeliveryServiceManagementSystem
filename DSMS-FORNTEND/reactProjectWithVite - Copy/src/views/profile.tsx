import Header from "../layout/header";
import Footer from "../layout/footer";
import FormInput from "../components/input/formInput";
import Dropdown from "../components/Dropdown/Dropdown";
import formDropdown from "../components/Dropdown/formDropdown";
import React, { useState } from 'react';
import FormDropdown from "../components/Dropdown/formDropdown";
import Swal, { SweetAlertResult, SweetAlertOptions } from 'sweetalert2';
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

function Profile(): JSX.Element {

    const location = useLocation();
    const [userProfile, setUserProfile] = useState(location?.state?.userProfile);

    const [username, setUsername] = useState<string>(userProfile ? userProfile.username : "");
    const [email, setEmail] = useState<string>(userProfile ? userProfile.email : "");
    const [newPassword, setNewPassword] = useState<string>(userProfile ? userProfile.newPassword : "");
    const [confirmPassword, setConfirmPassword] = useState<string>(userProfile ? userProfile.confirmPassword : "");

    const handleusername = (e: any, type: string) => {
        setUsername(e.target.value);
    }
    const handleemail = (e: any, type: string) => {
        setEmail(e.target.value);
    }
    const handlenewPassword = (e: any, type: string) => {
        setNewPassword(e.target.value);
    }
    const handleconfirmPassword = (e: any, type: string) => {
        setConfirmPassword(e.target.value);
    }

    const handleSaveChanges = () => {


        const headers = {
            'Content-Type': 'application/json',
        
        }
        let body = {
            username: username,
            email: email,
            newPassword: newPassword,
            confirmPassword: confirmPassword
        }
        axios.put("http://localhost:8095/user/updateDetails", body, { headers: headers })
            .then(r => {
                if (newPassword !== confirmPassword) {
                    const passwordMismatchAlertOptions: SweetAlertOptions = {
                        icon: 'error',
                        title: 'Password Mismatch',
                        text: 'New password and confirm password do not match.',
                    };
                    Swal.fire(passwordMismatchAlertOptions);
                    throw new Error('Password mismatch');
                } const isDataSavedSuccessfully: boolean = true;
                if (isDataSavedSuccessfully) {
                    const successAlertOptions: SweetAlertOptions = {
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500,
                    };
                    Swal.fire(successAlertOptions);
                } else {
                    throw new Error('Data save failed');
                }

            })
            .catch(e => {
                Swal.fire({
                    icon: "error",
                    title: "Sorry!",
                    text: "Something went wrong"
                });
            })
    }

    return (
        <div>
            <Header />
            <div className='flex justify-between items-center  p-5'>
                {/* Page Title */}
                <h1 className="m-1 text-xl font-bold text-gray-600">User Profile</h1>
            </div>
            <section className={'grid grid-rows-1 grid-flow-col gap-1'}>
                <div className="col  m-3 ">
                    <div className="w-100 bg-[#FFB534] m-auto py-5 px-5 ">
                        <h1><b>Edit Profile</b></h1>
                    </div>
                    <section className={'grid grid-rows-1 grid-flow-col gap-2'}>

                        <div className="flex">

                            <div className="col w-full m-3">
                                <form>
                                    <div className="block w-100 p-6 border border-gray-200 ">
                                        <FormInput
                                            type={'username'}
                                            name="username"
                                            label="Username"
                                            placeholder="username"
                                            optional={false}
                                            callBack={handleusername}
                                            value={username}


                                        />

                                        <FormInput
                                            type={'email'}
                                            name="email"
                                            label="Email"
                                            placeholder="Email"
                                            optional={false}
                                            callBack={handleemail}
                                            value={email}


                                        />


                                    </div>
                                </form>
                            </div>
                            <div className="col w-full m-3 ">
                                <form>
                                    <div className="block w-100 p-6 border border-gray-200 ">


                                        <FormInput
                                            type={'newpassword'}
                                            name="newpassword"
                                            label="New password"
                                            placeholder="New password"
                                            optional={false}
                                            callBack={handlenewPassword}
                                            value={newPassword}


                                        />
                                        <FormInput
                                            type={'confirmPassword'}
                                            name="confirmPassword"
                                            label="Confirm Password"
                                            placeholder="Confirm Password"
                                            optional={false}
                                            callBack={handleconfirmPassword}
                                            value={confirmPassword}

                                        />


                                    </div>
                                </form>


                            </div>
                        </div>
                    </section>
                </div>

            </section>

            <button className='bg-[#17A247] text-white px-10 py-2 hover:bg-[#148F3F] rounded-lg m-2 absolute right-5 ' onClick={handleSaveChanges}>
                Update Details
            </button>
            <Footer />
        </div>
    )
}
export default Profile