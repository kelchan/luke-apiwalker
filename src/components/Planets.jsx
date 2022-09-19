import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import axios from 'axios';

const Planets = () => {
    const [planetsApiInfo, setPlanetsApiInfo] = useState([]);
    const { drop, id } = useParams();

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getAllNodes();
    }, []);
    
    //fetch the API planets
    //i used this resource to get the component to load correctly
    //https://stackoverflow.com/questions/42132290/wait-for-react-promise-to-resolve-before-render
    const getAllNodes = () => {
        axios.get("https://swapi.dev/api/planets")
            .then((response) => {
                console.log("The API planets respons console is ", response);
                setPlanetsApiInfo(response.data.results);
                setLoading(false);
            }).catch(err => { console.log("API ERROR These aren't the droids you're looking for", err) });
    }


    //return info to the app.js from this block
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    return (
        <div>
            <h1>Plant's ID: {id}</h1>
            <p>Name: {planetsApiInfo[id].name}</p>
            <p>Rotation Period: {planetsApiInfo[id].rotation_period}</p>
            <p>Orbital Period: {planetsApiInfo[id].orbital_period}</p>
            <p>Diameter: {planetsApiInfo[id].diameter}</p>
        </div>
    );
}

export default Planets;