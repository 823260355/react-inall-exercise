import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter} from "react-router-dom";
import Home from "./Home";
import Header from '../components/Header';
import Calculator from '../components/Calculator';
import Timer from '../components/Timer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
            <Route exact path='/' component={Home}/>
            <Route path='/calculator' component={Calculator}/> 
            <Route path='/timer' component={Timer}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
