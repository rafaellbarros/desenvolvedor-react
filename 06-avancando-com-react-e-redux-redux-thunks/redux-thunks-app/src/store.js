import { applyMiddleware, createStore } from 'redux';
// import rootReducer from './reducers';

export default() => {
    const enchanters = applyMiddleware();
    return createStore(
        // rootReduder,
        enchanters
    )
}