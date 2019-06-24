import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createProduct } from '../actions/index';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

Modal.setAppElement('#root');

class CreateProduct extends Component {
    state = {
        productName: '',
        price: '',
        image: '',
        category: '',
        createdAt: moment(),
        calendarFocused: false
    }


    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        const newID = this.props.products.length + 1;
        const { productName, price, createdAt, category } = this.state;

        const imgString = this.state.image;
        const imagePath = imgString.substring(12);

        //new product
        const product = {
            ProductID: newID,
            ProductName: productName,
            CategoryName: category,
            UnitPrice: price,
            ImagePath: 'images/products/' + imagePath,
            CreationDate: createdAt.format("l")
        };

        //add new product to list
        this.props.createProduct(product);

        //redirect to list       

        //clear fields
        this.setState({
            productName: '',
            price: '',
            image: '',
            createdAt: moment(),
        });
    };

    onDateChange = createdAt => {
        if (createdAt) {
            this.setState({
                createdAt
            });
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState({
            calendarFocused: focused
        })
    }

    render() {
        const { categories } = this.props;
        return (
            <Modal
                isOpen={this.props.modalIsOpen}
                contentLabel="Create Product"
                closeTimeoutMS={200}
                className="Modal"
            >
                <h4 className="text-center">Create Product</h4>
                <button className="close" onClick={this.props.closeModal}></button>
                <form onSubmit={this.onSubmit} className="product__form">
                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="productName"
                            aria-describedby="emailHelp"
                            required
                            name="productName"
                            value={this.state.productName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productImage">Product Image</label>
                        <input
                            type="file"
                            className="form-control-file"
                            id="productImage"
                            required
                            name="image"
                            value={this.state.image}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select
                            className="form-control"
                            onChange={this.onChange}
                            value={this.state.value}
                            name="category"
                        >
                            {
                                categories.map(category => (
                                    <option
                                        key={category.CategoryID}
                                        value={category.CategoryName}
                                    >
                                        {category.CategoryName}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Created At</label>
                        <br />
                        <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={(day) => false}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Product Price</label>
                        <input
                            type="number"
                            min="1"
                            className="form-control"
                            id="price"
                            required
                            name="price"
                            value={this.state.price}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="text-center">
                        <button
                            className="btn btn-secondary form-buttons"
                        >
                            Create
                            </button>
                        <button
                            onClick={this.props.closeModal}
                            className="btn btn-secondary form-buttons"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.products,
    categories: state.products.categories
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ createProduct }, dispatch)
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
