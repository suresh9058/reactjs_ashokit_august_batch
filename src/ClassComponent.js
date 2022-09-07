import React from "react";

class ClassComponent extends React.Component {
    render() {
        return (
            <h1>Class Component</h1>
        )
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    componentDidMount() {
        console.log(" componentDidMount");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
}

export default ClassComponent;