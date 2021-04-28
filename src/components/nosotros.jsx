import React, { useEffect, useState } from 'react'


const nosotros = () => {
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [equipo, setEquipo] = useState([]);
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        obtenerDatos()
    }, [])

    
    const obtenerDatos = async () =>{
        let data = await fetch('https://jsonplaceholder.typicode.com/users')
        let usuarios = await data.json()
        setEquipo(usuarios)
    }

    return (
        <div>
            <ul>
                {
                    equipo.map(team =>(
                        <li key={team.id}>{team.name} - {team.username}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default nosotros

