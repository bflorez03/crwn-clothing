import React, { useState } from 'react';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { ButtonGroup, SignIpContainer, TitleContainer } from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignIpContainer>
      <TitleContainer>I already have an account</TitleContainer>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput type='email' name='email' handleChange={handleChange} value={email} label='email' required />
        <FormInput type='password' name='password' value={password} handleChange={handleChange} label='password' required />
        <ButtonGroup>
          <CustomButton type='submit'>Sing in</CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
            Sing in with Google
          </CustomButton>
        </ButtonGroup>
      </form>
    </SignIpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
