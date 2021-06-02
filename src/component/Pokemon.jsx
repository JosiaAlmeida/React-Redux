import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {pokesAction,solicitarPokemonsAction} from '../redux/pokeDucks'
const Pokemons = () => {
    //dispatch chama a nossa acção em PokeDuks
    const dispatch = useDispatch()
    //Pegando dados com selectores
    const dataPoke = useSelector(state => state.pokemons.array)
    return ( 
        <div>
            <h1>Lista de Pokemons</h1>
            <button onClick={()=> dispatch(pokesAction())}>Obter Pokemon</button>
            <button onClick={()=> dispatch(solicitarPokemonsAction())}>Obter Pokemon</button>
            <ul>
                {
                    dataPoke.map(poke=>(
                        <li key={poke.name}> {poke.name} </li>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default Pokemons;