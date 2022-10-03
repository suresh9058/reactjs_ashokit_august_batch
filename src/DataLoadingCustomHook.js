import useFetch from "./UseFetch";

function DataLoadingCustomHook() {
    const data = useFetch("https://jsonplaceholder.typicode.com/posts");

    return (
        <>
            <ul>
                {data.map(item=>(
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    )
}

export default DataLoadingCustomHook;