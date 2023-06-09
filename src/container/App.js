import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import Cardlist from "../components/Cardlist";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

const App = () => {
    const [felines, setFelines] = useState([]);
    const [search, setSearch] = useState("");

    const fetchData = async () => {
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const data = await res.json();
            setFelines(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const onSearchRender = (event) => {
        setSearch(event.target.value);
    };

    const filteredResults = felines.filter((feline) => {
        return feline.name.toLowerCase().includes(search.toLowerCase());
    });

    return !felines.length ? (
        <h1>Loading</h1>
    ) : (
        <div className="tc">
            <h1 className="f1">Feline Friends</h1>
            <SearchBox searchRender={onSearchRender} />
            <Scroll>
                <ErrorBoundry>
                    <Cardlist felines={filteredResults} />
                </ErrorBoundry>
            </Scroll>
        </div>
    );
};

export default App;
