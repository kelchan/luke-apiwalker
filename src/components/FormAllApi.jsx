import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Form = () => {
    const [starWarsApiInfo, setStarWarsApiInfo] = useState([]);
    const [peopleInfo, setPeopleInfo] = useState([]);
    const [planetsApiInfo, setPlanetsApiInfo] = useState([]);
    const [filmsApiInfo, setFilmsApiInfo] = useState([]);
    const [speciesApiInfo, setSpeciesApiInfo] = useState([]);
    const [vehiclesApiInfo, setVehiclesApiInfo] = useState([]);
    const [starShipsApiInfo, setStarShipsApiInfo] = useState([]);

    //fetch the API
    useEffect(() => {
        fetch("https://swapi.dev/api/")
            .then((response) => {
                return response.json();
            }).then((response) => {
                console.log("The API respons console is ", response);
                setStarWarsApiInfo(response);
            }).catch(err => { console.log('API ERROR', err) });
    }, []);
    
    //fetch the API people
    useEffect(() => {
        fetch("https://swapi.dev/api/people")
            .then((response) => {
                return response.json();
            }).then((response) => {
                console.log("The API people respons console is ", response);
                setPeopleInfo(response.results);
            }).catch(err => { console.log('API ERROR', err) });
    }, []);

    //fetch the API planets
    useEffect(() => {
        fetch("https://swapi.dev/api/planets")
            .then((response) => {
                return response.json();
            }).then((response) => {
                console.log("The API planets response console is ", response);
                setPlanetsApiInfo(response.results);
            }).catch(err => { console.log('API ERROR', err) });
    }, []);

    //fetch the API films
    useEffect(() => {
        fetch("https://swapi.dev/api/films")
            .then((response) => {
                return response.json();
            }).then((response) => {
                console.log("The API films response console is ", response);
                setFilmsApiInfo(response.results);
            }).catch(err => { console.log('API ERROR', err) });
    }, []);


    //fetch the API species
    useEffect(() => {
        fetch("https://swapi.dev/api/species")
            .then((response) => {
                return response.json();
            }).then((response) => {
                console.log("The API species response console is ", response);
                setSpeciesApiInfo(response.results);
            }).catch(err => { console.log('API ERROR', err) });
    }, []);

    //fetch the API vehicles
    useEffect(() => {
        fetch("https://swapi.dev/api/vehicles")
            .then((response) => {
                return response.json();
            }).then((response) => {
                console.log("The API vehicles response console is ", response);
                setVehiclesApiInfo(response.results);
            }).catch(err => { console.log('API ERROR', err) });
    }, []);

    //fetch the API starShips
    useEffect(() => {
        fetch("https://swapi.dev/api/starships")
            .then((response) => {
                return response.json();
            }).then((response) => {
                console.log("The API starShips response console is ", response);
                setStarShipsApiInfo(response.results);
            }).catch(err => { console.log('API ERROR', err) });
    }, []);


    //Query to select capture the value of the option
    const selectData = document.querySelector(`#optionsSelect`);

    return (
        <div>
            <form>
                <div>
                    <label>Serach for:</label>
                    <select id={`optionsSelect`} name="starWars">
                        <option defaultValue="people">people</option>
                        <option value="planets">planets</option>
                        <option value="films">films</option>
                        <option value="species">species</option>
                        <option value="vehicles">vehicles</option>
                        <option value="starships">starships</option>

                    </select>
                </div>
                <div>
                    <label>ID:</label>
                    <input type="text" />
                </div>
                <input type="submit" value="Search" />
                
            </form>
            <hr />
            <div>
                {/* {starWarsApiInfo.map((people, index)=>{
                    {console.log(people, index)}
                })} */}
            </div>
        </div>
    );
}

export default Form;