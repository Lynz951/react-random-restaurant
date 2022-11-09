
import { useState } from "react"
import Header from "./header.js"
import Footer from "./footer.js"
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
    const[ page, setPage ] = useState('home')

    return (
        <>
        {(page === 'home') && <Header />}
        {(page === 'not home') && <Header />}
        <button onClick={() => setPage('not home')}>Click Me</button>
        <Footer />
        </>
    )
}
export default App

