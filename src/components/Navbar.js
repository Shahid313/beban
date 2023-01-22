import React,{useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="w-10/12 bg-white border-2 shadow-md border-slate-600 h-12 md:h-16 xl:h-16 lg:h-16 mt-8 rounded-full flex justify-center items-center">
                <div className="flex flex-row w-11/12 rounded-full justify-between items-center">
                <h1 className="text-black text-lg font-bold md:text-3xl xl:text-3xl">Logo</h1>
                <div className="flex flex-row w-40 md:w-60 lg:w-60 xl:w-60 items-center justify-between">
                <Link className="text-sm md:text-lg xl:text-lg hover:text-rose-500" to='/login'>Preview</Link>
                    <div className="md:w-20 xl:w-20 lg:w-20 md:h-7 xl:h-7 lg:h-7 h-5 text-white rounded-md active:scale-105 transition transform duration-200 bg-rose-500 w-12 flex justify-center items-center">
                        <p className="text-xs md:text-base lg:text-base">Logout</p>
                    </div>
                    <div className="md:w-10 md:h-10 xl:w-10 xl:h-10 w-7 h-7 rounded-full">
                        <img src="/img/flask.jpg" className="md:w-10 md:h-10 xl:w-10 xl:h-10 w-7 h-7 rounded-full"/>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default Navbar;