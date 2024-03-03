import React from 'react';
import { useState,useEffect } from 'react'
import {Link} from "react-router-dom"
import {useParams} from 'react-router-dom'

function Read() {
    const[inputData,setInputData]=useState([])
    const{id}=useParams();

    
      useEffect(()=>{
        fetch("http://localhost:3001/users/"+id).then((result)=>{
            result.json().then((resp)=>{
              console.log(resp)
              setInputData(resp)
            })
        })
      
      },[])
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='d=w-50 border bg-secondary text-white p-5'>
            <h1>Details of user</h1>
            <div>
                <strong>Id:{inputData.id}</strong>
            </div>
            <div>
                <strong>name:{inputData.name}</strong>
            </div>
            <div>
                <strong>Age:{inputData.age}</strong>
            </div>
            <div>
                <strong>Email:{inputData.email}</strong>
            </div>
            <div>
                <strong>City:{inputData.city}</strong>
            </div>
            <Link to="/" className='btn btn-primary'>Back</Link>
        </div>
            
        </div>
    
    );
}

export default Read;