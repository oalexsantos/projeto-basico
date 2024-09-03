import "./Header.css"
import React from "react";
import logo from "../assets/logo.svg";

class Header extends React.Component {
    render () {
        return (
            <header>
                <img src={logo} alt="Logo do React" width={200} />
                <h1>Lista de Leads</h1>
            </header>
        );
    }
}

export default Header;