import axios from "axios"

//Constante
const dataInitial = {
    array:[]
}
const OBTER_POKEMONS_EXITO
//Reducer
export default function pokeReducer(state = dataInitial, action){
    switch(action.type){
        case OBTER_POKEMONS_EXITO:
            return {...state, array:action.playload}
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