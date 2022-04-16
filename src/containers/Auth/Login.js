import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";



import './Login.scss';




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'sdfdsd',
            password: '',
            isShowPassword: false,
        }
    }

    handleOnChangeUserName = (event) => {
        this.setState({ username: event.target.value })
    }
    handleOnChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    handleLogin = () => {
        console.log(this.state.username)
        console.log(this.state.password)
    }
    handleShowHidePassword = () => {

        this.setState({ isShowPassword: !this.state.isShowPassword })
    }
    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>Username:</label>
                            <input type="text"
                                className="form-control "
                                placeholder="Enter your Username"
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUserName(event)} />
                        </div>
                        <div className="col-12 form-group login-input mt-3">
                            <label>Password:</label>
                            <div className="custom-input-password">
                                <input type={this.state.isShowPassword ? "text" : "password"}
                                    className="form-control"
                                    placeholder="Enter your Password"
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangePassword(event)} />
                                <span onClick={() => this.handleShowHidePassword()}>

                                    <i className={this.state.isShowPassword ? "far fa-eye-slash" : "far fa-eye"}></i></span>
                            </div>

                        </div>
                        <div className="col-12 mt-3">
                            <button onClick={() => this.handleLogin()} className="btn-login">Login</button>
                        </div>

                        <div className="col-12">
                            <span className="forgot-password">Forgot your password</span>
                        </div>
                        <div className="col-12 text-center">
                            <span className="text-other-login">Or login with: </span>
                        </div>
                        <div className="col-12 social-login">
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
