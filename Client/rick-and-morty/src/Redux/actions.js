import {ADD_FAV , REMOVE_FAV, SORT, FILTER, RESET } from "./actionTypes";
import axios from "axios";

export const addFav = (character) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    return async (dispatch) => {
      try {
        const { data } = await axios.post(endpoint, character);
        return dispatch({
          type: ADD_FAV,
          payload: data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };

export const removeFav = (id) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    return async (dispatch) => {
      try {
        const { data } = await axios.delete(endpoint);
        return dispatch({
          type: REMOVE_FAV,
          payload: data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };

  export const filterByGender = (gender) => {
    return {
      type: FILTER,
      payload: gender,
    };
  };
  
  export const sortById = (order) => {
    return {
      type: SORT,
      payload: order,
    };
  };
  
  export const reset = () => {
    return {
      type: RESET,
    };
  };
  