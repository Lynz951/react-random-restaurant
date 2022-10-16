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
        
        console.log(data)
        console.log(data[28].id)
        function BtnClick() {
            setName(data[0].category.title)
            
        }
        if (page == 'home') {
            return (
          <div className='middle'>
            <h1>{name}</h1>
            <button onClick={BtnClick}>Get Full Menu</button>
          </div>
        )
    }
}
    export default GetMenu


 

