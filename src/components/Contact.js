import React from 'react'

const Contact = () => {
    return (
        <div className="col-md-8 mx-auto">
            <form>
                <h2>Contact Us</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter name" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Message"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <input type="submit" value="Send" className="btn btn-secondary btn-block" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact