import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import { handleLoginApi } from "../../services/userService"


import './Login.scss';




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
        }
    }

    handleOnChangeUserName = (event) => {
        this.setState({ username: event.target.value })
    }
    handleOnChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    handleLogin = async () => {
        this.setState({ errMessage: '' })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password)
            if (data && data.errCode !== 0) {
                this.setState({ errMessage: data.message })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
            }
        } catch (err) {
            if (err.response) {
                if (err.response.data) {
                    this.setState({ errMessage: err.response.data.message })
                }
            }
        }

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
                        <div className="col-12" style={{ color: "red" }}>
                            {this.state.errMessage}
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

        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
