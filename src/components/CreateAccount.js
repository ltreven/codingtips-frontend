import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../BaseUrl.js';

class CreateAccount extends Component {

    constructor(props) {
        super(props);

        this.state = {
            facebook: {},
            modal: false,
            signupForm: {
                username: {
                    value: '',
                    valid: true,
                    touched: false
                },
                fullName: {
                    value: '',
                    valid: true,
                    touched: false
                },
                password: {
                    value: '',
                    valid: true,
                    touched: false
                }
            }
        }
        
        this.handleSignup = this.handleSignup.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm() {
        this.setState({ modal: !this.state.modal });
    }

    handleSignup(event) {
        if (this.state.signupForm.username.value === '' || 
                this.state.signupForm.password.value === '' ||
                this.state.signupForm.fullName.value === '' ||
                !this.state.signupForm.username.valid) {
            alert("please provide email, password and full name");
            event.preventDefault();
            return;
        }

        // CALL POST
        fetch(baseUrl + 'users/signup', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify(
                {
                    fullName: this.state.signupForm.fullName.value,
                    username: this.state.signupForm.username.value, 
                    password: this.state.signupForm.password.value
                })
        })
        .then(res => res.json())
        .then((data) => {
            this.toggleForm();
        })
        .catch((err) => {
            alert("Error creating user");
        });

        event.preventDefault();
    }

    handleBlur(event) {
        const fieldName = event.target.name;

        this.setState({
            signupForm: {
                ...this.state.signupForm,
                [fieldName]: {
                    ...this.state.signupForm[fieldName],
                    touched: true
                }
            }
        });
    }

    handleInputChange = (formName) => (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
  
        this.setState({
            [formName]: {
                ...this.state[formName],
                [fieldName]: {
                    ...this.state[formName][fieldName],
                    touched: true,
                    value: fieldValue,
                    valid: this.validateField(fieldName, fieldValue)
                }
            }
        });
    }

    validateField (fieldName, fieldValue) {
        if (fieldName === "password"
            || fieldName === "fullName") {
            // returns true if !== "" (valid situation) 
            return fieldValue !== "";
        }
        if (fieldName === "username") {
            return fieldValue !== "" && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(fieldValue);
        }

        return true;
    }

    render () {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3">Sign up</h1>
                        <p className="lead">
                            Create your Account and start collaborating.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <Form onSubmit={this.handleSignup}>
                        <FormGroup>
                            <Label htmlFor="username">E-mail</Label>
                            <Input type="text" id="username" name="username"
                                placeholder="E-mail"
                                invalid={this.state.signupForm.username.touched && !this.state.signupForm.username.valid}
                                onChange={this.handleInputChange('signupForm')}
                                onBlur={this.handleBlur} />
                            <FormFeedback>
                                E-mail is required
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input type="text" id="fullName" name="fullName"
                                invalid={this.state.signupForm.fullName.touched && !this.state.signupForm.fullName.valid}
                                onChange={this.handleInputChange('signupForm')}
                                onBlur={this.handleBlur} />
                            <FormFeedback>
                                Full Name is required
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                                invalid={this.state.signupForm.password.touched && !this.state.signupForm.password.valid}
                                onChange={this.handleInputChange('signupForm')}
                                onBlur={this.handleBlur} />
                            <FormFeedback>
                                Password is required
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" onClick={this.handleSignup}>CREATE ACCOUNT</Button>{' '}
                        </FormGroup>
                    </Form>
                    <Modal isOpen={this.state.modal} >
                        <ModalHeader>SIGN UP</ModalHeader>
                        <ModalBody>
                            <div className="container">
                                User created successfully! 
                                <br/><br/>
                                Please check your e-mail to finish the signup process.
                                <br/><br/>
                                <hr className="featurette-divider" />
                                <NavLink className="btn btn-primary" to="/home">
                                    Back to home
                                </NavLink>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );    
    }
}

export default CreateAccount;