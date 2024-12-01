import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import { FormWrapper, StyledInput, StyledButton } from './RegisterPage.styled';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    
    const user = {
      username,
      email,
      password: hashedPassword,
    };

    localStorage.setItem('user', JSON.stringify(user));
    navigate('/home');
  };

  return (
    <FormWrapper>
      <h2>Register the new account</h2>
      <StyledInput 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
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
      <StyledInput 
        type="password" 
        placeholder="Retype password" 
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)} 
      />
      <StyledButton onClick={handleRegister}>Sign me up</StyledButton>
    </FormWrapper>
  );
};

export default RegisterPage;
