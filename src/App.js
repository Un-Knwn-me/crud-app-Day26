import { Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import User from './Components/User';
import Auth from './Components/Auth';
import CreateUser from './Components/CreateUser';
import NoPage from './Components/NoPage';
import EditUser from './Components/EditUser';
import { data } from './Data/data';
import { useState } from 'react';
import Profile from './Components/Profile';
import { profile } from './Data/data.js'
import EditProfile from './Components/EditProfile';

function App() {
  const [userData, setUserData] = useState(data);
  const [profileData, setProfileData] = useState(profile);

  return (
    <div className="App">
      
      <Switch>

        <Route exact path="/">
          <Auth/>
        </Route>

        <Route path="/dashboard">
          <Dashboard/>
        </Route>

        <Route path="/user">
          <User
          userData={userData}
          setUserData={setUserData}
          />
        </Route>

        <Route path="/create-user">
          <CreateUser
          userData={userData}
          setUserData={setUserData}/>
        </Route>

        <Route path="/edit-user/:id">
          <EditUser
          userData={userData}
          setUserData={setUserData}
          />
        </Route>

        <Route path="/profile">
          <Profile
          profileData={profileData}
          setProfileData={setProfileData}
          />
        </Route>

        <Route path="/edit-profile/:id">
          <EditProfile
          profileData={profileData}
          setProfileData={setProfileData}
          />
        </Route>

        <Route path="**">
          <NoPage/>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
