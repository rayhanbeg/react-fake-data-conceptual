import PropTypes from 'prop-types'

const SingleProduct = ({product, handleCart}) => {
    // console.log(handleCart);
    return (
        <div>
            <div className="cart">
            <img className='cart-img' src={product.image} alt="" />
            <h2>{product.title.slice(0, 10)}</h2>
            <p>{product.description.slice(0, 120)}</p>
            <div className="cart-footer">
              <h2>{product.price}$</h2>
              <button onClick={() => handleCart(product)} className='add-btn'>add to cart</button>
            </div>
          </div>
        </div>
    );
};

SingleProduct.propTypes = {
    product: PropTypes.object,
    handleCart: PropTypes.func
};
  
export default SingleProduct;