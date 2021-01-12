import React, { useState } from "react";
import TacheService from "../service/TacheService";

function AddHoo(){
  const initialTacheState = {
    
    name: '',
    description:''
   
    
  };
 
  const [Tache, setTache] = useState(initialTacheState);
 
  
 

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTache({ ...Tache, [name]: value });
  };
  
  

  const saveTache = () => {
    var data = {
      name: Tache.name,
      description:Tache.description,
      

    };
   

    

  TacheService.create(data)
      .then(response => {
        setTache({
          name: response.data.name,
          description:response.data.description,
          
         
        }
        );
       
      }).then(
        window.location.href='#/base/ListTache'
      )
      
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
              value={Tache.name}
              
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
              value={Tache.description}
              onChange={handleInputChange}
              name="description"
            />
            
          </div>
          
         

         
          
         
          
         
          

          <button onClick={saveTache} className="btn btn-success">
            Submit
          </button>
        </div>
     
    
  );
};

export default AddHoo;
