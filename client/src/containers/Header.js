import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class Header extends Component {
    renderLinks() {
        if (this.props.auth) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to='/signout' className="nav-link">Sign Out</Link>
                    </li >
                    {/* <li className="nav-item active">
                        <Link to='/alluser' className="nav-link">All Users & Their Best Matche</Link>
                    </li > */}
                </ul>
            );
        } else {
            return (
                <div className="navbar-nav">
                    <Link to='/signup' className="nav-link">Sign up</Link>
                    <Link to='/signin' className="nav-link">Sign in</Link>
                </div>
            );
        }
    }

    render() {
        if (this.props.auth) {
            return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to='/main' className="navbar-brand">Doppleganger</Link>
                    {this.renderLinks()}
                </nav>
            )
        } else {
            return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to='/' className="navbar-brand">Doppleganger</Link>
                    {this.renderLinks()}
                </nav>
            )
        }
    }
}

function mapStateToProps({ auth }) {
    return { auth: auth.authenticated };
}

export default connect(mapStateToProps, null)(Header);

