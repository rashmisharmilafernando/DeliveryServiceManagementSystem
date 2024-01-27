import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/input/input";
import * as validator from '../util/validator.ts';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';
import Swal from "sweetalert2";


function Login(): JSX.Element {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [errorMsg, seterrorMsg] = useState('');

    // Function to handle the input 
    const handleInput = (e: { target: { value: any; }; }, type: any): void => {
        switch (type) {
            case 'email':
                setEmail(e.target.value)
                break;
            case 'password':
                setpassword(e.target.value)
                break;
        }
    }

    // Function to handle the login process
    /* Validate the email and password using a custom validator function*/

    const handleLogin = (): void => {

        let isvalidinput = true;
        let errorMsg = '';


        if (!validator.validateEmail(email)) {
            isvalidinput = false;
            errorMsg = " Your account email is incorrect.";
        }

        if (!validator.validatePassword(password)) {
            isvalidinput = false;
            errorMsg = "Your account password is incorrect.";
            console.log(errorMsg)
        }




        if (isvalidinput) {
            // send data to backend
            const headers = { 'Content-Type': 'application/json' }
            let body = {
                email: email,
                password: password
            }
            axios.post("http://localhost:8097/user/auth", body, { headers: headers })
                .then(r => {
                    Cookies.set("token", r.data.data.accessToken)
                    navigate("/home")
                    
                })
                .catch(e => {
                    Swal.fire({
                        icon: "error",
                        title: "Sorry!",
                        text: "Something went wrong"
                    });
                })


        } else {
            seterrorMsg(errorMsg);
        }
    }



    return (

        <section className={'grid grid-rows-1 grid-flow-col gap-2 bg-[#EEEEEE] '}>
            <div className="flex">
                <div className="col">
                    <img src="src\assets\loginPageImage.png" title="loginPageImage" alt="loginPageImage" className={'w-[500px] h-[100vh]'} />
                </div>
                <div className="col  justify-center items-center m-auto bg-white shadow-xl">
                    <div className={'w-fit p-24 border'}>
                        <img src="src\assets\logo.png" title="logo" alt="logo" className={'w-20 m-auto'} />
                        <div className={'text-2xl font-bold text-black-600 text-center mt-5'}>
                            Sign In
                        </div>
                        <div className={'mt-5 min-w-[300px] '}>

                            <Input
                                type={'email'}
                                name="email"
                                label="Email"
                                placeholder="Enter your email"
                                optional={false}
                                callBack={handleInput}
                            />

                            <Input
                                type={'password'}
                                name="password"
                                label="Password"
                                placeholder="Enter your password"
                                optional={false}
                                callBack={handleInput}
                            />
                            {
                                errorMsg &&
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium"> {errorMsg}</span></p>
                            }
                        </div>

                        <div className={'text-center mt-5'}>
                            <button className={'bg-[#68B984] text-white px-10 py-2 hover:bg-[#3B995B] rounded-lg'} onClick={handleLogin}><b>Sign In</b></button>
                        </div>

                        <div className={'text-center mt-5'}>
                            Don’t have an account get ? <Link to={'/signup'}><span className={'text-blue-600'}>Sign up</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Login