import { createStore } from 'redux'
import reducer from '/reducer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native


// const store = createStore(reducer, {
//   suggestionsList: [],
//   categoriesList: []
// })

const persistConfig = {
  key: 'root',
  storage,
  blackList: ['selectedMovie']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)
export { store, persistor }

//export default store
