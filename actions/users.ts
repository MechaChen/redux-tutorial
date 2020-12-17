export const addUser = (user) => ({
    type: 'ADD_USER',
    payload: user,
});

export const getUsers = (users) => ({
    type: 'GET_USERS',
    payload: users,
});
