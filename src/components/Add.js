import React from 'react';
import { useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

function Add() {
    const[inputData,setInputData]=useState([]);
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[email,setEmail]=useState("");
    const[city,setCity]=useState("");

    const navigate=useNavigate();

    function getList(){
      fetch("http://localhost:3001/users").then((result)=>{
        result.json().then((resp)=>{
          console.log(resp)
          setInputData(resp)
        })
      })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let data={id,name,age,email,city}
        fetch("http://localhost:3001/users",{
           method:"POST",
           headers:{
            "Accept":"application/json",
            "Content-Type":"application/json",
           },body:JSON.stringify(data)
        }).then((result)=>{
          result.json().then((resp)=>{
                 alert("Inserted successfully")
                 getList();
                 navigate('/')
              
          })
        })
      }
    
    useEffect(()=>{
        getList();
      
      },[])
    
   
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='d=w-50 border bg-secondary text-white p-5'>
    
            <h1>Add new User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">Id:</label>
            <input type="number" value={inputData.id} className='form-control' onChange={(e)=>setId(e.target.value)}></input>
            </div>
            <div>
            <label htmlFor="name">Name:</label>
           <input type="text" value={inputData.name}  className='form-control' onChange={(e)=>setName(e.target.value)}></input>
           </div>
           <div>
           <label htmlFor="age">Age:</label>
            <input type="number" value={inputData.age}  className='form-control' onChange={(e)=>setAge(e.target.value)}></input>
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input type="text" value={inputData.email} className='form-control' onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div>
            <label htmlFor="city">City:</label>
            <input type="text" value={inputData.city}  className='form-control' onChange={(e)=>setCity(e.target.value)}></input>
            </div>
            <button className='btn btn-primary btn-block'>Submit</button>
        
            </form>
        
            
        </div>
        </div>
    );
}
            

export default Add;