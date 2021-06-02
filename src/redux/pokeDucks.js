import axios from "axios"

//Constante
const dataInitial = {
    array:[],
    offset: 0
}
//types
const OBTER_POKEMONS_EXITO='OBTER_POKEMONS_EXITO'
const SOLICITAR_POKEMONS_EXITO='SOLICITAR_POKEMONS_EXITO'
//Reducer
export default function pokeReducer(state = dataInitial, action){
    switch(action.type){
        case OBTER_POKEMONS_EXITO:
            return {...state, array:action.playload}
        case SOLICITAR_POKEMONS_EXITO:
            return {...state, array:action.playload.array, offset: action.offset}
        default :
            return state
    }
}

//Accion

export const pokesAction=()=> async(dispatch, getState)=>{
    try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20");
        dispatch({
            type:OBTER_POKEMONS_EXITO,
            playload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}

export const solicitarPokemonsAction = () => async(dispatch, getState)=>{
    const offset = getState().pokemons.offset
    const seguint = offset+20
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${seguint}&limit=20`)
        dispatch({
            type:SOLICITAR_POKEMONS_EXITO,
            playload: {
              array: res.data.results,
              offset: seguint
            }
        })
    } catch (error) {
        console.log(error)
    }
}