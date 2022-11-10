
import { useState } from "react"
import Header from "./header.js"
import Footer from "./footer.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import GetMenu from "./getmenu.js"



function App() {
    const[ page, setPage ] = useState('home')

    return (
        <>
        <Header />
        {(page === 'home') && <GetMenu />}
        {(page === 'not home') && <Header />}
        <button onClick={() => setPage('not home')}>Click Me</button>
        <Footer />
        </>
    )
}
export default App

