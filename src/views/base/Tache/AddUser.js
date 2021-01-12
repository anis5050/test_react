import React, { useState } from "react";
import UserService from "../service/TutorialService";

function AddHoo(){
  const initialTacheState = {
    
    name: '',
    lastname:'',
    email:'',
    password:''
   
    
  };
  const initialTutorialStatee = {
    
    nameError:'',
    lastnameError:'',
    emailERR: '',
    passwordERR: ''
   
    
  };
 
  const [Tache, setTache] = useState(initialTacheState);
  const [tutoriale, setTutoriale] = useState(initialTutorialStatee);
  function validate() {
    let isERRor = false
    
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (Tache.email === '') {
      isERRor = true
      tutoriale.emailERR = "veuiller entrer un email !"
    }else
    if (!regex.test(Tache.email)) {
      isERRor = true
      tutoriale.emailERR = "Email invalid ! veuiller entrer un autre email !"
    }
    const regex1 = /^[A-Za-z]\w{7,14}$/;
    if (Tache.password === '')  {
      isERRor = true
      tutoriale.passwordERR = "veuiller entrer une  mot de passe !"
    }else
    if (!regex1.test(Tache.password)) {
      isERRor = true
      tutoriale.passwordERR = "veuillez entrer un mot de passe contenant au moins 4 caractére majuscule et 4 minuscule !"
    }
    if (Tache.name === '')  {
      isERRor = true
      tutoriale.nameError = "veuiller entrer nom !"
    }
    if (Tache.lastname === '')  {
      isERRor = true
      tutoriale.lastnameError = "veuiller entrer lastname !"
    }
  
    
   
    if (isERRor) {
      setTache({
        ...Tache,
        ...tutoriale
      })
    }
    return isERRor
  }
  
 

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTache({ ...Tache, [name]: value });
  };
  
  

  const saveTache = () => {
    var data = {
      name: Tache.name,
      lastname:Tache.lastname,
      email:Tache.email,
      password:Tache.password
      

    };
    let err=validate()
    if(err==false)
   {

    

    UserService.create(data)
      .then(response => {
        setTache({
          name: response.data.name,
          lastname: response.data.lastname,
          email: response.data.email,
          password: response.data.password,}
        );
       
      }).then(
        window.location.href='#/base/authtache'
      )
   }
      
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
            <label htmlFor="title">lastname</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              required
              value={Tache.lastname}
              onChange={handleInputChange}
              name="lastname"
            />
            
          </div>
          <div className="form-group">
            <label htmlFor="title">email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={Tache.email}
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
              value={Tache.password}
              onChange={handleInputChange}
              name="password"
            />
            
          </div>
          
         

         
          
         
          
         
          

          <button onClick={saveTache} className="btn btn-success">
            Submit
          </button>
        </div>
     
    
  );
};

export default AddHoo;
