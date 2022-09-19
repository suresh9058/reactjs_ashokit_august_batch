import {Routes, Route, Link, useNavigate} from 'react-router-dom';

function Home() {
    return <h1>Home Component</h1>
}

function About() {
    return <h1>About Component</h1>
}

function ContactUS() {
    return <h1>ContactUS Component</h1>
}

function NotFound() {
    const navigate = useNavigate();
    return (
        <>
            <h1>NotFound Component</h1>
            <button onClick={()=>navigate('/')}>Go Back to Home</button>
        </> 
    )  
}

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link><br></br>
            <Link to="/about">About</Link><br></br>
            <Link to="/contact">Contact</Link><br></br>
        </nav>
    )
}

function ReactRouterExample() {
    return (
        <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUS />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </>
    )
}

export default ReactRouterExample;