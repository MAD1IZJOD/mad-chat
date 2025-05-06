import React from 'react';
import ChatList from '../components/ChatList';
import StatusCard from '../components/StatusCard';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Mad Chat</h1>
      <ChatList />
      <StatusCard />
    </div>
  );
};

export default Home;
