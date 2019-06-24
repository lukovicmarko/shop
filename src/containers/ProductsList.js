import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../actions/index';
import { selectProducts } from "../selectors/productSelector";

import Product from './Product';

import Nprogress from 'nprogress';

class ProductsList extends Component {
    componentDidMount() {
        this.props.fetchProducts();
        Nprogress.start();
    }

    render() {
        if (this.props.products) {
            Nprogress.done();
            const { products } = this.props;
            return (
                <section id="products">
                    <div className="row">
                        {
                            products.map(product => {
                                return (
                                    <Product
                                        key={product.ProductID}
                                        product={product}
                                        id={product.ProductID}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
            )
        }
    }
}

const mapStateToProps = state => ({
    products: selectProducts(state.products.products, state.filters)
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchProducts }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);