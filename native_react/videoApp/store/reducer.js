export default function videos (state = {}, action) {
  switch (action.type) {
    case 'SET_CATEGORY_LIST': {
      return {...state, ...action.categoriesList}
    }
    case 'SET_SUGESTION_LIST': {
      return {...state, ...action.suggestionsList}
    }
    default: {
      return state
    }
  }
}
