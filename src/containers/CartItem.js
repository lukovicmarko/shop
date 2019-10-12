import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../actions/';
import {
    FaTrash,
    FaChevronCircleUp,
    FaChevronCircleDown
} from "react-icons/fa";

class CartItem extends Component {
    render() {
        const { ProductName, ImagePath, UnitPrice, Quantity, Total } = this.props.product;
        const { product } = this.props;
        return (
            <div className="row mt-5 mb-5 mt-lg-0 text-capitalize text-center align-items-center">

                <div className="col-10 mx-auto col-lg-2 pb-2">
                    <img src={ImagePath} width="60" className="img-fluid" alt="product" />
                </div>

                <div className="col-10 mx-auto col-lg-2 pb-2">
                    {ProductName}
                </div>

                <div className="col-10 mx-auto col-lg-2 pb-2">
                    {UnitPrice} {' '} &#8364;
                </div>

                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <FaChevronCircleDown
                                onClick={() => {
                                    if (product.Quantity === 1) {
                                        const confirm = window.confirm('Are u sure you want to remove this product from cart?');
                                        if (confirm) {
                                            this.props.removeFromCart(product);
                                        } else {
                                            return false;
                                        }
                                    } else {
                                        this.props.decrementQuantity(product);
                                    }
                                }}

                                className="cart-icon text-primary"
                            />
                            <span className="text-title text-muted mx-3">{Quantity}</span>
                            <FaChevronCircleUp
                                className="cart-icon text-primary"
                                onClick={() => this.props.incrementQuantity(this.props.product)}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-10 mx-auto col-lg-2 ">
                    <FaTrash
                        className="text-danger cart-icon"
                        onClick={() => {
                            const confirm = window.confirm('Are u sure you want to empty cart?')
                            if (confirm) {
                                this.props.removeFromCart(this.props.product)
                            } else {
                                return false;
                            }
                        }}
                    />
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <strong className="text-muted">item total : &#8364;{Total}</strong>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart.cart,
    totalPrice: state.cart.totalPrice,
    suma: state.cart.suma
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ removeFromCart, incrementQuantity, decrementQuantity }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

