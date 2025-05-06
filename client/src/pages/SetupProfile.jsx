import React, { useState } from 'react';

const SetupProfile = () => {
  const [username, setUsername] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const handleProfileSetup = () => {
    // Handle profile setup logic
  };

  return (
    <div className="setup-profile-page">
      <h1>Setup Profile</h1>
      <input 
        type="text" 
        placeholder="Enter Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="file" 
        onChange={(e) => setProfilePic(e.target.files[0])} 
      />
      <button onClick={handleProfileSetup}>Save</button>
    </div>
  );
};

export default SetupProfile;
