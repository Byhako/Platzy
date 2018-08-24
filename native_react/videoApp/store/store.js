import { createStore } from 'redux'
import reducer from '/reducer'

const store = createStore(reducer, {
  suggestionsList: [],
  categoriesList: []
})

export default store
