import { ADD_FAV, REMOVE_FAV, SORT, RESET, FILTER } from "./actionTypes"

let initialState = {myFavorite:[], allCharacters:[]}

export default function rootReducer (state = initialState, actions) {
    let {type, payload} = actions
    let sorted;

    switch (type) {
        case ADD_FAV:
            return{
                ...state,
                myFavorite:[...state.myFavorite, payload],
                allCharacters:[...state.allCharacters, payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorite: payload,
                allCharacters: payload,
            }
        case FILTER:
            return {
                ...state,
                myFavorite: state.allCharacters.filter(
                (character) => character.gender === payload
                ),
            };
        case SORT:
            if (payload === "Ascendente") {
                sorted = state.myFavorite.sort((a, b) => (a.id < b.id ? 1 : -1));
            } else {
                    sorted = state.myFavorite.sort((a, b) => (a.id > b.id ? 1 : -1));
            }
            return {
                ...state,
                myFavorite: [...sorted],
            };
        case RESET:
            return {
                ...state,
                myFavorite: state.allCharacters,
            };
        default:
            return{
                ...state
            }
        }
}