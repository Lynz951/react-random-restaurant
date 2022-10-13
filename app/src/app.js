
import { useState } from "react"
import Header from "./header.js"
import Footer from "./footer.js"
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
    const[ page, setPage ] = useState('home')

    return (
        <>
        {page == 'home' && <Header />}
        {page == 'not home' && <h1>NOT HOME</h1>}
        {page == 'third home' && <h1>3rd Home</h1>}
        <button onClick={() => setPage('not home')}>Click Me</button>
        </>
    )
}
export default App

