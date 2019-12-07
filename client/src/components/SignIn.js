import React, { Component } from 'react';
import { Button, Form, Container, Message, Input, Header } from 'semantic-ui-react';
import Navbar from '../containers/Header';
import Jumbotron from '../containers/Jumbotron.js';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = () => {
        this.props.signIn(this.state, () => {
            this.props.history.push('/Main');
        });
    }

    render() {
        const { errorMessage } = this.props;
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <Container>
                    <Header as='h1'>Sign in below</Header>
                    <Form>

                        <Form.Field>
                            <label>Email</label>
                            <input type='text'
                                placeholder='Email'
                                name='email'
                                component='input'
                                autoComplete='none'
                                onChange={this.handleChange} />
                        </Form.Field>

                        <Form.Field>
                            <label>Password</label>
                            <Input type='password'
                                name='password'
                                component='input'
                                autoComplete='none'
                                placeholder='Password'
                                onChange={this.handleChange} />
                        </Form.Field>

                        <Message
                            negative
                            hidden = {errorMessage ? false : true}>
                            <Message.Header>{errorMessage}</Message.Header>
                        </Message>
                        <Button
                            type='submit' onClick={this.onSubmit}>Sign in</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default SignIn;