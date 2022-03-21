import React from 'react'
import Footer from './components/Footer';
import List from './components/List';
import Navbar from './components/Navbar';
import { useContext,useState } from 'react'
import ListContext from './context/ListContext';

function Homepage() {
  const {list,setList}=useContext(ListContext);

  return (
    <div className='bg-dark text-white container-fluid'>
       
        <Navbar></Navbar>
{ list ? '' : (<h1>Homepage</h1>)  } 
       <List></List>
        <Footer></Footer>        
        
    </div>
  )
}

export default Homepage