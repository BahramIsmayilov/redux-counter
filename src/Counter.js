import React from 'react';

const Counter = () => {
  return (
    <div className="container">
      <div className="row">
        <h2>Counter</h2>
        <h5>Name</h5>
        <h1>0</h1>
        <div className="container-button">
          <button id="decrease" className="btn">
            decrease
          </button>
          <button id="increase" className="btn increase">
            increase
          </button>
          <button id="reset" className="btn reset">
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
