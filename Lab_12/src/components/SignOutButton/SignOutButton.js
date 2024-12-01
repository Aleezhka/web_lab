import React from 'react';
import { useHistory } from 'react-router-dom';

const SignOut = () => {
  const history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem('email');
    history.push('/login');
  };

  return (
    <button onClick={handleSignOut}>Sign me out</button>
  );
};

export default SignOut;
