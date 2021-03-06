import React, { Component } from "react";
import * as Redux from "react-redux";

import * as actions from "actions";

class Login extends Component {
    handleGoogleLogin = () => {
        const { dispatch } = this.props;

        dispatch(actions.startGoogleLogin());
    };

    handleGithubLogin = () => {
        const { dispatch } = this.props;

        dispatch(actions.startGithubLogin());
    };

    render() {
        return (
            <div className="text-center div-login box-material">
                <p>Hi, welcome to the React Personal Finance Manager.</p>
                <p>
                    Please, login with your Google or Github account to continue
                </p>
                <button
                    className="button button-github"
                    onClick={this.handleGithubLogin}
                >
                    <i className="fa fa-github" aria-hidden="true" />
                    {" "}
                    Login with Github
                </button>
                <button
                    className="button button-google"
                    onClick={this.handleGoogleLogin}
                >
                    <i className="fa fa-google" aria-hidden="true" />
                    {" "}
                    Login with Google
                </button>
            </div>
        );
    }
}

export default Redux.connect()(Login);
