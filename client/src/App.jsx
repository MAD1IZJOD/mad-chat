import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import VerifyOTP from './pages/VerifyOTP';
import SetupProfile from './pages/SetupProfile';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Status from './pages/Status';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/verify-otp" component={VerifyOTP} />
        <Route path="/setup-profile" component={SetupProfile} />
        <Route path="/home" component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/status" component={Status} />
      </Switch>
    </Router>
  );
};

export default App;
