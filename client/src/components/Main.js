import React, { Component } from 'react';
import { Card } from "semantic-ui-react";
import Header from './../containers/Header';
import Jumbotron from './../containers/Jumbotron';
import CelebCard from './../containers/Cards';


class Main extends Component {

    componentDidMount() {
        this.props.loadData()
    }

    renderMatches = () => {
        if (this.props.matches.length === 0) {
            console.log(this.props.matches)
            return <p>Hi {this.props.data.email}! Upload a photo to see your Doppelgangers.</p>
        } else {
            console.log(this.props.matches)
            return (this.props.matches.map((match, index) => {
                return (
                    <CelebCard key={index} {...match} />
                )
            }))
        }
    }

    render() {
        console.log(this.props)
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
                            <img style={{ border: "1px solid gray", width: "100%" }} src={data[image_url] ? data[image_url] : data.data.user.url} alt="profile_image" />
                            <input type="file" id="file-input" onChange={() => this.props.initUpload(this.props.data._id)} />
                        </div>
                        <div className="col-md-9 offset-md-1">
                            <Card.Group itemsPerRow={5}>
                                {this.renderMatches()}
                            </Card.Group>
                        </div>
                    </div>
                    <div className="alert alert-danger" role="alert" style={{ opacity: this.props.errorMessage ? 1 : 0, marginBottom: 10 }}>
                        <div className="offset-md-2">{this.props.errorMessage}</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Main;