import React from "react";
import axios from "axios";

const SmurfForm = () => {
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
		// event.preventDefault();
		axios
			.post("http://localhost:3333/smurfs", {
				name: data.name,
				age: data.age,
				height: data.height
			})
			.then(res => {
				// console.log(res);
			})
			.catch(err => {
				console.log("error posting data", err);
			});
	};

	axios.delete("https://jsonplaceholder.typicode.com/todos/").then(response => {
		this.result.splice(id, 2);
	});
	console.log(this.result);

	return (
		<div>
			<h2>Add a Smurf</h2>
			<form onSubmit={handleFormSubmit}>
				<input
					type="text"
					placeholder="Name"
					value={data.name}
					name="name"
					id="name"
					onChange={handleInputChange}
					required
				/>

				<input
					type="text"
					placeholder="Age"
					value={data.age}
					name="age"
					id="age"
					onChange={handleInputChange}
					required
				/>

				<input
					type="text"
					placeholder="Height (cm)"
					value={data.height}
					name="height"
					id="height"
					onChange={handleInputChange}
					required
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default SmurfForm;
