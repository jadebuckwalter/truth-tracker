import React from "react";
import { Link } from "react-router-dom";

// The navigation bar at the top of all pages
const NavBar = () => {
    return (
        <div className="flex flex-col items-center bg-slate-300 w-full">
            <div className="inline-block">
                <Link className="u-button inline-block cursor-pointer mx-8 my-4" to="/">
                    Home
                </Link>
                <Link className="u-button inline-block cursor-pointer mx-8 my-4" to="/about">
                    About
                </Link>
                <Link className="u-button inline-block cursor-pointer mx-8 my-4" to="/team">
                    Meet the Team
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
