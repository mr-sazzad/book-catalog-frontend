import { useAppDispatch } from '@/redux/hooks';
import { createUser } from '@/redux/users/userSlice';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [_passwordMatch, setPasswordMatch] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const checkPasswordMatch = () => {
    setPasswordMatch(password === confirmPassword);
  };

  useEffect(() => {
    checkPasswordMatch();
    setIsFormValid(
      email !== '' && password !== '' && password === confirmPassword
    );
  }, [email, password, confirmPassword, checkPasswordMatch]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(createUser({ email: email, password: password }));

    setTimeout(() => {
      navigate('/');
    }, 2000);

    // Reset form fields
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button
          className={`sign-up-button ${!isFormValid ? 'disabled' : ''}`}
          type="submit"
          disabled={!isFormValid}
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-green-400">password must be 6 or big</p>
      <p className="text-green-400">username contain "@gmail.com"</p>
    </div>
  );
};

export default Signup;
