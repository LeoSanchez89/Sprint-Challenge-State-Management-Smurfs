import React, { useState, useEffect } from "react";
import axios from "axios";


import { SmurfContext } from "../contexts/SmurfContext";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";
import pic from "../img/smurfs.png"; 

import "./App.css";

const App = () => {
	const [smurfs, setSmurfs] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3333/smurfs")
			.then(res => {
				console.log(res.data)
				setSmurfs(res.data);
			})
			.catch(err => {
				// console.log("error fetching from api", err);
			});
	}, []);
 
	return (
		<div className="App">
			<h1>Look at all these <span className="smurfs">SMURFS!</span></h1>
			<img src={pic}/>
			<SmurfContext.Provider value={smurfs}>
				<SmurfForm />
				<SmurfList />
			</SmurfContext.Provider>
		</div>
	);
};

export default App;

// http://localhost:3333/smurfs
