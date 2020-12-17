import * as types from '../actionTypes';

export const addUser = (user) => ({
    type: types.ADD_USER,
    payload: user,
});

export const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});
