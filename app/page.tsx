"use client"
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.tsx";
import About from "./Pages/About.tsx";
import Team from "./Pages/Team.tsx";
 
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/team" element={<Team/>}/>
			</Routes>
		</BrowserRouter>
    );
}

export default App;