import React from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';
import { useEffect, useState } from 'react';



function GetMenu() {
    const [page, setPage] = useState('home')
    const [name , setName] = useState()
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
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

          
        function BtnClick() {
            setName(data[10].category.title)   
        }
        
        if (page == 'home') {
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


 

