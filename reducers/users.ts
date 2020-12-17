export interface I_User {
    id: number;
    name: string;
    company: {
        name: string;
        catchPhrase: string;
    };
}

const initialState: I_User[] = [];

const usersReducer = (state: I_User[] = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload];
        case 'GET_USERS':
            return [...action.payload];
        default:
            return state;
    }
};

export default usersReducer;
