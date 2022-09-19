import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import axios from 'axios';


const Films = () => {
    const [filmsApiInfo, setFilmsApiInfo] = useState([]);
    const { drop, id } = useParams();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getAllNodes();
    }, []);
    

    //fetch the API films
    const getAllNodes = () => {
        axios.get("https://swapi.dev/api/films")
            .then((response) => {
                console.log("The API films respons console is ", response);
                setFilmsApiInfo(response.data.results);
                setLoading(false);
            }).catch(err => { console.log("API ERROR These aren't the droids you're looking for", err) });
    };

    //return info to the app.js from this block
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    return (
        <div>
            <h1>Films ID: {id}</h1>
            <p>Title: {filmsApiInfo[id].title}</p>
            <p>Director: {filmsApiInfo[id].director}</p>
            <p>Producer: {filmsApiInfo[id].producer}</p>
            <p>Release Date: {filmsApiInfo[id].release_date}</p>
        </div>
    );
}

export default Films;