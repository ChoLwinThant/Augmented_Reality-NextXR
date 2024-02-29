// App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Header from './Header/Header';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Content from './pages/Content/Content';
import Experience from './pages/Experience/Experience';

import Footer from './Footer/Footer';
import Subscription from './pages/Subscription/Subscription';
<script src="https://kit.fontawesome.com/e57e6433be.js" crossorigin="anonymous"></script>
const App = () => {
  return (
    <div>

      <Router>
        <Header />
        {/* Other content of your application */}


        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/sub-plan" component={Subscription}></Route>
          <Route path="/content" component={Content}></Route>
          <Route path="/exp" component={Experience}></Route>
        </Switch>


        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

