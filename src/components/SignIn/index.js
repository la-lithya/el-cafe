import React from 'react';
import {Container, Form, FormInput, Button} from '../../styles/global_styles';import { SignUpLink } from '../SignUp';

const SignInPage = () => {
  return (
    <Container>
      <h1>SignIn</h1>
      <SignInForm />
      <SignUpLink />
    </Container>
  )
};

class SignInFormBase extends Component {
  state = {
    email: '',
  password: '',
  error: null
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <FormInput
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <FormInput
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <Button disabled={isInvalid} type="submit">
          Sign In
        </Button>

        {error && <p>{error.message}</p>}
      </Form>
    );
  }


}


const SignInForm = compoose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };


