import { GET_CHARACTERS } from '../Actions/actions'

const initialStateOfCharacter = {
    Characters: [],
    copyCharacters: []
}

function CharactersReducer(state = initialStateOfCharacter, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {


        default:
            return { ...state };

    }
}
export default CharactersReducer;