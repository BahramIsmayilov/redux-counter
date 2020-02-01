import React from 'react';
import { connect } from 'react-redux';
import { decrease, increase, reset, modalOpen } from './Actions';
import PropTypes from 'prop-types';

const Counter = ({
  count,
  name,
  defaultName,
  increase,
  decrease,
  reset,
  modalOpen
}) => {
  return (
    <div className="container">
      <div className="row">
        <h2>Counter</h2>
        <h5>{defaultName}</h5>
        <h5>{name}</h5>
        <h1>{count}</h1>
        <div className="container-button">
          <button id="decrease" className="btn" onClick={decrease}>
            decrease
          </button>
          <button id="increase" className="btn increase" onClick={increase}>
            increase
          </button>
          <button
            id="reset"
            className="btn reset"
            onClick={() => {
              reset();
              modalOpen(
                'hello Mekish',
                'lorem impus text lorem impus text lorem impus text lorem impus text lorem impus text lorem impus text'
              );
            }}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  defaultName: PropTypes.string.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

function mapStateToProps({
  countState: { count, name },
  productState: { companyName }
}) {
  console.log(companyName);
  return { count, name };
}

// const mapDispatchToProps = {
//   decrease,
//   increase,
//   reset,
//   modalOpen
// };

// function mapDispatchToProps(dispatch, ownProps) {
//   console.log(ownProps);
//   return {
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//     reset: () => {
//       dispatch(reset());
//       dispatch(
//         modalOpen(
//           'hello Mekish',
//           'lorem impus text lorem impus text lorem impus text lorem impus text lorem impus text lorem impus text'
//         )
//       );
//     }
//   };
// }
export default connect(mapStateToProps, {
  decrease,
  increase,
  reset,
  modalOpen
})(Counter);
