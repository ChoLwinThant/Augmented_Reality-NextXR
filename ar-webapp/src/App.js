// App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Header from './Header/Header';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Footer from './Footer/Footer';
<script src="https://kit.fontawesome.com/e57e6433be.js" crossorigin="anonymous"></script>
const App = () => {
  return (
    <div>

      <Router>
        <Header />
        {/* Other content of your application */}


        <Switch>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>


        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

