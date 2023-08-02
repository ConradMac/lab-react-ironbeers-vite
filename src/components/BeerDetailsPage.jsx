import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { s } from "vitest/dist/types-e3c9754d";
import axios from "axios";
import { Link } from "react-router-dom";

function BeerDetailsPage() {
    let { beerId } = useParams();

    const [beer, setBeer] = useState({});

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response) => {
                console.log(response.data);
                setBeer(response.data);
                console.log(beer);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Link to="/beers">Back to all Beers</Link>
            <img src={beer.image_url} alt="beer" />
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <p>First brewed :{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    );
}

export default BeerDetailsPage;
