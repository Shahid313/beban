import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    const Register = () => {
        console.log(username);
        console.log(email);
        console.log(password);
        console.log(confirmpassword);
    }
    return (
        <div className="flex w-screen h-screen">
            <div className="bg-rose-500 hidden xl:inline md:inline w-6/12 h-screen"></div>
            <div className="md:w-6/12 xl:w-6/12 h-screen w-screen flex flex-col justify-center items-center">
                
                <div className="flex justify-between items-center w-96 mb-3">
                <label>Username:</label>
                <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="bg-gray-200 p-1 rounded-full outline-rose-500"/>
                </div>

                <div className="flex justify-between items-center w-96 mb-3">
                <label>Email:</label>
                <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="bg-gray-200 p-1 rounded-full outline-rose-500"/>
                </div>
                
                <div className="flex justify-between items-center w-96 mb-3">
                <label>Password:</label>
                <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="bg-gray-200 p-1 rounded-full outline-rose-500"/>
                </div>

                <div className="flex justify-between items-center w-96 mb-3">
                <label>Confirm password:</label>
                <input placeholder="Confirm password" onChange={(e) => setConfirmpassword(e.target.value)} className="bg-gray-200 p-1 rounded-full outline-rose-500"/>
                </div>

                <div className="flex justify-end items-center w-96 pr-7">
                <button onClick={() => Register()} name="" className="bg-rose-500 w-32 p-1 rounded-full text-white active:scale-105 transition transform duration-200">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Login;