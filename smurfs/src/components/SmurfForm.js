import React, {useContext} from "react";
import axios from "axios";

import { SmurfContext } from "../contexts/SmurfContext";

import { Input, Button } from "reactstrap";

const SmurfForm = () => {

	const { setSmurfs } = useContext(SmurfContext);

	const initialState = {
		name: "",
		age: "",
		height: ""
	};

	const [data, setData] = React.useState(initialState);

	const handleInputChange = event => {
		setData({
			...data,
			[event.target.name]: event.target.value
		});
	};

	const handleFormSubmit = event => {
		event.preventDefault();
		axios
			.post("http://localhost:3333/smurfs", {
				name: data.name,
				age: data.age,
				height: data.height
			})
			.then(res => {
				setSmurfs(res.data)
				// console.log(res.data);
				setData(initialState);
			})
			.catch(err => {
				console.log("error posting data", err);
			});
		
	};

	return (
		<div className="form-container">
			<h2>Add a Smurf</h2>
			{/* <InputGroup> */}
			<form className="smurf-form" onSubmit={handleFormSubmit}>
				<Input
					className="input-field"
					type="text"
					placeholder="Name"
					value={data.name}
					name="name"
					id="name"
					onChange={handleInputChange}
					required
				/>

				<Input
					className="input-field"
					type="text"
					placeholder="Age"
					value={data.age}
					name="age"
					id="age"
					onChange={handleInputChange}
					required
				/>

				<Input
					className="input-field"
					type="text"
					placeholder="Height (cm)"
					value={data.height}
					name="height"
					id="height"
					onChange={handleInputChange}
					required
				/>
				<Button block inverse color="primary" type="submit">
					Submit
				</Button>
			</form>
			{/* </InputGroup> */}
		</div>
	);
};

export default SmurfForm;
