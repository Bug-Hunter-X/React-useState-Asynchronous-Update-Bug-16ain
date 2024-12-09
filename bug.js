```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, including the initial render
    console.log('Component rendered with count:', count);
  }, [count]); // This dependency array ensures that the effect only runs when count changes

  const handleClick = () => {
    setCount(count + 1);
    // BUG: Incorrect usage of state update. The component will not re-render immediately because setCount is async
    console.log('Count after increment:', count); // This will always display the OLD value of count
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```