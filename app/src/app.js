
import { useState } from "react"
import Header from "./header.js"
import Footer from "./footer.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import GetMenu from "./getmenu.js"
import VeganMenu from "./getvegan.js"



function App() {
    const[ page, setPage ] = useState('home')

    return (
        <>
        <Header />
        {(page === 'home') && <GetMenu />}
        {(page === 'nothome') && <VeganMenu />}
        <button onClick={() => setPage('nothome')}>Click for Vegan Only</button>
        <button onClick={() => setPage('home')}>Get Full Menu</button>

        <Footer />
        </>
    )
}
export default App

