import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import image from './default.jpg';

class Main extends Component {
    state = {
        image_url: image
    }

    uploadFile = (file, signedRequest, url) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', signedRequest);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('ura!')
                }
                else {
                    alert('Could not upload file.');
                }
            }
        };
        xhr.send(file);
    }

    getSignedRequest = (file) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `/api/aws/sign-s3?file-name=${file.name}&file-type=${file.type}`);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    this.setState({image_url: response.url});
                    this.uploadFile(file, response.signedRequest, response.url);
                }
                else {
                    alert('Could not get signed URL.');
                }
            }
        };
        xhr.send();
    }

    initUpload = () => {
        const files = document.getElementById('file-input').files;
        const file = files[0];
        if (file == null) {
            return alert('No file selected.');
        }
        this.getSignedRequest(file);
    }

    render() {
        return (
            <div className="Container">
                <div className="row">
                    <div className="col offset-md-2">
                        <input type="file" id="file-input" onChange={this.initUpload}/>
                        <p id="status">Please select a file</p>
                        <img style={{ border: "1px solid gray", width: "300px" }} id="preview" src={this.state.image_url} />
                    </div>
                </div>

            </div>
        )
    }
}

export default Main;