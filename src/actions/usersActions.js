import axios from 'axios';
import { GET_ALL, LOADING, ERROR } from '../types/usersTypes';

export const getAll = () => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        const answer = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: GET_ALL,
            payload: answer.data
        })
    }
    catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}