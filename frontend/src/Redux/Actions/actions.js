import axios from 'axios';
export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_TITLE = "GET_TITLE";

//================CHARACTERS=================//
export function getAllCharacters() {
    return async function (dispatch) {
        try {
            const allCharacters = await axios.get('localhost:3001/characters');
            return dispatch({
                type: GET_CHARACTERS,
                payload: allCharacters.data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}



//================COMICS=================//


export function getComicsByTitle(title) {
    return async function (dispatch) {
        try {
            const queryTitle = await axios.get(`http://localhost:3001/comics?title=${title}`)
            return dispatch({
                type: GET_TITLE,
                payload: queryTitle.data
            })
        }
        catch (err) {
            alert('Title not found', err)
        }
    }
}

