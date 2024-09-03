import "./TableLeads.css";
import React from "react";
import TableRows from "./components/TableRows";

class TableLeads extends React.Component {
    render() {
        const onDeleteLead = this.props.onDeleteLead;

        const rows = this.props.leads.map((lead, index) => {
            return (
                <TableRows
                    name={lead.name}
                    email={lead.email}
                    numPhone={lead.numPhone}
                    index={index}
                    deleteLead={onDeleteLead} 
                    key={index} />
            );
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Celular</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default TableLeads;