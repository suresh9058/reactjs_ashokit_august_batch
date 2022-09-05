function EventHandlingExample() {
    // event handler
    const buttonClicked = ()=>{
        console.log("button clicked");
    }

    return (
        <button onClick={buttonClicked}>
	        Button Text
        </button>
    )
}

export default EventHandlingExample;