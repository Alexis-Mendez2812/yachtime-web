import { ALL_YATES } from "../Actions/actions"
const initialState = {
    allYates: []
}

export default function rootReducer (state = initialState, { type, payload }) {
  switch (type) {

  case ALL_YATES:
    return { ...state, allYates: payload }

  default:
    return state
  }
}
