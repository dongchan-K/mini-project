import React from 'react';
import SignTemplate from '../components/SignTemplate';
import RegisterContainer from '../containers/RegisterContainer';

const SignupPage = () => {
  return (
    <SignTemplate>
      <RegisterContainer />
    </SignTemplate>
  );
};

export default SignupPage;