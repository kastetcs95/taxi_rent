import { reset } from 'redux-form';
import {rentAPI} from './../../api/api';

const ADD_RENT = "ADD_RENT";
const SHOW_CHOOSED_RENT = "SHOW_CHOOSED_RENT";
const HIDE_CHOOSED_RENT = "HIDE_CHOOSED_RENT";
const SET_RENTS = "SET_RENTS";
const DELETE_RENT = "DELETE_RENT";
const UPDATE_RENT = "UPDATE_RENT";

const initialState = {
    rents: [],
    isShowChoosedRent: false,
    choosedId: ""
};

const rentReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_RENTS:
            return {
                ...state,
                rents: [...action.rents],
            }
        case ADD_RENT:
            return {
                ...state,
                rents: [...state.rents, action.rent]
            }
        case SHOW_CHOOSED_RENT:
            return {
                ...state,
                isShowChoosedRent: true,
                choosedId: action.rentId
            }
        case HIDE_CHOOSED_RENT:
            return {
                ...state,
                isShowChoosedRent: false
            }
        case DELETE_RENT:
            let idArrayD = state.rents.map(e => e.id);
            return {
                ...state,
                rents: [...state.rents.slice(0, idArrayD.indexOf(action.rentId)), ...state.rents.slice(idArrayD.indexOf(action.rentId)+1)]
                
            }
        case UPDATE_RENT:
            
            let idArrayU = state.rents.map(e => e.id);
            return {
                ...state,
                rents: [...state.rents.slice(0, idArrayU.indexOf(action.rent.id)), action.rent, ...state.rents.slice(idArrayU.indexOf(action.rent.id)+1)]
            }
        default:
            return state;
    }
}

export const setRents = (rents) => ({type: SET_RENTS, rents})
export const addRent = (rent) => ({type: ADD_RENT, rent})
export const showChoosedRent = (rentId) => ({type: SHOW_CHOOSED_RENT, rentId})
export const hideChoosedRent = () => ({type: HIDE_CHOOSED_RENT})
export const deleteRentFromState = (rentId) => ({type: DELETE_RENT, rentId})
export const updateRentInState = (rent) => ({type: UPDATE_RENT, rent})

export const getRents = () => {
    return (dispatch) => {
        rentAPI.getRents()
        .then(response => {
            dispatch(setRents(response))
        })
    }
}

export const postRent = (rent) => {
    return (dispatch) => {
        rentAPI.postRent(rent)
        .then(response => {
            dispatch(addRent(response.data));
        })
    }
}

export const deleteRent = (rentId) => {
    return (dispatch) => {
        rentAPI.deleteRent(rentId)
        .then(response => {
            console.log(response);
            dispatch(deleteRentFromState(rentId))
        })
    }
}

export const updateRent = (rent) => {
    return (dispatch) => {
        rentAPI.updateRent(rent)
        .then(response => {
            dispatch(updateRentInState(response.data))
        })
    }
}

export const sortRent = (formData) => {
    return (dispatch) => {
        rentAPI.sortRent(formData)
        .then(response => {
            dispatch(setRents(response.data))
        })
    }
}

export const filterRent = (text) => {
    return (dispatch) => {
        rentAPI.filterRent(text)
        .then(response => {
            dispatch(setRents(response.data))
        })
    }
}

export const resetForm = (nameForm) => {
    return (dispatch) => {
        rentAPI.getRents()
        .then(response => {
            dispatch(setRents(response))
            dispatch(reset(nameForm))
        })
    }
}

export default rentReducer;