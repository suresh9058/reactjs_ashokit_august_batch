function NumbersList(props) {
    const numbers = props.numbers; //[1,2,3,4,5]
    const listItems = numbers.map((item,index)=> 
        <li key={index}>
            {item}
        </li>
    );

    return (
        <ul>
            {listItems}
        </ul>
    )

}

export default NumbersList;