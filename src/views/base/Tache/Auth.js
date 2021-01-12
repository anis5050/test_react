import React, { useState } from "react";
import TutorialService from "../service/TutorialService";

function AddHoo(){
  const initialTutorialState = {
    
    
    email:'',
    password:''
   
    
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  
 

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };
  function submit5()
  {
    window.location.href='/#/base/AddUSER'
  }

  const saveTutorial = () => {
    var data = {
      
      email:tutorial.email,
      password:tutorial.password

    };

  TutorialService.auth(data)
      .then(response => {
        console.log("response",response.data['statut']);
        if(response.data['statut']=="error")
        {
            alert("email order password invalid")
        }
        else
        {
            window.location.href='/#/base/ListTache'
        }
       
      })
      
  };

 

  return (
    
     
        <div>
          
         
          <div className="form-group">
            <label htmlFor="title">email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={tutorial.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              value={tutorial.password}
              onChange={handleInputChange}
              name="password"
            />
          </div>

         
          
         
          
         
          

          <button onClick={saveTutorial} className="btn btn-success">
            SignIn
          </button>
          <button onClick={submit5} className="btn btn-success" style={{backgroundColor:'red'}}>
            SignUp
          </button>
        </div>
     
    
  );
};

export default AddHoo;
