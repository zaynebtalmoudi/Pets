import React from 'react'
import PetCard from './PetCard'


export default function PetsList({ petsList }) {

    const list = petsList.map(pet =>

        < PetCard
            name={pet.name}
            race={pet.race}
            type={pet.type}
            location={pet.location}
            photo={pet.photo}
        />
    )


    return (
        <div className='d-flex justify-content-around flex-wrap' style={{
            marginTop: '2rem'
        }}>
            {list}
        </div >
    )
}

