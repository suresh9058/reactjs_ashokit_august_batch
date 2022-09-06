function ReactLists() {
    const Movies = [
        {id: 123, name: "movie1"},
        {id: 456, name: "movie2"},
        {id: 789, name: "movie3"},
    ];

    return (
        <ul>
            {Movies.map((data)=>
                <li key={data.id}>
                    {data.name}
                </li>
            )
            }
        </ul>
    )
}

export default ReactLists;