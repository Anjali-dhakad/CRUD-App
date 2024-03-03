import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Update from './components/Update';  
import Read from './components/Read';            



function App() {
    return (
        <div>
           <BrowserRouter>
           <Routes>
             <Route path="/" element={<Home/>}></Route>
            <Route path="/add" element={<Add/>}></Route>
            <Route path="/update/:id" element={<Update/>}></Route>
            <Route path="/Read/:id" element={<Read/>}></Route>
    
        
            
           </Routes>
           </BrowserRouter>
        </div>
    );
}

export default App;
