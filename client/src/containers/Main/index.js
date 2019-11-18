import React, { Component } from 'react';
import { initUpload } from './../../actions';
import { loadData } from './../../actions';
import { turnoffErrorMessage } from './../../actions';
import { connect } from 'react-redux';
import Header from './../../containers/Header.js';
import Jumbotron from './../../containers/Jumbotron.js';
import './main.css'
import { Card, ListGroup, Row, Col, CardDeck } from 'react-bootstrap';


class Main extends Component {

    componentDidMount() {
        this.props.loadData()
    }

    renderMatches = () => {
        if (this.props.matches.length === 0) {
            console.log('loading')
            return <p>Loading...</p>
        } else {
            console.log(this.props.matches)
            return (this.props.matches.map((match, index) => {
                return (
                    <Card key={index} style={{ width: '15rem' }} className='mb-3'>
                        <Card.Img variant="top" src={match.celeb.url} />
                        <Card.Header>{match.celeb.name}</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Similarity Level: {match.confidence}</ListGroup.Item>
                        </ListGroup>
                    </Card>
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

                <h1 className='text-center'>Your Profile Page</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <h3 id="status" className="text-center">Please Select A File</h3>
                            <img style={{ border: "1px solid gray", width: "100%" }} id="preview" src={this.props.data.url ? this.props.data.url : this.props.image_url} alt="profile_image" />
                            <input type="file" id="file-input" onChange={this.props.initUpload} />
                        </div>
                        <div className="col-md-9 offset-md-1">
                            <CardDeck>
                                {this.renderMatches()}
                            </CardDeck>
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
