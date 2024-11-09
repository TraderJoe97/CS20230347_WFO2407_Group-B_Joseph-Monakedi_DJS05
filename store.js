// InitialState
const initialState = {
    count: 0,
}

/**
 * Reducer function
 * @param {Object} state - The current state of the store
 * @param {Object} action - The action to be applied to the state
 * @returns {Object} The new state of the store
 */
const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, count: state.count + 1 };
        case 'SUBTRACT':
            return { ...state, count: state.count - 1 };
        case 'RESET':
            return { ...state, count: 0 };
        default:
            return state;
    }
};

/**
 * Creates a store
 * @param {function} reducer - The reducer function to use
 * @returns {Object} The store object
 */
const createStore = (reducer) => {
    let state = initialState;
    let listeners = [];
    
    /**
     * Gets the current state of the store
     * @returns {Object} The current state
     */
    const getState = () => state;
    /**
     * Dispatches an action to the store
     * @param {Object} action - The action to dispatch
     */
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    };
    
    /**
     * Subscribes to state changes
     * @param {function} listener - The listener function
     * @returns {function} A function to unsubscribe
     */
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((l) => l!== listener);
        };
    };

    return { getState, dispatch, subscribe };
};

// Usage
const store = createStore(countReducer);

// Subscribe to state changes
store.subscribe(() => {
    console.log('Current state', store.getState());
});

export default store;
