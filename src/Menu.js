import React, { Component } from "react";

class Menu extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div>
                {this.props.options.map(opcion => <div>{opcion}</div>)}
            </div>
        )
    }
}

export default Menu;