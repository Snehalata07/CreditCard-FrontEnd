import axios from "axios";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Accounts extends React.Component {
    state ={
        accounts: [],
    };
    
    componentDidMount(){
        console.log("componentDidMount")
        axios
        .get("http://localhost:9090/accounts/getAllAccounts")
        .then((res) => {
            console.log(res);
            this.setState({accounts: res.data});
        })
        .catch((err) => console.log(err));
    }
   
    
       handleDelete = (accountNumber) => {
        //axios.delete("http://localhost:9090/accounts/" + accountNumber);
        axios
          .delete(`http://localhost:9090/accounts/deleteAccount/${accountNumber}`)
          .then((res) => {
            console.log(res);
            // Update front end parallely
            const accounts = this.state.accounts.filter((s) => s.accountNumber !== accountNumber );
            this.setState({ accounts: accounts });
            alert( accountNumber+" "+ res.data + "  succussfully!");
          })
          .catch((err) => console.log(err));
      };

    render() {
        return (
          <div className ="w-75 mx-auto">
              <Link to='/addaccounts' className="btn btn-info float-end">Add</Link>
              <table className="table">
                <thead>
                    <tr>
                        <th>account_number</th>
                        <th>balance</th>
                        <th>account_name</th>
                        <th>account_type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.accounts.map((s)=>(
                        <tr>
                        <td>{s.accountNumber}</td>
                        <td>{s.accountBalance}</td>
                        <td>{s.accountName}</td>
                        <td>{s.accountType}</td>
                        <td>
                            <Link to={`accounts/update/${s.accountNumber}`} className="btn btn-primary">Update</Link>
                            <button className="btn btn-danger"
                            onClick={() => this.handleDelete(s.accountNumber)}
                            >Delete</button>
                        </td>
                        
                    </tr>
                    ))}
                    
                </tbody>
            </table>

        </div>
        );
    }
    
}
  
    
 export default Accounts;
