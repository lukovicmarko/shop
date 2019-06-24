import React from 'react';
import { Link } from 'react-router-dom';

import {
    FaChevronLeft
} from "react-icons/fa";

const NotFoundPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>404 - Not Found</h1>
                    <Link to="/products">
                        <h1>
                            <FaChevronLeft className="cart-icon text-primary" />
                            Go back
                    </h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage 