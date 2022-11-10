import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GetMenu from './getmenu';

function VeganMenu() {
    const [page, setPage] = useState('nothome')
    const [name , setName] = useState()
    const [data, setData] = useState([])
  {
    useEffect(() => {
        axios.get('https://8000-lynz951-backendbistro-k9zrpz51flw.ws-us75.gitpod.io/backend_bistro/1/')
            .then((response) => {
                setData(response.data);
             });
    }, []);
    }
        console.log(data)
        if(data.length === 0) {
            return null
        }

        const veganmenu = (
            <div className='menu'>
                <h2>VEGAN MENU</h2>
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

        
            return (
          <div className='middle'>
            {veganmenu}
            <button onClick={GetMenu}>Get Full Menu</button>
          </div>
        )
    
}
    export default VeganMenu