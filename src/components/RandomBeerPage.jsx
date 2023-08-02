// import React from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";

// const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function RandomBeerPage() {
    const [randomBeer, setRandomBeer] = useState([]);

    useEffect(() => {
        fetchRandomBeer();
    }, []);

    const fetchRandomBeer = () => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((response) => {
                console.log(response.data);
                setRandomBeer(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <img src={randomBeer.image_url} alt="Random Beer" />
            <h1>{randomBeer.name}</h1>
            <h2>{randomBeer.tagline}</h2>
            <p>First Brewed: {randomBeer.first_brewed}</p>
            <p>Attenuation Level: {randomBeer.attenuation_level}</p>
            <p>Description: {randomBeer.description}</p>
            <p>Contributed By: {randomBeer.contributed_by}</p>
        </div>
    );
}

export default RandomBeerPage;
