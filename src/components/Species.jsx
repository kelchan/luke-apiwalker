import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import axios from 'axios';

const Species = () => {
    const [speciesApiInfo, setSpeciesApiInfo] = useState([]);
    const { drop, id } = useParams();

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getAllNodes();
    }, []);
    
    //fetch the API species
    const getAllNodes = () => {
        axios.get("https://swapi.dev/api/species")
                    .then((response) => {
                        console.log("The API species respons console is ", response);
                        setSpeciesApiInfo(response.data.results);
                        setLoading(false);
                    }).catch(err => { console.log("API ERROR These aren't the droids you're looking for", err) });
    }
    

    //return info to the app.js from this block
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    return (
        <div>
            <h1>Species ID: {id}</h1>
            <p>Name: {speciesApiInfo[id].name}</p>
            <p>Classification: {speciesApiInfo[id].classification}</p>
            <p>Designation: {speciesApiInfo[id].designation}</p>
            <p>Average_height: {speciesApiInfo[id].average_height}</p>
        </div>
    );
}

export default Species;