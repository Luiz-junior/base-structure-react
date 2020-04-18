import axios from 'axios';

import api from '../../services/api';

import { GET_EX, ERROR } from './types';

export const getEx = () => {
  return async dispatch => {
    const res = await api.get(``)

    try {
      dispatch({
        type: GET_EX,
        data: res.data,
        loading: false
      })
    } catch (error) {
      dispatch({ type: ERROR, errorStatus: res.data, loading: false })
    }
  }
}
