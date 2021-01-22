import React from 'react';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { ButtonGroup, SignUpContainer, TitleContainer } from './sign-up.styles';
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    signUpStart({displayName, email, password});
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <TitleContainer>I do not have an account</TitleContainer>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit} className='sign-up-form'>
          <FormInput type='text' name='displayName' value={displayName} handleChange={this.handleChange} label='Display Name' required />
          <FormInput type='email' name='email' value={email} handleChange={this.handleChange} label='Email' required />
          <FormInput type='password' name='password' value={password} handleChange={this.handleChange} label='Password' required />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <ButtonGroup>
            <CustomButton type='submit'>SIGN UP</CustomButton>
          </ButtonGroup>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
