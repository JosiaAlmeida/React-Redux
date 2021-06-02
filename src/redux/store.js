import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import pokeReducer from './pokeDucks'

const combine = combineReducers({
    pokemons: pokeReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generatStore(){
    const store = createStore(combine, composeEnhancers(applyMiddleware(thunk)))
    return store;
}