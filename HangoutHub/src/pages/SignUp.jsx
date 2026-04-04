import React, { useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from 'firebase/auth';
import { auth } from '../firebase';
import './SignUp.css';

function SignUp() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        setSuccess("Successfully logged in! Welcome back.");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccess("Account created successfully! Welcome to HangoutHub.");
      }
      setEmail('');
      setPassword('');
      // Usually you'd redirect using useNavigate here instead of showing success
    } catch (err) {
      console.error(err);
      let errorMessage = "Authentication failed.";
      
      // Map Firebase errors to user-friendly messages
      if (err.code === 'auth/email-already-in-use') {
        errorMessage = "An account with this email already exists.";
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = "Please enter a valid email address.";
      } else if (err.code === 'auth/weak-password') {
        errorMessage = "Password should be at least 6 characters.";
      } else if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        errorMessage = "Invalid email or password.";
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-glass-box">
        <h2>{isLogin ? 'Welcome Back' : 'Join the Club'}</h2>
        <p className="subtitle">
          {isLogin 
            ? 'Sign in to see where your friends are hanging out.' 
            : 'Discover real-world experiences together.'}
        </p>

        <div className="tabs-container">
          <div className={`tab-slider ${isLogin ? 'login' : 'signup'}`}></div>
          <button 
            type="button" 
            className={`tab-button ${isLogin ? 'active' : ''}`}
            onClick={() => { setIsLogin(true); setError(null); setSuccess(null); }}
          >
            Login
          </button>
          <button 
            type="button" 
            className={`tab-button ${!isLogin ? 'active' : ''}`}
            onClick={() => { setIsLogin(false); setError(null); setSuccess(null); }}
          >
            Sign Up
          </button>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email"
              className="auth-input"
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              className="auth-input"
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className={`auth-button ${isLogin ? '' : 'signup-mode'}`} 
            disabled={loading}
          >
            {loading 
              ? 'Please wait...' 
              : (isLogin ? 'Log In' : 'Sign Up')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
