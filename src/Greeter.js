// function Greeter({name,age=25,showNav}) { // const {name,age,showNav} = props;
function Greeter(props) {
//    console.log(props); // {name: "reactjs"}// undefined, null, true, false
    props.name = "js";
return (
        <>
            <p>this is a Greeter component {props.name}</p>
            <p>this is a Greeter component {props.age+10}</p>
            <p>this is a Greeter component {props.showNav}</p>
            {/* <p>this is a Greeter component {name}</p>
            <p>this is a Greeter component {age+10}</p>
            <p>this is a Greeter component {showNav}</p> */}
        </>
    )
}

export default Greeter;