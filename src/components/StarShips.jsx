import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import axios from 'axios';

const StarShips = () => {
    const [starShipsApiInfo, setStarShipsApiInfo] = useState([]);
    const { drop, id } = useParams();

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getAllNodes();
    }, []);

    //fetch the API starShips
    const getAllNodes = () => {
        axios.get("https://swapi.dev/api/starships")
            .then((response) => {
                console.log("The API starShips respons console is ", response);
                setStarShipsApiInfo(response.data.results);
                setLoading(false);
            }).catch(err => { console.log("API ERROR These aren't the droids you're looking for", err) });
    };

    //return info to the app.js from this block
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    return (
        <div>
            <h1>StarShips ID: {id}</h1>
            <p>Name: {starShipsApiInfo[id].name}</p>
            <p>Model: {starShipsApiInfo[id].model}</p>
            <p>Manufacturer: {starShipsApiInfo[id].manufacturer}</p>
            <p>Max Atmosphering Speed: {starShipsApiInfo[id].max_atmosphering_speed}</p>
        </div>
    );
}

export default StarShips;