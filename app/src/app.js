import axios from "axios";
import React from "react";
import { useState, useEffect } from "react"
import Header from "./header.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import Meal from './getmenu.js'
import Footer from './footer.js';
import Buttons from './button.js'


function App() {
    const[ page, setPage ] = useState('Home');
    const[ data, setData ] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await axios.get(
                "https://astute-baton-362318.ue.r.appspot.com/api/json/"
            );
            setData(response.data);
            }
            getData();   
    }, []);

    const mealOptions = [
        "Appetizer",
        "Dinner",
        "Dessert"
    ];

    function handleClick(text) {
        setPage(text); 
    }

    if (data.length === 0) 
        return null;
    

    return (
        <>
            <Header text="Home" handleClick={handleClick} />
            <div className="container">
                {/* <div className="row text-center">
                    {mealOptions.map(mealOption) => (
                        <Buttons text={mealOption} handleClick={handleClick} />
                    ))}
                </div> */}
                <div className="row justify-content-center">
                    <Meal data={data} page={page} />
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
}
export default App

