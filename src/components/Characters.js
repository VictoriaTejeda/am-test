import React from 'react'
import { Item } from './Item';




export const Characters = ({characters}) => {
  return (
    <section>
        <div className='characterList'>
            {characters.map(character =>(
               <Item character={character} key={character.id} />
            ))}
        </div>
    </section>
  )
}
