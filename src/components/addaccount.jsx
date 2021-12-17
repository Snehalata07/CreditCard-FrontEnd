import React, { Component } from 'react';
import axios from 'axios';
// import { Joi } from 'joi-browser';

class AddAccount extends React.Component {
    state = {
        account: {
            accountNumber: "",
            accountBalance: 0,
            accountName: "",
            accountType:"",
            
        },
        errors: {},
        errorMsg: "",
    };

    // schema = {
    //     // username: Joi.string()
    //     //     .pattern(new RegExp('^[a-zA-Z0-9]{3,}$'))
    //     //     .required(),
    //     mobileNumber: Joi.string()
    //         .pattern(new RegExp("^[7-9][0-9]{9}$"))
    //         .required(),
    //     email: Joi.string()
    //         .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    //         .pattern(new RegExp("^[a-zA-Z]{3,}@[a-zA-Z]{2,}.[a-zA-Z]{2,}&"))
    //         .required(),
    //     accountNo: Joi.number()
    //         .integer()
    //         .required(),
    //     pan: Joi.string()
    //         .pattern(new RegExp("^[A-Z]{5}[0-9]{4}[A-Z]{1}$"))
    //         .required(),
    // };

    //validate method
    // validate = () => {
    //     const errors = {};
    //     const result = Joi.validate(this.state.customer, this.schema, {
    //         abortEarly: false
    //     });

    //     console.log(result);

    //     if (result.error != null)
    //         for (let item of result.error.details) {
    //             errors[item.path[0]] = item.message
    //         }
    //     return Object.keys(errors).length === 0 ? null : errors;
    // };

    updateInput = (event) => {
        this.setState({
            account: {
                ...this.state.account,
                [event.target.name]: event.target.value,
            }
        });
        // console.log(this.state.account);
        // const account = { ...this.state.account };
        // account[event.target.name] = event.target.value;
        // this.setState({
        //     account: account
        // });
        // console.log(account);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Handle Submit");

        // //validate before sending request
        // this.setState({
        //     errors: this.validate()
        // });
        // console.log(this.state.errors);

        // if (this.state.errors)
        //     return;

        // sending request
        const dataUrl = `http://localhost:9090/accounts/addAccount`;
        axios
            .post(dataUrl, this.state.account)
            .then((response) => {
                console.log(response.data);
                alert(
                    "Added Account " +
                        this.state.account.accountName +
                        " successfully !!!"
                );
                this.props.history.push("/account");
            })
            .catch((error) => {
                this.setState({
                   
                    errorMsg: error.response.data.message,
                });
            });
    };
    
    render() {
        //object Destructuring
        const { account } = this.state;
        const { errors, errorMsg } = this.state;
        console.log(this.state.account);
        return (
            <section className="landing">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mx-auto">
                                <div className="card mt-3">
                                    <div className="card-header bg-warning text-black text-center">
                                        <h4 className="fw-bolder">
                                            Add Account
                                        </h4>
                                    </div>
                                    {errorMsg && (
                                        <div
                                            className="alert alert-danger"
                                            role="alert"
                                        >
                                            {errorMsg}
                                        </div>
                                    )}
                                    <form
                                        className="shadow p-3 mt-1 bg-warning rounded text-center"
                                        onSubmit={this.handleSubmit}
                                    >
                                        <div className="mb-2">
                                            <label
                                                htmlFor="accountNumber"
                                                className="form-label fw-bold text-black"
                                            >
                                               Account Number
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="Account_Number"
                                                id="accountNumber"
                                                name="accountNumber"
                                                value={account.accountNumber}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.accountNumber}</small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="Balance"
                                                className="form-label fw-bold text-black"
                                            >
                                               Balance
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                // placeholder="balance"
                                                id="Balance"
                                                name="accountBalance"
                                                value={account.accountBalance}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>
                                                    {errors.accountBalance}
                                                </small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="accountName"
                                                className="form-label fw-bold text-black"
                                            >
                                               Account Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="account_name"
                                                id="account_name"
                                                name="accountName"
                                                value={account.accountName}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.accountName}</small>
                                            )}
                                            </div>
                                            <label
                                                htmlFor="accountName"
                                                className="form-label fw-bold text-black"
                                            >
                                               Account Type
                                            </label>
                                            <select 
                                                name="accountType"
                                                value={account.accountType}
                                                onChange={this.updateInput}
                                                className="form-select text-center" 
                                             aria-label="Default select example">
                                             <option selected> Select Account Type</option>
                                             <option value="SAVINGS">SAVINGS</option>
                                             <option value="CURRENT">CURRENT</option>
                                             <option value="JOINT">JOINT</option>
                                             </select>
                                             <div className="d-grid gap-2 mt-2">
                                             <button
                                                type="submit"
                                                className="btn btn-success btn-md text-black fw-bold"
                                              >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default AddAccount;