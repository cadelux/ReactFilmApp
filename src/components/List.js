import React from 'react'
import { useState } from 'react';
import data from '../data';
import SingleFilm from './Film';
import ListContext from '../context/ListContext'
import { useContext } from 'react'


function List() {
  // E�ER B�R DATAYI(JSON VS.) BA�KA COMPONENTE �EKMEK �STERSEN HEMEN STATE OLU�TUR. Ve usestate'e o default olarak ver.
    const[films,setFilms]=useState(data)
    const {list,setList}=useContext(ListContext);

  return (
    <div>
    <div className='info container'>
      <div className='row'>
{/* Asl�nda mapleme i�lemi diziler i�in olur ve her eleman� �a��r�r. */}
{/* list true ise mapla false ise maplama demek */}
         { list && films.map((film)=>{ 
            return (
              <div key={film.imdbID} className='col rounded p-2'>
                {/* Filmin imdbID ile filmin t�m datas� gelsin. */}
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