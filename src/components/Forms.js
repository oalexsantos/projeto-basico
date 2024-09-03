import "./Forms.css"
import React from "react";
import Input from "../common-components/Input";
import { toHaveDisplayValue } from "@testing-library/jest-dom/matchers";

class Forms extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            numPhone: '',
        }
    }

    handleChange = (event) => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        this.props.onHandleSubmit(this.state);

        this.setState({
            name: '',
            email: '',
            numPhone: '',
        });

    }

    render() {
        const { name, email, numPhone } = this.state;

        return (
            <aside>
                <h2>Insira novos Leads</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <form>

                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input id="name" placeholder="Ex.: Fulano" value={name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input id="email" placeholder="Ex.: user@email.com" value={email} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="numPhone">Celular:</label>
                        <input id="numPhone" placeholder="Ex.: +55 11 9999-0000" value={numPhone} onChange={this.handleChange} />
                    </div>

                    <button onClick={this.handleSubmit}>Cadastrar</button>
                </form>
            </aside>
        );
    }
}

export default Forms;