import ColorCard from "./ColorCard";

const ColorValues = [
    {
        title: "JavaScript",
        color: "yellow"
    },
    {
        title: "Reactjs",
        color: "orange"
    },
    {
        title: "html",
        color: "green"
    },
    {
        title: "css",
        color: "black"
    },

    {
        title: "nodejs",
        color: "red"
    },
];

function ColorContainer() {
    return (
        ColorValues.map((color)=> <ColorCard title={color.title} color={color.color}/>)
    )
}

export default ColorContainer;