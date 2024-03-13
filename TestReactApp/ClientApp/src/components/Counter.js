import React from 'react';

export default function Counter()
{
    const [ currentCount, setCurrentCount ] = React.useState(0)

    function incrementCounter() {
        setCurrentCount(prevValue => currentCount + 1)
    }

    return (
        <>
            <h1>Counter</h1>
            <p>This is a simple example of a React component.</p>
            <p aria-live="polite">Current count: <strong>{currentCount}</strong></p>
            <button className="btn btn-primary" onClick={incrementCounter}>Increment</button>
        </>
    );
}