```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval.  The callback function creates a new closure each time it's called,
    // leading to memory leaks and unexpected behavior.  It's crucial to use a cleanup function.
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // No cleanup function to clear the interval
    //return () => clearInterval(intervalId); // This is missing!
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```