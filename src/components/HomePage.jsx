import React from "react";
import { Link } from "react-router-dom";

import beersImage from "../assets/beers.png";
import randomBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";

function HomePage() {
    return (
        <div className="home-page">
            <h1>Welcome to IronBeers</h1>
            <div className="beer-links">
                <Link to="/beers">
                    <div className="link-item">
                        <img src={beersImage} alt="All Beers" />
                        <h2>All Beers</h2>
                        <p>
                            La societe AllBeer est une entreprise familiale, qui anime le monde de la boisson, et plus
                            particulièrement celui de la bière spéciale. Depuis près de dix années maintenant leur
                            culture de la zythologie est appréciée de celles et ceux qui les connaissent déjà.{" "}
                        </p>
                    </div>
                </Link>
                <Link to="/random-beer">
                    <div className="link-item">
                        <img src={randomBeerImage} alt="Random Beer" />
                        <h2>Random Beer</h2>
                        <p>
                            Leur structure est indépendante et sans affiliation, attachée aux relations humaines, ce qui
                            nous positionne comme une alternative aux pratiques et produits des autres entrepositaires,
                            de la grande distribution et l'industrie agro-alimentaire.{" "}
                        </p>
                    </div>
                </Link>
                <Link to="/new-beer">
                    <div className="link-item">
                        <img src={newBeerImage} alt="New Beer" />
                        <h2>New Beer</h2>
                        <p>
                            La cave showroom d'Elbeuf est un lieu de découvertes et de conseils, dans une ambiance
                            conviviale. Vous y découvrrez une selection de plus de 1500 references de qualité,
                            exclusives ou rares pour certaines. Que vous soyez un particulier, un revendeur, exploitant
                            d'un CHR, membre d'une association ou d'un CSE, venez nous rendre visite...{" "}
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
