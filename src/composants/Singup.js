import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { createBrowserHistory } from 'history';
 

const Signup=()=>{
    const flex={
        display:'flex',
        justifyContent :'center'
         };
         const form={
           height:'300px',
           width:'300px',
           marginTop:"130px",
            };

const [name,setNom] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
const profile = {name,email,password};



let history = createBrowserHistory();

const envoi =() =>{

if(email === '')
{
    alert('Email Field is empty')
}
else if(password === '')
{
    alert('Pass Field is empty')
}
else if(email === '')
{
    alert('Name Field is empty')
} else if(name != '' && email != '' && password != ''){

fetch('http://127.0.0.1:8000/api/register',
{
method:'POST',
headers:{
"Content-Type" : "application/json",
"accept" : "application/json"},
 body: JSON.stringify(profile)
})
.then(response => response.json)
.then(rep =>{
   
})


 history.push('/login');
 window.location.reload()
}
 }



      
     
    //     if($userexist == 1) {
    //         header('location:index1.php');
    //     }else{
    //         $erreur="mot de passe ou mail incorect";
    //     }
    
    
    // }else{
    //         $erreur="Tous les champs doivent être complétés";
    // }

 
//  if({name,email,password} === '')
//         {
//             alert('Fields are empty')
//         }
//         else if(password.length < 6)
//         {
//             alert('Password must be at least 6 characters')
//         }
//         else if(email.indexOf('@') === -1)
//         {
//             alert('Email must be valid')
//         }



    return (
        <div>
        <Navbar/>
    <div style={flex}>
    <form style={form}>
    
    <h1>INSCRIPTION</h1>
    
  
    <label>Nom</label>
    <input value={name}  onChange={(e)=>{setNom(e.target.value)}}  className="form-control input-sm" type="text" placeholder="NOM" aria-label="Repository description" />
    <br></br>
    <label>Votre Email</label>
    
    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} name="mailconnect" className="form-control input-sm" type="Email" placeholder="Email" aria-label="Repository description" />
    <br></br> 
    <label>Créé votre mots de passe</label>
    
    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} name="mdpconnect" className="form-control input-sm" type="password" placeholder="Mots de passe" aria-label="Repository description" />
    <br></br>
    
   
 
    <button onClick={envoi} className="btn btn-dark" name='con' type="button">S'inscrire</button>
 
    </form>
   
  
    
    
    
    </div>
    </div>
    
    )
   
}

 
export default Signup