import React, { useState, useEffect } from "react";
import TutorialService from "../service/TacheService";
import { Link } from "react-router-dom";
import axios from 'axios'
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import swal from 'sweetalert';


import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'



const Hoo =() => {
  const [tutorials, setTutorials] = useState([]);
  

  useEffect(() => { //pour remplacer ComponentDidMount
    retrieveTutorials();
    
  }, []);

  

  const retrieveTutorials = () => {
    TutorialService.getAll()
      .then(response => {
          console.log("aaaa",response);
        setTutorials(response.data.data); //this.setstate({Quiz:response.data.data})
        console.log(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  function deleteuser(a) {
    
    axios.delete("http://127.0.0.1:4000/Tache/deleteTache/"+a).then(res => 
    {      
      retrieveTutorials()
    })
    .catch( function(error) {
      console.log(error);
    });
}
  
   const submit3=()=>{
     window.location.href='/#/base/addtache'

   }
   
   const update=(e,id) =>{
    e.preventDefault();
    console.log("IIIIIIIIIIIIIII", id);

    localStorage.setItem("id", id);
    window.location.href = "/#/base/UpdateTache"
  }
  return (
    <div>
      
      <div className="table-wrapper" >
       <CButton type="submit" size="sm" color="primary" style={{backgroundColor:'green'}}  onClick={ ()=> submit3()}><CIcon name="cil-scrubber" /> AddTache</CButton> 


        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i></i> List of Tache
            </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>

                    <th>name</th>
                     <th>description</th>
                   
                <th>supprimer</th>
                <th>update</th>
                    </tr>
                  </thead>
                  {<tbody>
                    {
                      tutorials.map((item, index) => {
                        
                        
                        return (

                          <tr key={index}>
                            <td>{item.name}</td>
                             <td>{item.description}</td>
                            
                            <td><i className="fa fa-trash" style={{ color: "red" }}
                              onClick={() => deleteuser( item._id)} ></i></td>
                            <td><i class="fa fa-edit fa-lg mt-4" style={{ color: "red" }}
                                onClick={e => update(e,item._id)} ></i></td>
                            
                            
                            
                              
                           

                            
                          </tr>
                        );

                      })
                    }

                  </tbody>}

                </Table>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>

  );

  

  
};

export default Hoo;