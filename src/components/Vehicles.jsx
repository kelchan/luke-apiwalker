import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import axios from 'axios';

const Vehicles = () => {
    const [vehiclesApiInfo, setVehiclesApiInfo] = useState([]);
    const { drop, id } = useParams();

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getAllNodes();
    }, []);
    

    //fetch the API vehicles
    const getAllNodes = () => {
        axios.get("https://swapi.dev/api/vehicles")
            .then((response) => {
                console.log("The API vehicles response console is ", response);
                setVehiclesApiInfo(response.data.results);
                setLoading(false);
            }).catch(err => { console.log("API ERROR These aren't the droids you're looking for", err) });
    };

    //return info to the app.js from this block
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    return (
        <div>
            <h1>Vehicles ID: {id}</h1>
            <p>Name: {vehiclesApiInfo[id].name}</p>
            <p>Model: {vehiclesApiInfo[id].model}</p>
            <p>Manufacturer: {vehiclesApiInfo[id].manufacturer}</p>
            <p>Crew: {vehiclesApiInfo[id].crew}</p>
        </div>
    );
}

export default Vehicles;
