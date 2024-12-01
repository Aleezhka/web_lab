import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import { FormWrapper, StyledInput, StyledButton } from './LoginPage.styled';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      alert('No user found');
      return;
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (isPasswordValid && user.email === email) {
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <FormWrapper>
      <h2>Submit the form to sign in</h2>
      <StyledInput 
        type="email" 
        placeholder="E-mail" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <StyledInput 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <StyledButton onClick={handleLogin}>Login me</StyledButton>
    </FormWrapper>
  );
};

export default LoginPage;
