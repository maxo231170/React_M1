import React, { Component } from "react";
import Menu from "./Menu";

class App extends Component{
    render() {
        const opciones = ["login", "registro", "home"];
        return (
            <div>
                <div>
                    dasda
                    <Menu options={opciones} title="Home" />
                </div>
            </div>
        )
    }
}

export default App;