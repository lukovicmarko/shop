import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../actions/index';
import { bindActionCreators } from 'redux';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

import {
    FaChevronCircleLeft,
    FaChevronLeft
} from "react-icons/fa";

import CartItem from './CartItem';
import CartColumns from '../components/CartColums';


class Cart extends Component {
    render() {
        const { cart } = this.props;
        if (cart.length === 0) {
            return (
                <React.Fragment>
                    <div className="text-center empty-cart">
                        <img
                            src="https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png"
                            alt="empty-cart"
                        />
                        <h1>Your cart is empty</h1>
                        <Link to="/products">
                            <h1>
                                <FaChevronLeft className="cart-icon text-primary" />
                                Go back
                            </h1>
                        </Link>
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <div className="container mb-5">
                        <Link to="/products">
                            <h2>
                                <FaChevronCircleLeft className="cart-icon text-primary" />
                            </h2>
                        </Link>
                    </div>
                    <TransitionGroup component="div" className="container">
                        <CartColumns />
                        {
                            cart.map(product => (
                                <CSSTransition
                                    key={product.ProductID}
                                    timeout={{ enter: 500, exit: 500 }}
                                    classNames="order"
                                    unmountOnExit
                                >

                                    <CartItem key={product.ProductID} product={product} />

                                </CSSTransition>
                            ))}
                    </TransitionGroup>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h3 className="mb-4">Total: &#8364; {this.props.totalPrice}</h3>
                                <button
                                    onClick={() => {
                                        const confirm = window.confirm('Are u sure you want to empty cart?')
                                        if (confirm) {
                                            this.props.clearCart();
                                        } else {
                                            return false;
                                        }
                                    }}
                                    className="btn btn-outline-danger text-uppercase mb-5 empty-cart">
                                    Clear Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}

const mapStateToProps = state => ({
    cart: state.cart.cart,
    totalPrice: state.cart.totalPrice,
    suma: state.cart.suma
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addToCart, removeFromCart, clearCart }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);