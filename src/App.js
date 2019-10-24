import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Dashboard from './Components/dashboard/Dashboard'
import ProjectDetails from './Components/project/ProjectDetails'
import SignUp from './Components/auth/SignUp';
import Signin from './Components/auth/Signin';
import CreateProject from './Components/project/CreateProject'
class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={ Dashboard } />
        <Route path='/project/:id' component={ ProjectDetails } />
        <Route path='/signin' component={Signin}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/createproject' component={CreateProject}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
