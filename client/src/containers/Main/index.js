import React, { Component } from 'react';
import { initUpload } from './../../actions';
import { loadData } from './../../actions';
import { turnoffErrorMessage } from './../../actions';
import { connect } from 'react-redux';
import Header from './../../containers/Header.js';
import Jumbotron from './../../containers/Jumbotron.js';
import { stat } from 'fs';
import './main.css'


class Main extends Component {

    componentDidMount() {
        this.props.loadData()
    }


    render() {
        return (
            <div>
                <div>
                    <Header />
                    <Jumbotron />
                </div>
                <container>
                    <h1 className='text-center'>Your Profile Page</h1>
                    <br></br>
                    <br></br>
                    <hr />
                    <br></br>
                    <br></br>
                    <div className="Container">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-2">
                                <div className="row">
                                    <h3 id="status" className="text-center">Please Select A File</h3>
                                </div>

                                <br />
                                <br />

                                <div className="row text-center">
                                    <img style={{ border: "1px solid gray", width: "100%" }} id="preview" src={this.props.data.url ? this.props.data.url : this.props.image_url} alt="profile_image" />

                                    <br />

                                    <input type="file" id="file-input" onChange={this.props.initUpload} />
                                </div>
                            </div>

                            <div className="col-md-1">{JSON.stringify(this.props.matches)}</div>
                            <div className="col-md-1">{JSON.stringify(this.props.data)}</div>
                            <div className="col-md-5">
                                <div className="alert alert-danger" role="alert" style={{ opacity: this.props.errorMessage ? 1 : 0, marginBottom: 10 }}>
                                    <div className="offset-md-2">{this.props.errorMessage}</div>
                                </div>
                            </div>


                            <div className="col-md-5">

                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className='text-center'>Your Similar Celeberties</h3>
                                    </div>
                                </div>

                                <br />
                                <br />

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card">
                                            <img src={this.props.matches ? this.props.matches[0].celeb.url : ''} className="card-img-top" />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">{this.props.matches ? this.props.matches[0].celeb.name : 'Loading...'}</h5>
                                                <p className="card-text">Confidence:{this.props.matches ? this.props.matches[0].confidence : ''}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <img src="https://thenypost.files.wordpress.com/2016/12/608558788.jpg?quality=90&strip=all&w=618&h=410&crop=1" className="card-img-top" />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Your Similar Celeb1</h5>
                                                <p className="card-text">Confidence:</p>
                                                <a href="#" className="btn btn-warning">See the Image of your Celeb!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <br />
                                <br />

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card">
                                            <img src="https://i.ytimg.com/vi/8xfnjYYy2lM/maxresdefault.jpg" className="card-img-top" />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Your Similar Celeb1</h5>
                                                <p className="card-text">Confidence:</p>
                                                <a href="#" className="btn btn-warning">See the Image of your Celeb!</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <img src="https://nyppagesix.files.wordpress.com/2018/04/gettyimages-901333660.jpg?quality=90&strip=all&w=618&h=410&crop=1" className="card-img-top" />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Your Similar Celeb1</h5>
                                                <p className="card-text">Confidence:</p>
                                                <a href="#" className="btn btn-warning">See the Image of your Celeb!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </container>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        image_url: state.main.image_url,
        matches: state.main.matches,
        errorMessage: state.main.errorMessage,
        data: state.main.data,
        data_error: state.main.data_error
    }
}

export default connect(mapStateToProps, { initUpload, turnoffErrorMessage, loadData })(Main);
