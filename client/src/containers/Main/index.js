import React, { Component } from 'react';
import {initUpload} from './../../actions';
import {turnoffErrorMessage} from './../../actions';
import { connect } from 'react-redux';
import { stat } from 'fs';


class Main extends Component {

    componentDidMount() {
        console.log('hello world')
    }
    
    
    render() {
        return (
            <div className="Container">
                <div className="row">
                    <div className="col offset-md-2">
                        <input type="file" id="file-input" onChange={this.props.initUpload}/>
                        <p id="status">Please select a file</p>
                        <img style={{ border: "1px solid gray", width: "300px" }} id="preview" src={this.props.image_url} alt="profile_image"/>
                    </div>
                </div>
                <div className="alert alert-danger" role="alert" style={{ opacity: this.props.errorMessage ? 1 : 0, marginBottom: 10 }}>
                    <div className="offset-md-2">{this.props.errorMessage}</div>
                    <div className="offset-md-2">{JSON.stringify(this.props.matches)}</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        image_url: state.main.image_url,
        matches: state.main.matches,
        errorMessage: state.main.errorMessage
    }
}

export default connect(mapStateToProps, { initUpload , turnoffErrorMessage })(Main);