import { GET_TITLE } from '../Actions/actions'

const initialStateOfComic = {
    Comics: [],
    copyComics: []
}

function ComicsReducer(state = initialStateOfComic, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {


        default:
            return { ...state };
    }
}
export default ComicsReducer;