import React from 'react'
import { Item } from './Item';
import { useGetCharacters } from '../hooks/useGetCharacters';



export const Characters = () => {
    const characters =useGetCharacters();
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
