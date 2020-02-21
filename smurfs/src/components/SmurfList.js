import React, {useContext} from "react";
import { SmurfContext } from "../contexts/SmurfContext";

const SmurfList = () => {

    const smurfs  = useContext(SmurfContext);
    // console.log(smurfs);
    return (
        
        <div>
            {smurfs.map(smurf => {
                return (
                    <div key={smurf.id}>
                        <p>{smurf.name}</p>
                        <p>Age: {smurf.age} years</p>
                        <p>Height: {smurf.height}</p>
                    </div>
                )
            })}
        </div>
    )

}

export default SmurfList;