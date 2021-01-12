import React, { useState,useEffect } from "react";
import TacheService from "../service/TacheService";

function AddHoo(){
  const initialTutorialState = {
    
    name: '',
    description:''
   
    
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  
 

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      name: tutorial.name,
      description:tutorial.description,
      

    };

  TacheService.update(localStorage.getItem('id'),data)
      .then(response => {
          console.log('response',response);
        setTutorial({
          name: response.data.name,
          description:response.data.description
          
         
        });
       
      }).then(
        window.location.href='#/base/ListTache'
      )
      
  };
  useEffect(() => { 
    getOneUser();
    
  }, []);
  function getOneUser() {
       
    const element = fetch("http://127.0.0.1:4000/Tache/oneTache/" + localStorage.getItem('id'))
    .then(response => response.json()).then(res => {
        console.log('nommmmmmmmmmmm',res)

        setTutorial({ name: res.data.name,description:res.data.description})
    })
}


 

  return (
    
     
        <div>
          <div className="form-group">
            <label htmlFor="title">name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={tutorial.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={tutorial.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>
         
        

         
          
         
          
         
          

          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
     
    
  );
};

export default AddHoo;
