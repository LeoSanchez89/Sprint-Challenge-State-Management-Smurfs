import React, { useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";

import { Card, CardBody } from "reactstrap";

const SmurfList = () => {
	const { smurfs }  = useContext(SmurfContext);
	// console.log(smurfs);
	return (
		<div className="smurf-container">
			{smurfs.map(smurf => {
				return (
					<Card className="smurf-card" body inverse color="primary" key={smurf.id}>
						<CardBody>
							<h3>{smurf.name}</h3>
							<p>Age: {smurf.age} years</p>
							<p>Height: {smurf.height} cm</p>
						</CardBody>
					</Card>
				);
			})}
		</div>
	);
};

export default SmurfList;
