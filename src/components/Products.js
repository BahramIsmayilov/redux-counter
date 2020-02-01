import React from 'react';
import PropTypes from 'prop-types';
import { getProducts } from '../Actions';
import { connect } from 'react-redux';

const Products = ({ loading, products, getProducts }) => {
  React.useEffect(() => {
    getProducts();
  }, [getProducts]);
  if (loading) {
    return <h1>loading</h1>;
  }
  return (
    <div className="product-container">
      <h1>Products</h1>
      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <img src={product.image.url} alt={product.title} />
              <h3>Price : {product.price}$</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Products.propTypes = {
  loading: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  getProducts: PropTypes.func.isRequired
};
const mapStateToProps = ({ productState: { loading, products } }) => {
  return { loading, products };
};
export default connect(mapStateToProps, { getProducts })(Products);
