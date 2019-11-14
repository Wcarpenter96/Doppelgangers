import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.css'


class Home extends Component {
    render() {
        return (
            <div className='width'>
                <div className="hovereffect">
                    <img className="img-responsive" src='https://media1.thehungryjpeg.com/thumbs2/ori_3602209_zjpfd1w7c3wn55xsxgdakki5nx5paz9eo6ow65tl_24-multicultural-national-avatars-people-cartoon-flat.png' alt="" />
                    <div className="overlay">
                        <h1>Here!</h1>
                        <div className="rotate">
                            <p className="group1">
                            <button type="button" className="btn btn-primary btn-lg">Sign In</button>
                            </p>
                            <hr />
                            <p className="group2">
                            <button type="button" className="btn btn-primary btn-lg">Sign Up</button>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Home;