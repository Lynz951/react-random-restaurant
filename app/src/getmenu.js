import React from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';
import { useEffect, useState } from 'react';


        const menu = (
            <div className='menu'>
                <h2>MENU</h2>
                <h3>Appetizers</h3>
                <ul>
                    {data.filter(item => [17, 32, 45, 83, 66, 80].includes(item.id)).map(item => 
                        <li key={item.id}>
                        {item.title}{"    $"}{item.price}
                        </li>
                     )}
                </ul>

                <h3>Entrees</h3>
                <ul>
                    {data.filter(item => [21, 28, 68, 86, 89, 64, 54].includes(item.id)).map(item => 
                        <li key={item.id}>
                        {item.title}{"    $"}{item.price}
                        </li>
                     )}
                </ul>

                <h3>Desserts</h3>
                <ul>
                    {data.filter(item => [5, 22, 29, 85, 91].includes(item.id)).map(item => 
                        <li key={item.id}>
                        {item.title}{"    $"}{item.price}
                        </li>
                     )}
                </ul>
            </div>
        );

        if (page == 'Home') {
            return (
                <div className='middle'>
                <h1>{name}</h1>
                 {menu}
                 <button onClick={BtnClick}>Get Full Menu</button>
                </div>
                    )
            }
}
    export default GetMenu


 

