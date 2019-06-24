import React, { Component } from 'react';
// import EditProduct from './EditProduct';
import { connect } from 'react-redux';
import { removeFromList, addToCart } from '../actions/index';
import { bindActionCreators } from 'redux';

class Product extends Component {
    state = {
        modalIsOpen: false,
        order: [],
        buttonText: 'add',
        isButtonDisabled: false
    }

    openModal = () => {
        this.setState({
            modalIsOpen: true
        });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    changeButtonText = () => {
        this.setState({
            buttonText: 'adding',
            isButtonDisabled: true
        });
        this.buttonInterval = setTimeout(() => {
            this.setState({
                buttonText: 'add',
                isButtonDisabled: false
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.buttonInterval);
    }

    render() {
        const userJSON = sessionStorage.getItem('user');
        const user = JSON.parse(userJSON);
        const { ProductName, CategoryName, UnitPrice, ImagePath, CreationDate } = this.props.product;
        return (
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="product">
                    <div className="float-right mb-3">
                        {
                            (user.Type === "Admin")
                                ?
                                (<React.Fragment>
                                    <i
                                        className="fas fa-times buttons"
                                        onClick={() => {
                                            const confirm = window.confirm('Are u sure you want to remove this product from list?');
                                            if (confirm) {
                                                this.props.removeFromList(this.props.product);
                                            } else {
                                                return false;
                                            }
                                        }}
                                    >
                                    </i>
                                </React.Fragment>
                                )
                                : null
                        }
                    </div>


                    <div className="text-center">
                        <img src={ImagePath} className="img-fluid" alt="" />
                        <h5>{ProductName.length < 20 ? ProductName : `${ProductName.substring(0, 20)} ...`}</h5>
                        <p>{CategoryName}</p>
                        <p>Price: {UnitPrice} &#8364;</p>
                        <p>Created: {CreationDate}</p>
                        {
                            (user.Type === "Client")
                                ?
                                (
                                    <button
                                        className="mb-4 add__button"
                                        disabled={this.state.isButtonDisabled}
                                        onClick={() => {
                                            this.props.addToCart(this.props.product);
                                            this.changeButtonText();
                                        }}
                                    >
                                        {this.state.buttonText} to Cart
                                    </button>
                                )
                                : null
                        }
                    </div>
                </div >
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.products,
    cart: state.cart.cart,
    totalPrice: state.cart.totalPrice
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ removeFromList, addToCart }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);