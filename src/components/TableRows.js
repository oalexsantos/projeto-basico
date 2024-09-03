import React from "react";

class TableRows extends React.Component {
    render () {
        // const name = this.props.name;
        // const email = this.props.email;
        // const celular = this.props.numPhone;
        const {name, email, numPhone, index, deleteLead } = this.props;
        return ( 
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{numPhone}</td>
                <td>
                    <button onClick={() => {deleteLead(index)}}>Excluir</button>
                </td>
            </tr>
        );
    }
}

export default TableRows;