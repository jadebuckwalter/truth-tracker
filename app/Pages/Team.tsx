import React from "react";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";

const Team = () => {
    return (
        <div>
            <h1 className="text-6xl p-5 text-center">TruthTracker</h1>
            <NavBar/>
            <div className="flex flex-col items-center">
                <Profile name={"Jade Buckwalter"} about={""}/>
                <Profile name={"Alex Fan"} about={""}/>
                <Profile name={"Andy Shim"} about={""}/>
                <Profile name={"Annika Vivekananthan"} about={""}/>
            </div>
        </div>
    );
}

export default Team;