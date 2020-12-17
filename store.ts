import { createStore } from 'redux';
import usersReducer from './reducers/users';

const store = createStore(usersReducer);

// 得知每一次 state 的變更
store.subscribe(() => console.log(store.getState()));

const addUser = (user) => ({
    type: 'ADD_USER',
    payload: user,
});

console.log('加入兔兔');
store.dispatch(
    addUser({
        id: 1,
        name: '兔兔',
        company: { name: '卡赫那拉' },
    })
);

console.log('\n加入P助');
store.dispatch(
    addUser({
        id: 2,
        name: 'P助',
        company: { name: '卡赫那拉' },
    })
);

// 執行 GET_USERS 行為
const getUsers = (users) => ({
    type: 'GET_USERS',
    payload: users,
});

console.log('\n\n取得角落生物所有腳色');
store.dispatch(
    getUsers([
        {
            id: 1,
            name: '白熊',
            company: { name: '角落生物' },
        },
        {
            id: 2,
            name: '企鵝?',
            company: { name: '角落生物' },
        },
        {
            id: 3,
            name: '炸豬排',
            company: { name: '角落生物' },
        },
        {
            id: 4,
            name: '貓',
            company: { name: '角落生物' },
        },
        {
            id: 5,
            name: '蜥蜴',
            company: { name: '角落生物' },
        },
    ])
);
