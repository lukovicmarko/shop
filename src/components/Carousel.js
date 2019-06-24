import React, { Component } from 'react'

class Carousel extends Component {
    render() {
        return (
            <section id="actions">
                <div id="actionsCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row text-center">
                                <div className="col-md-4">
                                    <img className="img-responsive" src="images/products/1.jpg" alt="" />
                                    <h4>Product 1</h4>
                                </div>
                                <div className="col-md-4">
                                    <img className="img-responsive" src="images/products/2.jpg" alt="" />
                                    <h4>Product 2</h4>
                                </div>
                                <div className="col-md-4">
                                    <img className="img-responsive" src="images/products/3.jpg" alt="" />
                                    <h4>Product 3</h4>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row text-center">
                                <div className="col-md-4">
                                    <img className="img-responsive" src="images/products/4.jpg" alt="" />
                                    <h4>Product 4</h4>
                                </div>
                                <div className="col-md-4">
                                    <img className="img-responsive" src="images/products/5.jpg" alt="" />
                                    <h4>Product 5</h4>
                                </div>
                                <div className="col-md-4">
                                    <img className="img-responsive" src="images/products/6.jpg" alt="" />
                                    <h4>Product 6</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#actionsCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#actionsCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
        )
    }
}

export default Carousel