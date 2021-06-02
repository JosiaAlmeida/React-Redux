import React from 'react'
import { Provider } from 'react-redux'
import Pokemons from './component/Pokemon'
import generateStore from './redux/store'
function App() {
  const store = generateStore()
  return (
    <div>
      <Provider store={store}>
        <Pokemons />
      </Provider>
    </div>
  );
}

export default App;