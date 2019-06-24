import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        //Get user from local storage
        const userJSON = sessionStorage.getItem('user');
        const user = JSON.parse(userJSON);
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="navbar">
                <Link to="/products" className="navbar-brand" id="navbar-brand">Web shop</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#user" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="user">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active" id="home">
                            Welcome, &nbsp;
                                {
                                user.FirstName + ' ' + user.LastName
                            }
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto" id="links">
                        {
                            (user.Type === "Client") ?

                                (
                                    <li className="nav-item">
                                        <Link
                                            to="/cart"
                                            className="nav-link hover-link"
                                        >
                                            <i className="fas fa-shopping-cart">
                                            </i>
                                            Cart
                                            &nbsp;
                                            <span className="badge badge-warning badge-pill cart-count">
                                                {this.props.cart.length}
                                            </span>
                                        </Link>
                                    </li>
                                )
                                : null
                        }
                        <li className="nav-item">
                            <a href="#products" className="nav-link hover-link">Products</a>
                        </li>
                        {
                            (user.Type === "Client") ?
                                (<li className="nav-item">
                                    <a href="#footer" className="nav-link hover-link">Contact</a>
                                </li>)
                                : null
                        }
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-link hover-link"
                                onClick={() => {
                                    sessionStorage.clear();
                                }}
                            >
                                Logout{' '}
                                <i className="fas fa-sign-out-alt"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart
    }
}


export default connect(mapStateToProps)(Navbar);

