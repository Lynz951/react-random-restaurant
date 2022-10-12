
import { useState } from "react"

// function Home() {
//     <div>
//     return <h1>Home w/ State</h1>
//     </div>
// }


function App() {
    const[ page, setPage ] = useState('home')
    return (
        <>
        {page == 'home' && <h1>Home</h1>}
        {page == 'not home' && <h1>NOT HOME</h1>}
        {page == 'third home' && <h1>3rd Home</h1>}
        <button onClick={() => setPage('not home')}>Click Me</button>
        </>
    )
}
export default App

