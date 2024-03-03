import React, { useState,useEffect } from "react";
import './Home.css'
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom"

const Home=()=>{
    const[data,setData]=useState([]);
    const navigate=useNavigate();
   
    useEffect(()=>{

        getList();
      
      },[])
      function getList(){
        fetch("http://localhost:3001/users").then((result)=>{
          result.json().then((resp)=>{
            console.log(resp)
            setData(resp)
          })
        })
      }

      
      function deleteUser(id){
        fetch(`http://localhost:3001/users/${id}`,{
          method:'DELETE'
        }).then((result)=>{
     result.json().then((resp)=>{
      alert(" Record deleted..")
      getList()
      navigate('/')
     })
        })
        getList()
      }
      
              
    return (
        <div className="container">
            
            <h1>CRUD App with JSON Server</h1>
            <Link to="/Add" className='btn btn-success'>Add user</Link>
            <Table striped variant='dark' border="3" cellSpacing="5px" cellpadding="5px">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>operations</th>
                </tr>
                </thead>
                <tbody>
               {
              data.map((item)=>

                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>{item.city}</td>
                 
                    <td>
                        <Link to={`/read/${item.id}`} className="btn btn-sm btn-info ">Read</Link>
                        <Link  className='text-decoration-none btn btn-sm btn-success' to={`/update/${item.id}`}>Edit</Link>
                        <Link  className='text-decoration-none btn btn-sm btn-danger'onClick={()=>deleteUser(item.id)}>Delete</Link>
                    </td>

                </tr>
                )
            }
                
                
                </tbody>
                </Table>
                </div>
    )
    
            }
        
    
export default Home;