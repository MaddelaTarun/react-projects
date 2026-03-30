# Student List

## What I learnt
- a `.map` takes an array, runs a function on each item and returns a new array.
- it does not modify the original array.
```tsx
const numbers = [1, 2, 3];
const result = numbers.map(n => n * 2);
```

<b>Output</b>
```tsx
n=1 -> returns 2
n=2 -> returns 4
n=3 -> returns 6
```

### Syntax Explanation

```tsx
{array.map((item) => (
  <div key={item.id}>
    {item.value}
  </div>
))}
```
- { ... } → lets you write JavaScript inside JSX
- array.map(...) → goes through each item in the array
- (item) => ... → arrow function, runs for every item
- => ( ... ) → returns JSX automatically (no return needed)
- <div key={item.id}> → JSX element + unique key for React
- {item.property} → inserts dynamic value into UI
- Overall flow → array → map → return JSX → React renders list
