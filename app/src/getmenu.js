import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function GetMenu() {
    const [page, setPage] = useState('home')
    const [name , setName] = useState()
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('https://8000-lynz951-backendbistro-k9zrpz51flw.ws-us75.gitpod.io/backend_bistro/')
            .then((response) => {
                setData(response.data);
             });
    }, []);

        if(data.length === 0) {
            return null
        }
  
        console.log(data);

        const menu = (
            <div className='menu'>
                <h2>MENU</h2>
                <h3>Appetizers</h3>
                <ul>
                    {data.filter(item => item.category.title === 'Appetizer').map(item => 
                        <li key={item.id}>
                            <h4>{item.title} </h4> {item.description} {"    $"}{item.price}
                        </li>
                     )}
                </ul>
            
                <h3>Entrees</h3>
                <ul>
                    {data.filter(item => item.category.title === 'Entree').map(item => 
                        <li key={item.id}>
                            <h4>{item.title} </h4> {item.description} {"    $"}{item.price}
                        </li>
                     )}
                </ul>

                <h3>Sides</h3>
                <ul>
                    {data.filter(item => item.category.title === 'Side').map(item => 
                        <li key={item.id}>
                            <h4>{item.title} </h4> {item.description} {"    $"}{item.price}
                        </li>
                     )}
                </ul>

                <h3>Desserts</h3>
                <ul>
                    {data.filter(item => item.category.title === 'Dessert').map(item => 
                        <li key={item.id}>
                            <h4>{item.title} </h4> {item.description} {"    $"}{item.price}
                        </li>
                     )}
                </ul>
            </div>
        );

          
        function BtnClick() {
            setName(data[10].category.title)   
        }
        console.log(data[0])
        
        if (page === 'home') {
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


 

