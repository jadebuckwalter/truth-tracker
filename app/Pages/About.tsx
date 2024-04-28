import React from "react";
import NavBar from "../components/NavBar";
import Image from "next/image";

const About = () => {
    return (
        <div>
            <h1 className="text-6xl p-5 text-center">TruthTracker</h1>
            <NavBar/>
            <p className="p-5 text-center">TruthTracker detects biased (or unbiased) statements in media. Users simply hover over a sentence to receive more information on the prevalence and type of bias.</p>
            <div className="flex flex-col items-center">
                <Image src="/example1.png" alt="example" width={700} height={450}/>
            </div>
        </div>
    );
}

export default About;