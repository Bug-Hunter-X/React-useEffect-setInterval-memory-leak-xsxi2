# React useEffect setInterval Memory Leak

This repository demonstrates a common mistake when using `setInterval` within a React `useEffect` hook: forgetting to include a cleanup function to clear the interval when the component unmounts or the effect is updated.

## The Problem

The provided `bug.js` file shows an `useEffect` hook that uses `setInterval` to update a counter every second. However, it omits the cleanup function (`return () => clearInterval(intervalId);`).  This means that every time the component renders, a new interval is created, leading to multiple intervals running concurrently. This results in a memory leak and unexpected behavior.

## The Solution

The `bugSolution.js` file corrects the issue by adding the necessary cleanup function. The `clearInterval(intervalId)` call ensures that the interval is stopped when the component unmounts, preventing memory leaks.