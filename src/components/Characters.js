import React from 'react'
import { Item } from './Item';




export const Characters = ({characters}) => {
  //console.log(characters)
  return (
    <section className='main-container'>
        <div className='characterList'>
            {characters.map(character =>(
               <Item character={character} key={character.id} />
            ))}
        </div>
    </section>
  )
}
