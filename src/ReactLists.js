function ReactLists(props) { // {movies: [{},{},{}], name, title}
    return (
        <ul>
            {props.movies.map((data)=>
                <li key={data.id}>
                    {data.name}
                </li>
            )
            }
        </ul>
    )
}

export default ReactLists;