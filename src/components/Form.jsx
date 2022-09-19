import React, { useEffect, useState, } from "react";
import { useParams } from "react-router"
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const ApiForm = () => {
    const [id, setId] = useState("");
    const [drop, setDrop] = useState("");
    const navigate = useNavigate();
    const { option, num } = useParams();
    const [starWarsApiInfo, setStarWarsApiInfo] = useState([]);

    //using a this fucntion to activite the fetch
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit id:", id);
        console.log("submit drop value:", drop);
        navigate(`/${drop}/${id}`);
    }
    

    //return info to the app.js from this block
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Search for:</label>
                    <select  defaultValue="default" onChange={(e) => setDrop(e.target.value)}>
                        <option value="default" disabled>Choose an option</option>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                        <option value="films">films</option>
                        <option value="species">species</option>
                        <option value="vehicles">vehicles</option>
                        <option value="starships">starships</option>

                    </select>
                </div>
                <div>
                    <label>ID:</label>
                    <input type="number" onChange={(e) => setId(e.target.value)} min="0" max="9"/>
                    <br></br>
                    {
                        id === "" ? "Please enter number from 0 - 9" : null
                    }
                    <br></br>
                    {
                        id.length < 10 && id.length > 0 ? "enter value from 0 - 9" : "These aren't the droids you're looking for"
                    }
                </div>
                <input type="submit" value="Search" />

            </form>

        </div>
    );
}

export default ApiForm;