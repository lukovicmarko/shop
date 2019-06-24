import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchProduct } from '../actions/index';

const Search = props => {
    return (
        <input
            type="text"
            className="form-control"
            id="search"
            placeholder="Search"
            onChange={(e) => {
                props.searchProduct(e.target.value)
            }}
        />
    )
}


// const mapStateToProps = state => ({
//     filters: state.filters
// });

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ searchProduct }, dispatch)
};

export default connect(null, mapDispatchToProps)(Search);