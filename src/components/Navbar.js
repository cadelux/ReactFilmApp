import React from 'react'
import { Link } from 'react-router-dom'
import { useContext} from 'react'
import ListContext from '../context/ListContext'
import logo from '../netflix-logo.png'




function Navbar() {
    const {list,setList}=useContext(ListContext);

    const logOut=()=>{
        setList(false)
    }
    
    const login=()=>{
        setList(true)
    }
console.log(list)
    return (
    <div className={'container-fluid'}>
        <ul className='justify-content'>         
           <a href='/'>
            <img className={'d-flex justify-content-start pt-5'} src={logo} width='150px'/>
          </a>     
 <Link className='btn btn-outline-light bg-success ' to={"/"}> Films </Link>
    

      {list ? <button className={"d-flex align-items-end flex-column btn btn-outline-danger mb-4"} onClick={()=>logOut()}>logout</button> : <button className='btn btn-outline-success m-3' onClick={()=>login()}>login</button>}
      </ul>


        
       
       
        </div>
    
  )
}

export default Navbar