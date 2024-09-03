import "./Main.css"
import React from "react";
import Forms from "./Forms";
import TableLeads from "../TableLeads";

class Main extends React.Component {
    constructor(props) {
        super(props);

        let leads = props.leads;

        this.state = {
            leads
        }
    }

    onHandleSubmit = (lead) => {
        this.setState ({
            leads: [...this.state.leads, lead]
        });
    }

    onHandleDeleteLead = (index) => {
        const { leads } = this.state;

        this.setState({
            leads: leads.filter((lead, i) => {
                return i !== index;
            }),
        })

    }


    render() {
        return (
            <main>
                <Forms onHandleSubmit={this.onHandleSubmit}/>
                <br/>
                <TableLeads leads={this.state.leads} 
                onDeleteLead={this.onHandleDeleteLead} />
            </main>
        );
    }
}

export default Main;