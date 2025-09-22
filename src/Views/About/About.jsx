import React, { use } from 'react'
import { useState,useEffect } from 'react'
import './About.css'



function About() {


    const[name,setName]=useState("")
    const[error,seterror]=useState("")
    const [age,setage]=useState("")
    const[City ,setcity]=useState("")

    return(


     useEffect(()=>{setName(localStorage.getItem("name"));},[]),
     useEffect(()=>{localStorage.setItem("city",City)},[City]),
    
    

    <div>
     <input type='text' placeholder='18+' className='inputbox' value={age} onChange={(e)=>{
        setage(e.target.value)
     }}></input>
         <h1> Your age is :{age}</h1>
        <h1>hello {name}</h1>
        <h1 className='condiction'>
            you accept the condictions
        </h1>
     <input type='text' placeholder='Enter name' onChange={(e)=>{
        setName(e.target.value)
        if(name.length<1){
            seterror("name must be greater than 3 characters")
        }
        else{
            seterror("")
        }
     }} className='inputbox' value={name}/>
     
     <p>{error} </p>

    <button onClick={()=>{
        localStorage.setItem("name",name)

    }}>save</button>
    <button onClick={()=>{
        
        setName("")
    }}>clear</button>


    <div>
        <p>select gender</p>
      <input type="radio" value="male" name="gender" /> male
      <input type="radio" value="female" name="gender" /> female
    </div>

<input type='checkbox' onChange={()=>{
    if(document.querySelector('.condiction').style.display==='none'){
       
        document.querySelector('.condiction').style.display='none'
    }else{
         document.querySelector('.condiction').style.display='block'
    }
}}/> i agree to terms and conditions
<br/>
<input type='checkbox'/> i want to receive the newsletter

<div>
    <select  onChange={(e)=>{
        setcity(e.target.value)
    }}> 
        <option value="">Select City</option>
        <option value="newyork">New York</option>
        <option value="losangeles">Los Angeles</option>
        <option value="chicago">Chicago</option>
    </select>   
</div>
    </div>
    )

  
}


export default About