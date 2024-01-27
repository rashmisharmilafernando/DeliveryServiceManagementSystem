import { Link } from "react-router-dom";
import Input from "../components/input/input";
import React, { useState } from 'react';
import * as validator from '../util/validator.ts';
import Swal from "sweetalert2";
import axios from "axios";



function Signup(): JSX.Element {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMsg, setErrorMsg] = useState('');

    // Function to handle the input 
    const handleInputs = (e: any, type: string) => {
        switch (type) {
            case 'username':
                setUsername(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
        }
    }

    const validateSubmition = () => {
        if (username && email && password) {
            submitNewUser();
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid Inputs",
                text: "Please enter valid inputs"
            });
        }
    }
    const submitNewUser = () => {
        const headers = { 'Content-Type': 'application/json' }

        let isValidInput = true;
        let errorMsg = '';

        let body = {
            username: username,
            email: email,
            password: password
        }

        if (!validator.validateUsername(username)) {
            isValidInput = false;
            errorMsg = "Your account username is incorrect.";
        }
        if (!validator.validateEmail(email)) {
            isValidInput = false;
            errorMsg = "Your account email is incorrect.";
        }
        if (!validator.validatePassword(password)) {
            isValidInput = false;
            errorMsg = "Your account password is incorrect.";
        }


        if (isValidInput) {
        
            axios.post("http://localhost:8096/user", body, { headers: headers })

            .then(r => {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "User saved successfully!"
                });
                console.log(r.data);
            }).catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Sorry!",
                    text: "Something went wrong"
                });
                console.log(err.data);
            })
        } else {
            setErrorMsg(errorMsg)
        }
    }


    return (
        <section className={'grid grid-rows-1 grid-flow-col gap-2 bg-[#EEEEEE] '}>
            <div className="flex">
                <div className="col">
                    <img src="src\assets\SignUpPageImage.jpg" title="loginPageImage" alt="loginPageImage" className={'w-[500px] h-[100vh]'} />
                </div>
                <div className="col  justify-center items-center m-auto bg-white shadow-xl p-5">
                    <img src="src\assets\logo.png" title="logo" alt="logo" className={'w-24 m-auto'} />

                    <div className={'text-2xl font-bold text-black-600 text-center mt-5'}>
                        Sign Up
                    </div>

                    <div className={'mt-5 min-w-[400px]'}>


                        <div className={'m-2'}>
                            <Input
                                type={'username'}
                                name="username"
                                label="Username"
                                placeholder="username"
                                optional={false}
                                callBack={handleInputs} />
                        </div>

                        <div className={'m-2'}>
                            <Input
                                type={'email'}
                                name="email"
                                label="Email"
                                placeholder="Email"
                                optional={false}
                                callBack={handleInputs} />
                        </div>

                        <div className={'m-2'}>
                            <Input
                                type={'password'}
                                name="password"
                                label="Password"
                                placeholder="Password"
                                optional={false}
                                callBack={handleInputs} />
                        </div>
                    </div>

                    <div className={'text-center mt-5'}>
                        <button className={'bg-[#68B984] text-white px-10 py-2 hover:bg-[#3B995B] rounded-lg'} onClick={validateSubmition} >Sign in</button>
                        {
                            errorMsg &&
                            <p className=" m-3 text-sm text-red-600 dark:text-red-500"><span className="font-medium "> {errorMsg}</span></p>
                        }
                    </div>



                    <div className={'text-center mt-5'}>
                        Do have an account? <Link to={'/'}><span className={'text-blue-600'}>Sign in</span></Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Signup;
