// App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Header from './Header/Header';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Payment from './pages/Payment/Payment';
import Trial from './pages/Trial/Trial';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Terms from './pages/Termscon/Terms';

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
          <Route path="/trial" component={Trial}></Route>
          <Route path="/sub-plan" component={Subscription}></Route>
          <Route path="/policy" component={PrivacyPolicy}></Route>
          <Route path="/terms" component={Terms}></Route>
          <Route path="/payment" component={Payment}></Route>
     
        </Switch>


        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

