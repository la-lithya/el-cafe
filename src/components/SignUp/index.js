import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { withFirebase } from '../Firebase';
import {Container, Form, FormInput, Button} from '../../styles/global_styles';
import {HOME, SIGN_UP} from '../../constants/routes';
import {compose} from 'recompose';
import styles from 'styled-components';


const Message = styles.p`
  margin: 10px;
`;
class SignUp extends Component {
  state = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
  }


  onSubmit = event => {
    const { email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...this.state });
        this.props.history.push(HOME)
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  shouldDisableButton = () => {
    const {
      username,
      email,
      passwordOne,
      passwordTwo
    } = this.state;
    return passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    return (
      <Container>
        <h1>SignUp</h1>
        <Form onSubmit={this.onSubmit}>
        <FormInput
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <FormInput
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <FormInput
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <FormInput
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <Button disabled={this.shouldDisableButton()} type="submit">Sign Up</Button>

        {error && <p>{error.message}</p>}
        </Form>
        <Message>
        Don't have an account? <Link to={SIGN_UP}>Sign Up</Link>
      </Message>
      </Container>
    )
  }
}

export default compose(withFirebase, withRouter)(SignUp);


