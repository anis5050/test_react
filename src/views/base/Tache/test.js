import React, { useState } from "react";
import TutorialService from "../service/TutorialService";

const AddHoo = () => {
  const initialTutorialState = {
    
    name: '',
    lastname:'',
    email:'',
    
   
    
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  
 

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  useEffect(() => {
    getOneCatal();
    
  }, []);
  
  const getOneCatal=() =>{
       
    const element = fetch("http://127.0.0.1:4000/users/oneUser/" + localStorage.getItem('id'))
    .then(response => response.json()).then(res => {
        console.log('nomm',res)

        setTutorial({ name: res.data.name,lastname:res.data.lastname,email:res.data.email})
    })
}
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
                        <strong>Update Catalog</strong>
                    </CardHeader>
                    <CardBody>
                        <Form >

                            <FormGroup>
                                <Label htmlFor="nf-description">name</Label>
                                <Input type="text" id="nf-name" name="nf-name" y autoComplete=""
                                    value={
                                        name
                                    }
                                    onChange={
                                        evt => this.setState({ name: evt.target.value })
                                    } /> <div style={{ fontSize: 13, color: "red" }}>
                                    
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="nf-description">description</Label>
                                <Input type="text" id="nf-name" name="nf-name" y autoComplete=""
                                    defaultValue={
                                        this.state.description
                                    }
                                    onChange={
                                        evt => this.setState({ description: evt.target.value })
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
                            updateCatal</Button>

                        {/*    <Button type="reset" size="sm" color="danger"   onClick={this.reset.bind(this)} >
            <i className="fa fa-ban"></i> Supprimer</Button> */} </CardFooter>
                </Card>
            </Col>
        </Row>

    </div>
);
 

  
};

export default AddHoo;
