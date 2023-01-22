import React from "react";
import Navbar from "../components/Navbar";
import MainBody from "../components/MainBody";

const Home = () => {

    return (
        <div className="flex flex-col items-center w-screen">
        <Navbar/>
        <MainBody/>
        </div>
    )
}

export default Home;