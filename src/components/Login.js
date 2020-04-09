import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../BaseUrl.js';
import Cookies from 'universal-cookie';
import '../css/style.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            facebook: {},
            modal: false,
            loginForm: {
                username: {
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
        
        this.handleLogin = this.handleLogin.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm() {
        this.setState({ modal: !this.state.modal });
    }

    handleLogin(event) {
        if (this.state.loginForm.username.value === '' || 
                this.state.loginForm.password.value === '' ||
                !this.state.loginForm.username.valid) {
            alert("please provide email and password");
            event.preventDefault();
            return;
        }

        // CALL POST
        this.login(this.state.loginForm.username.value, this.state.loginForm.password.value);
        event.preventDefault();
    }

    login(username, password) {
        fetch(baseUrl + 'users/login', {
            headers: {
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(
                {
                    username: username, 
                    password: password
                })
        })
        .then(res => res.json())
        .then((data) => {
            if (data.success) {
                const cookies = new Cookies();
                cookies.set('codingtips', data.token, { path: '/' });
                this.toggleForm();
            }
        })
        .catch((err) => {
            alert("Invalid email or password. Please try again.");
        });
    }    

    handleBlur(event) {
        const fieldName = event.target.name;

        this.setState({
            loginForm: {
                ...this.state.loginForm,
                [fieldName]: {
                    ...this.state.loginForm[fieldName],
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
        if (fieldName === "password") {
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
                        <h1 className="display-3">Welcome back!</h1>
                        <p className="lead">
                            Please, identify yourself and come in.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">E-mail</Label>
                            <Input type="text" id="username" name="username"
                                placeholder="E-mail"
                                invalid={this.state.loginForm.username.touched && !this.state.loginForm.username.valid}
                                onChange={this.handleInputChange('loginForm')}
                                onBlur={this.handleBlur} />
                            <FormFeedback>
                                E-mail is required
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                                invalid={this.state.loginForm.password.touched && !this.state.loginForm.password.valid}
                                onChange={this.handleInputChange('loginForm')}
                                onBlur={this.handleBlur} />
                            <FormFeedback>
                                Password is required
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" onClick={this.handleLogin}>LOG IN</Button>{' '}
                        </FormGroup>
                    </Form>
                    <Modal isOpen={this.state.modal} >
                        <ModalHeader>LOG IN</ModalHeader>
                        <ModalBody>
                            <div className="container">
                                Successfully logged in!
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

export default Login;