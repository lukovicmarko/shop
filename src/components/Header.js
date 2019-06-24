import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateProduct from '../containers/CreateProduct';

class Header extends Component {
    state = {
        modalIsOpen: false
    };

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    render() {
        const userJSON = sessionStorage.getItem('user');
        const user = JSON.parse(userJSON);
        return (
            <React.Fragment>
                <div className="container-fluid profile-section">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <img src={user.Image} className="img-fluid rounded-circle z-depth-2 avatar" width="250" alt="" data-holder-rendered="true" />
                        </div>
                        <div className="col-md-4">
                            <h4>Title: &nbsp; {user.Title}</h4>
                            <h4>Type: &nbsp; {user.Type}</h4>
                        </div>
                        {
                            // Show only if Admin is logged 
                            (user.Type === "Admin")
                                ?
                                (<div className="col-md-4 text-center create-product-button">
                                    <h4>Add product</h4>
                                    <i
                                        className="fas fa-plus fa-2x add__product"
                                        onClick={this.openModal}
                                    >
                                    </i>
                                </div>)
                                : null
                        }
                    </div>
                    <CreateProduct modalIsOpen={this.state.modalIsOpen}
                        closeModal={this.closeModal}
                    />
                </div >
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.products,
    categories: state.products.categories
});

export default connect(mapStateToProps)(Header)