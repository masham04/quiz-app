import React from "react";
import { Quiz } from "./Quiz";
import Home from './Home';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

function App() {
  navigator.serviceWorker.register("/sw.js");


  return (

    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/quiz' component={Quiz} exact />
    </Router>


  );
}

export default App;
