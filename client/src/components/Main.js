import React, { Component } from 'react';
import { Card, Message } from "semantic-ui-react";
import Header from './../containers/Header';
import Jumbotron from './../containers/Jumbotron';
import CelebCard from './../containers/Cards';


class Main extends Component {

    componentDidMount() {
        this.props.loadData()
    }

    renderMatches = () => {
        if (this.props.matches.length === 0) {
            return <p>Hi {this.props.data.email}! Upload a photo to see your Doppelgangers.</p>
        } else {
            return (this.props.matches.map((match, index) => {
                return (
                    <CelebCard key={index} {...match} />
                )
            }))
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div>
                    <Header />
                    <Jumbotron />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <h3 id="status" className="text-center">Please Select A File</h3>
                            <img style={{ border: "1px solid gray", width: "100%" }} src={this.props.data.url ? this.props.data.url : this.props.image_url} alt="profile_image" />
                            <input type="file" id="file-input" onChange={() => this.props.initUpload(this.props.data._id)} />
                        </div>
                        <div className="col-md-9 offset-md-1">
                            <Card.Group itemsPerRow={5}>
                                {this.renderMatches()}
                            </Card.Group>
                        </div>
                    </div>
                    <Message
                        negative
                        hidden={this.props.errorMessage ? false : true}>
                        <Message.Header>{this.props.errorMessage}</Message.Header>
                    </Message>
                </div>

            </div>
        )
    }
}

export default Main;