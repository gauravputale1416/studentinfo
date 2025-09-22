import React from 'react'
import { useState,useEffect } from 'react'
import './home.css'
import { studentData } from '../../Configs/Data-List/Data.js'
import { BGCOLOR, PRIMARYCOLOR, SECONDARYCOLOR, TEXTCOLOR, DISABLEDTEXTCOLOR, APPNAME } from '../../Configs/Data-List/Main_Data.js'
import { MapPin,Venus,Mars, Link } from 'lucide-react' ;
import Male from './Images/male.png'
import female from './Images/female.png'
import About from './../About/About.jsx'

function Home() {
  return (
    <div className='home-container' style={{background:BGCOLOR,color:TEXTCOLOR}}>
      <h1 className='app-name'>{APPNAME}</h1>
     

      <div  className='main-cart' style={{background:SECONDARYCOLOR,color:TEXTCOLOR}}>
        {studentData.map((student)=>{
            return(
                <div className='student-card'>
                    <h1 className='student-name'>{student.name}</h1>
                    <p className='student-age'>Age : {student.age}</p>
                    <p className='student-city'> <MapPin className='icon' /> {student.city}</p>
                    <p>{student.gender==='female'?<Venus className='icon' />:<Mars className='icon'/>}{student.gender}</p>
                    <div ><img className='gender-img' src={student.gender==='female'?female:Male}  /></div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Home
