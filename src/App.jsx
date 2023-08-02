import { Routes } from "react-router-dom";
// import "./App.css";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import RandomBeerPage from "./components/RandomBeerPage";
import BeerDetailsPage from "./components/BeerDetailsPage";
import AllBeersPage from "./components/AllBeersPage";
import AddBeerPage from "./components/AddBeerPage";
import HomePage from "./components/HomePage";

function App() {
    return (
        <div className="App">
            <h1>LAB | React IronBeers</h1>
            <Navbar />
            {/* <AllBeersPage /> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/beers" element={<AllBeersPage />} />
                <Route path="/random-beer" element={<RandomBeerPage />} />
                <Route path="/new-beer" element={<AddBeerPage />} />

                <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
            </Routes>
        </div>
    );
}

export default App;
