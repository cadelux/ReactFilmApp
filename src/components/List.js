import React from 'react'
import { useState } from 'react';
import data from '../data';
import SingleFilm from './Film';
import ListContext from '../context/ListContext'
import { useContext } from 'react'


function List() {
  // EÐER BÝR DATAYI(JSON VS.) BAÞKA COMPONENTE ÇEKMEK ÝSTERSEN HEMEN STATE OLUÞTUR. Ve usestate'e o default olarak ver.
    const[films,setFilms]=useState(data)
    const {list,setList}=useContext(ListContext);

  return (
    <div>
    <div className='info container'>
      <div className='row'>
{/* Aslýnda mapleme iþlemi diziler için olur ve her elemaný çaðýrýr. */}
{/* list true ise mapla false ise maplama demek */}
         { list && films.map((film)=>{ 
            return (
              <div key={film.imdbID} className='col rounded p-2'>
                {/* Filmin imdbID ile filmin tüm datasý gelsin. */}
                  <SingleFilm key={film.imdbID} {...film}></SingleFilm> 
               </div>
            )
    })}

      </div>

  </div> 
  </div> 
  )
}

export default List