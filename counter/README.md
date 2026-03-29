# Counter App 🔢

A simple React application built to learn the fundamentals of state management and event handling.

## Features
- **Increase/Decrease:** Adjust the counter value.
- **Safety Check:** The "Decrease" button is disabled when the count is 0 to prevent negative numbers.
- **Reset:** Quickly return the counter to 0.

## What I Learnt

This was my first project as I started learning React. Here are the key concepts I've mastered:

### 1. `useState`
I learned how to store and manage "state" (data that changes over time) inside a component.
```javascript
const [count, setCount] = useState(0);
```

### 2. State Updates
I discovered two ways to update state and why the functional approach is better:
- **Basic:** `setCount(count + 1);`
- **Recommended:** `setCount(prev => prev + 1);`
- **Why?** React updates state asynchronously. Using the `prev` (previous) value ensures that I am always working with the most up-to-date state, preventing bugs in faster or complex interactions.

### 3. Event Handling
I learned how to use the `onClick` attribute to trigger JavaScript functions when a user interacts with the UI.
```javascript
<button onClick={() => setCount(0)}>Reset</button>
```

### 4. Conditional Rendering & UI Behavior
I learned how to make the UI "smart" by changing its behavior based on the current state.
- **Example:** Disabling a button when a condition is met.
```javascript
<button disabled={count === 0}>Decrease</button>
```

---
*Built with React, TypeScript, and Vite.*
