
import { useState } from "react"
import Header from "./header.js"
import Footer from "./footer.js"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const [page, setPage] = useState('home')
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
            .then((response) => {
                setData(response.data);
             });
    }, []);

        const mealOptions = [
            "Appetizer",
            "Dinnner",
            "Dessert"
        ];

        function handleClick(text) {
            setPage(text);
        }

        if(data.length === 0) {
            return null

    return (
        <>
        {page == 'Home' && <Header />}
        {page == 'not home' && <h1>NOT HOME</h1>}
        {page == 'third home' && <h1>3rd Home</h1>}
        {/* <button onClick={() => setPage('not home')}>Click Me</button> */}
        </>
    )
}
export default App

