```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component rendered with count:', count);
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1); // Correct usage: functional update
    // Now the console.log will display the updated value of count after the next render cycle.
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```