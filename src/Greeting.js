function GuestGreeting() {
    return <h1>WElcome Guest</h1>
}

function UserGreeting() {
    return <h1>Welcome User</h1>
}

function Greeting(props) {
    // if(props.isLoggedIn) { //"false"
    //     return <UserGreeting />
    // } 
    // // else {
    //     return <GuestGreeting />
    // // }


    // return (
    //     props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
    // );

    return (
        props.isLoading && <p>Loading...</p>
    )
    // return <h1>Greeting component</h1>
}

export default Greeting;