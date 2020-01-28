import React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="container">
      <div className="row">
        <h2>Counter</h2>
        <h5>Name</h5>
        <h1>{count}</h1>
        <div className="container-button">
          <button
            id="decrease"
            className="btn"
            onClick={() => setCount(count - 1)}
          >
            decrease
          </button>
          <button
            id="increase"
            className="btn increase"
            onClick={() => setCount(count + 1)}
          >
            increase
          </button>
          <button id="reset" className="btn reset" onClick={() => setCount(0)}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
