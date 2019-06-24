import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import ProductsList from './ProductsList';
import Footer from '../components/Footer';
import Search from './Search';
import Contact from '../components/Contact';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Carousel />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9">
                            <ProductsList />
                        </div>
                        <div className="col-md-3 order-first order-md-2">
                            <Search />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row text-center" id="contact">
                        <Contact />
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.products
});
export default connect(mapStateToProps)(Main);