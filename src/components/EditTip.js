import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import Cookies from 'universal-cookie';
import { baseUrl } from '../BaseUrl.js';

class EditTip extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tip: {},
            form: {
                title: {
                    valid: true,
                    touched: false
                },
                summary: {
                    valid: true,
                    touched: false
                },
                language: {
                    valid: true,
                    touched: false
                },
                mdFile: {
                    valid: true,
                    touched: false
                },
                technology: {
                    valid: true,
                    touched: false
                },
            },
            redirect: false
        }

        // Make functions available for React:
        this.handleSave = this.handleSave.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    componentDidMount() {
        const pTipId = this.props.tipId;

        if (pTipId === "0") {
            return;
        }

        fetch(baseUrl + 'tips/' + pTipId)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((tip) => {
            console.log(tip);
            this.setState({
                tip: tip
            });
        })
        .catch(err => console.log("Error loading tip ID ", pTipId));
    }

    canSubmit() {
        let can = true;

        //It's a new TIP 
        if (!this.state.tip._id) {
            if (!this.state.tip.title ||
                !this.state.tip.summary ||
                !this.state.tip.language ||
                !this.state.tip.mdFile ||
                !this.state.tip.technology ) {
                can = false;
            }
        }
        // FOR A NEW TIP OR UPDATING AN EXISTING:
        if ((this.state.form.title.touched && !this.state.form.title.valid)
            || (this.state.form.summary.touched && !this.state.form.summary.valid)
            || (this.state.form.language.touched && !this.state.form.language.valid)
            || (this.state.form.mdFile.touched && !this.state.form.mdFile.valid)
            || (this.state.form.technology.touched && !this.state.form.technology.valid)) {

            can = false;
        }
 
        return can;
    }

    handleSave(event) {

        if (!this.canSubmit()) {
            alert("Please correct errors before saving.");
            return;
        }

        const cookies = new Cookies();

        let url = baseUrl + 'tips/';
        let method = "POST";
        let message = "create";

        if (this.state.tip._id) {
            // tip already exists.
            // CALL PUT instead of POST
            url += this.state.tip._id;
            method = "PUT";
            message = "update";
        }

        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.get("codingtips")
            },
            method: method,
            body: JSON.stringify(this.state.tip)
        })
        .then((res) => {
            if (!res.ok) {
                if (res.status === 401) {
                    alert('Unauthorized. Please login.');
                }
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .then((tip) => {
            this.setState({
                tip: {
                    ...this.state.tip,
                    _id: tip._id
                }
            });
            alert("Tip " + message + "d successfully!"); 
            this.setState({
                redirect: true
            })
        })
        .catch((err) => alert("Could not " + message + " tip. "));
    }


    handleBlur(event) {
        const fieldName = event.target.name;

        this.setState({
            form: {
                ...this.state.form,
                [fieldName]: {
                    ...this.state.form[fieldName],
                    touched: true
                }
            }
        });
    }

    handleInputChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
  
        this.setState({
            tip: {
                ...this.state.tip,
                [fieldName]: fieldValue
            },
            form: {
                ...this.state.form,
                [fieldName]: {
                    ...this.state.form[fieldName],
                    touched: true,
                    valid: this.validateField(fieldName, fieldValue)
                }
            }
        });
    }

    validateField (fieldName, fieldValue) {
        if (fieldName === "title" 
            || fieldName === "summary"
            || fieldName === "mdFile"
            ) {

            // returns TRUE if field is not empty (valid situation) 
            return fieldValue !== "";
        }
        if (fieldName === "language") {
            return ['en', 'es', 'pt'].includes(fieldValue);
        }
        if (fieldName === "technology") {
            return ['js', 'html', 'css', 'bootstrap'].includes(fieldValue);
        }
        return true;
    }

    render() {

        if (this.state.redirect) {
            const redirect = '/details/' + this.state.tip._id;
            return (
                <div>
                    <Redirect to={redirect} />
                </div>
            );
        }


        return (
            <div className="container">
                <Form onSubmit={this.handleSave}>
                    <br/>
                    <h2>Submit Tip</h2>
                    <FormGroup>
                        <Label htmlFor="title">Title</Label>
                        <Input type="text" id="title" name="title"
                            value={this.state.tip.title || ''}
                            invalid={this.state.form.title.touched && !this.state.form.title.valid}
                            onChange={this.handleInputChange}
                            onBlur={this.handleBlur} />
                        <FormFeedback>
                            Title is required
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="summary">Summary</Label>
                        <Input type="text" id="summary" name="summary"
                            value={this.state.tip.summary || ''}
                            invalid={this.state.form.summary.touched && !this.state.form.summary.valid}
                            onChange={this.handleInputChange}
                            onBlur={this.handleBlur} />
                        <FormFeedback>
                            Summary is required
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="language">Language</Label>
                        <Input type="select" id="language" name="language" 
                            value={this.state.tip.language  || ''}
                            onChange={this.handleInputChange}
                            onBlur={this.handleBlur}>
                                <option>(select)</option>
                                <option value="en">English</option>
                                <option value="es">Spanish</option>
                                <option value="pt">Portuguese</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="mdFile">Slug</Label>
                        <Input type="text" id="mdFile" name="mdFile"
                            value={this.state.tip.mdFile || ''}
                            onChange={this.handleInputChange}
                            onBlur={this.handleBlur} />
                        <FormFeedback>
                            Slug is required
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup> 
                        <Label htmlFor="technology">Technology</Label>
                        <Input type="select" id="technology" name="technology" 
                            value={this.state.tip.technology  || ''}
                            onChange={this.handleInputChange}
                            onBlur={this.handleBlur}>
                                <option>(select)</option>
                                <option value="js">Javascript</option>
                                <option value="html">HTML</option>
                                <option value="css">CSS</option>
                                <option value="bootstrap">Bootstrap</option>
                        </Input>
                    </FormGroup>
                    <FormGroup> 
                        <Button color="primary" onClick={this.handleSave}>SAVE</Button>{' '}
                    </FormGroup>
                </Form>
            </div>            
        );

    }

}

export default EditTip;