import { combineReducers } from 'redux'
import CharactersReducer from './CharacterReducer'
import ComicsReducer from './ComicReducer'

const combine = combineReducers({
    CharactersReducer,
    ComicsReducer
})


export default combine