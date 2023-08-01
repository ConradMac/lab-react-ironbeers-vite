import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
    // const [beer, setBeer] = useState({
    //     name: "",
    //     tagline: "",
    //     contributed_by: "",
    //     image: "",
    // });

    const [beers, setBeer] = useState([]);

    /**
Le useEffect ici est utilisé pour effectuer une requete "get" à l'url que j'ai de ironHack a l'aide de Axios pour recuperer les bieres de l'array. */

    useEffect(() => {
        axios
            .get(`${API_URL}/beers`)
            .then((response) => {
                console.log(response.data);
                setBeer(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (!beers) {
        return <div className="loading">La bière peut attendre....</div>;
    }

    return (
        <div>
            <ul>
                <li>
                    {beers.map((beer) => {
                        return (
                            <div key={beer._id}>
                                <Link to={`/beers/${beer._id}`}>
                                    <img src={beer.image_url} alt={beer.name} />
                                </Link>
                                <h2>{beer.name}</h2>
                                <h3>{beer.tagline}</h3>
                                <p>{beer.contributed_by}</p>
                            </div>
                        );
                    })}
                </li>
            </ul>
        </div>
    );
}

export default AllBeersPage;
