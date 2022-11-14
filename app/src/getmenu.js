import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function GetMenu() {
    const [name , setName] = useState()
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('https://8000-lynz951-backendbistro-k9zrpz51flw.ws-us75.gitpod.io/menuitems/')
            .then((response) => {
                setData(response.data);
             });
    }, []);
        console.log(data)
        if(data.length === 0) {
            return null
        }

        const menu = (
            <div className='menu'>
                <h2>MENU</h2>
                <h3>Appetizers</h3>
                <ul>
                    {data.filter(item => item.category.category === 'Appetizer').map(item => 
                        <li key={item.id}>
                            <h4>{item.title} </h4> {item.description} {"    $"}{item.price}
                        </li>
                     )}
                </ul>
            
                <h3>Entrees</h3>
                <ul>
                    {data.filter(item => item.category.category === 'Entree').map(item => 
                        <li key={item.id}>
                            <h4>{item.title} </h4> {item.description} {"    $"}{item.price}
                        </li>
                     )}
                </ul>

                <h3>Sides</h3>
                <ul>
                    {data.filter(item => item.category.category === 'Side').map(item => 
                        <li key={item.id}>
                            <h4>{item.title} </h4> {item.description} {"    $"}{item.price}
                        </li>
                     )}
                </ul>

                <h3>Desserts</h3>
                <ul>
                    {data.filter(item => item.category.category === 'Dessert').map(item => 
                        <li key={item.id}>
                            <h4>{item.title} </h4> {item.description} {"    $"}{item.price}
                        </li>
                     )}
                </ul>
            </div>
        );
          
        function BtnClick() {
            setName("Today's Special: Vegetable soup and fresh bread for only $5!!")
        }
        
            return (
          <div className='middle'>
            <h1>{name}</h1>
            {menu}
            <button onClick={BtnClick}>Get Today's Specials</button>
          </div>
        )
}
    export default GetMenu


 

