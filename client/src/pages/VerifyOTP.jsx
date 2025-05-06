import React, { useState } from 'react';

const VerifyOTP = () => {
  const [otp, setOtp] = useState('');
  
  const handleOTPVerification = () => {
    // OTP verification logic
  };

  return (
    <div className="verify-otp-page">
      <h1>Verify OTP</h1>
      <input 
        type="text" 
        placeholder="Enter OTP" 
        value={otp} 
        onChange={(e) => setOtp(e.target.value)} 
      />
      <button onClick={handleOTPVerification}>Verify</button>
    </div>
  );
};

export default VerifyOTP;
