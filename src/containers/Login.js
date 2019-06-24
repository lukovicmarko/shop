import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';
import { bindActionCreators } from 'redux';

import Alert from '../components/Alert';

class Login extends Component {

    state = {
        users: [],
        username: '',
        password: '',
        message: '',
        className: '',
        isAuthenticated: false
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        const { users } = this.props;
        const { username, password } = this.state;

        //Check for user credintials
        if (username === "Marko" && password === "Lukovic") {
            const user = {
                FirstName: "Marko",
                LastName: "Lukovic",
                Title: "Front End Developer",
                Image: "images/profile.jpg",
                Type: "Client"
            };
            sessionStorage.setItem('user', JSON.stringify(user));
            this.props.history.push('/products');
        }
        else {
            users.forEach(client => {
                if (client.FirstName === username && client.LastName === password) {
                    const user = {
                        FirstName: client.FirstName,
                        LastName: client.LastName,
                        Title: client.Title,
                        Image: "data:image/jpeg;base64," + client.Photo.substr(104),
                        Type: "Admin"
                    };
                    this.setState({
                        isAuthenticated: true
                    })
                    sessionStorage.setItem('user', JSON.stringify(user));
                    this.props.history.push('/products');
                } else {
                    this.setState({
                        message: 'Invalid username or password !',
                        className: 'alert alert-danger text-center'
                    });
                }
            });
        }

        //remove warning div after after 3 seconds
        this.Interval = setTimeout(() => {
            this.setState({
                message: '',
                className: ''
            })
        }, 6000);

        //reset username and password
        this.setState({
            username: '',
            password: ''
        })
    }

    componentWillUnmount() {
        clearTimeout(this.Interval);
    }

    render() {
        return (
            <div className="container login">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card mb-5">
                            <div className="card-body">
                                <h1 className="text-center pb-4 pt-3">
                                    <span className="text-primary">
                                        <i className="fas fa-lock"></i>{' '}
                                        Login
                                    </span>
                                </h1>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            className="form-control"
                                            value={this.state.username}
                                            onChange={this.onChange}
                                            required
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="text"
                                            name="password"
                                            className="form-control"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                            required
                                            placeholder="Password"
                                        />
                                    </div>
                                    <input type="submit" value="Login" className="btn btn-primary btn-block" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <Alert message={this.state.message} className={this.state.className} />
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    users: state.users.users
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchUsers }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);