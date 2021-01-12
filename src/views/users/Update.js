import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row
} from 'reactstrap';
import axios from "axios";

class Update extends Component {

    constructor() {
        super()
        this.state =
        {
          name: '',
          lastname: '',
          email: '',
          
          
    
        }
        this.getOneCondidat()
      }

    
    componentDidMount() {
        this.getOneCondidat()
    }
    getOneCondidat() {
        console.log("aaaaaaaaa", localStorage.getItem("idQuizz"))
        const element = fetch("http://127.0.0.1:4000/users/oneUser/" + localStorage.getItem('idQuizz'))
        .then(response => response.json()).then(res => {
            console.log('nomm',res)

            this.setState({ name: res.data.name, lastname: res.data.lastname,email:res.data.email})
        })
    }

    envoyer(event) {
        event.preventDefault()
        
        ////console.log("naweeeeeeeeeeeeel",localStorage.getItem('idQuizz'))
        
            axios.put("http://127.0.0.1:4000/users/updateuser/" + localStorage.getItem('idQuizz'),
                { name: this.state.name,
                     lastname: this.state.lastname,email:this.state.email })
                .then(res => {
                    console.log("dataaaaaaaaaa", res.data);
                    window.location.href = "#/base/users"
                })
        
    }
    


    render() {
        return (
            <div className="animated fadeIn"
                style={
                    { "padding-left": "20%" }
                }>

                <Row>

                    <Col md="6" md="9">

                        <Card>
                            <CardHeader style={
                                { background: 'lightblue' }
                            }>
                                <strong>Update user</strong>
                            </CardHeader>
                            <CardBody>
                                <Form action="" method="post">

                                    <FormGroup>
                                        <Label htmlFor="nf-description">FirstName</Label>
                                        <Input type="text" id="nf-name" name="nf-name" y autoComplete=""
                                            defaultValue={
                                                this.state.name
                                            }
                                            onChange={
                                                evt => this.setState({ name: evt.target.value })
                                            } /> <div style={{ fontSize: 13, color: "red" }}>
                                            
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="nf-description">LastName</Label>
                                        <Input type="text" id="nf-name" name="nf-name" y autoComplete=""
                                            defaultValue={
                                                this.state.lastname
                                            }
                                            onChange={
                                                evt => this.setState({ lastname: evt.target.value })
                                            } />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="nf-description">email</Label>
                                        <Input type="text" id="nf-name" name="nf-name" y autoComplete=""
                                            defaultValue={
                                                this.state.email
                                            }
                                            onChange={
                                                evt => this.setState({ email: evt.target.value })
                                            } />
                                    </FormGroup>
                                    
                                   
                                    
                                   


                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" size="sm" color="primary"
                                    onClick={
                                        (event) => this.envoyer(event)
                                    }>
                                    <i className="fa fa-dot-circle-o"></i>
                                    update</Button>

                                {/*    <Button type="reset" size="sm" color="danger"   onClick={this.reset.bind(this)} >
                    <i className="fa fa-ban"></i> Supprimer</Button> */} </CardFooter>
                        </Card>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Update;