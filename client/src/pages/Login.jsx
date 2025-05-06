import React, { useState } from 'react';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const handleLogin = () => {
    // Handle login logic
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <input 
        type="text" 
        placeholder="Enter phone number" 
        value={phoneNumber} 
        onChange={(e) => setPhoneNumber(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
