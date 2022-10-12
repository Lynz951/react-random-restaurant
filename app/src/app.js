
// let state = {}
import { useState } from "react"


const axios = require('axios');

function Home() {
    <div>
    return <h1>Home w/ State</h1>
    </div>
}

function App() {
    const[ page, setPage ] = useState('home')
    return (
        <>
        {page == 'home' && <Home />}
        {page == 'not home' && <h1>NOT HOME</h1>}
        {page == 'third home' && <h1>3rd Home</h1>}
        <button onClick={() => setPage('not home')}>Click Me</button>
        </>
    )
}

export default App

export async function getMenu() {

    try{
        const response = await axios.get('/api/usershttps://astute-baton-362318.ue.r.appspot.com/api/json/ ');
        console.log('response  ', response)
        return response.data;
    }catch(error) {
        return [];
    }
    
}