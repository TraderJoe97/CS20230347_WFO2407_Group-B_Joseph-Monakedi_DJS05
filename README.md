# Redux-Inspired Tally App Store

This project implements a Redux-inspired store for a simple Tally App. The store manages the state of a counter, allowing operations like increment, decrement, and reset.

## How to Run

1. Ensure you have Node.js installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run the following command to execute the code: 'node tallyApp.js'
5. Observe the console output to see the state changes.

## Approach Overview

The implementation follows these key concepts:

1. **Store Creation**: A `createStore` function that sets up the state management system.
2. **State**: An object holding the current count.
3. **Reducer**: A pure function that specifies how the state changes in response to actions.
4. **Dispatch**: A method to send actions to the store, triggering state updates.
5. **Subscribe**: A method to register listeners that react to state changes.

The store is implemented without any UI, focusing purely on state management. Console logs are used to demonstrate state changes.

## Challenges and Solutions

1. **Immutability**: Ensuring state immutability was crucial. This was achieved by always returning a new state object in the reducer, rather than modifying the existing state.

2. **Subscription Management**: Implementing an efficient subscription system was challenging. The solution involves maintaining an array of listener functions and providing a way to unsubscribe.

3. **Action Handling**: Designing a flexible action handling system was important. This was solved by using a switch statement in the reducer, allowing easy addition of new action types in the future.

## Reflections

This implementation demonstrates the power of centralized state management. By separating the state logic from UI concerns, we create a system that's easy to reason about and test. The use of pure functions (reducer) and immutability principles contributes to predictable state updates.

While this implementation is simplified compared to full-fledged libraries like Redux, it captures the essence of state management patterns used in modern web applications.