import {useState, useEffect } from 'react';
import {Routes, Route, Link, useNavigate, useParams, Outlet} from 'react-router-dom';

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
            <Link to="/posts">Posts</Link><br></br>
        </nav>
    )
}

function Posts() {
    const [content, setContent] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setContent(json))
    },[]);

    return (
        <>
        <Outlet />
        <ul>
        {
            content.map((post)=>{
                return (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            {post.title} 
                        </Link>
                    </li>
                )
            })
        }
        </ul>
        </>
    )
}

function Post() {

    const [content, setContent] = useState({});
    const {id} = useParams();

    // When we don't want react component lifecycle to be triggered return null
    // if(props.error) {
    //     return null;
    // }
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setContent(json))
    },[id]);

    return (
        <>
            <p>{content.id}</p>
            <p>{content.body}</p>
        </>
    );
}


function ReactRouterExample() {
    return (
        <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUS />} />
            <Route path="/posts" element={<Posts />}>  
                <Route path=":id" element={<Post />} /> 
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
        </>
    )
}

export default ReactRouterExample;