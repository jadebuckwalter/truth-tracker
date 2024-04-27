import React from "react";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <div>
            <h1 className="text-6xl p-5 text-center">TruthTracker</h1>
            <NavBar/>
            <p className="p-5 text-center">Home</p>
        </div>
    );
}

export default Home;