import React, {useState, useEffect} from 'react';
import axios from 'axios';

function GetMenu() {
    const [page, setPage] = useState('home')
    const [data, setData] = useState([])
    const [name, setName] = useState()

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
    }
    export default GetMenu


 

