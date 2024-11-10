const store = require('./store');

// Scenario 1: Initial state
console.log('Initial state:', store.getState());

// Scenario 2: Incrementing the count
store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'ADD' });

// Scenario 3: Decrementing the count
store.dispatch({ type: 'SUBTRACT' });

// Scenario 4: Reset the count
store.dispatch({ type: 'RESET'});    

