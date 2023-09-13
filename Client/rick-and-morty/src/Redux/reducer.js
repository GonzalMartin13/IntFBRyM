import { ADD_FAV, REMOVE_FAV } from "./actionTypes"

let initialState = {myFavorite:[]}

export default function rootReducer (state = initialState, actions) {
    let {type, payload} = actions

    switch (type) {
        case ADD_FAV:
            return{
                ...state,
                myFavorite:[...state.myfavorite, payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorite: state.myfavorite.filter(char => char.id !== Number(payload))
            }
        default:
            return{
                ...state
            }
        }
}