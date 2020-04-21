export const clickReducer = (state = { msg: ''}, action) => {
    switch(action.type) {
        case 'CLICK':
            return { ...state, msg: 'School of net'}
        default: 
            return state;
    }
}