import React, { Component } from 'react';

// import { Home } from './site/home/Home';
// import { Header } from './site/home/Header';
// import { Footer } from './site/home/Footer';
// import { Splash } from './app/site/Splash';
// import { SiteNav } from './app/site/SiteNav'


import './App.scss';

import {
  BrowserRouter as Router,
  // Switch,
  // Route
} from 'react-router-dom';
// import { Button } from 'reactstrap';


class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     activate: false
  //   }
  // }

  // componentWillMount(){
    // const token = localStorage.getItem('token');
    // if(token && !this.state.sessionToken){
    //   this.setState({ sessionToken: token });
    // }
  // }
  // componentDidMount(){
    
   
  // }

  // toggleView = (e) => {
  //   if(e && this.state.activate){
  //     this.setState({ activate: true });
  //   }
  //   console.log(this.state._view);
  //   return this.state._view;
  // }

  // endSession = (_e) => {
  //   if(_e && !this.state._view[1]){
  //     this.setState({ activate: false });
  //   }
  //   console.log(this.state._view);

  //   return this.state._view;
  //   // localStorage.clear();
  // }

  // views = () => {
  //   if(this.state.sessionToken === localStorage.getItem('token')){
  //     return(
  //       <Switch>
  //         <Route path='/' exact>
  //           <Splash sessionToken={this.state.sessionToken} />
  //           <div className="logout" onClick={this.logout}>
  //             <p>logout.</p>
  //           </div>
  //           <DocitNav />
  //         </Route>
  //       </Switch>
  //     )
  //   } else {
  //     return(
  //       <Route path="/">
  //         <Jumbo />
  //         <Home setToken={this.setSessionToken} />
  //       </Route>
  //     )
  //   }
  // }


  render() {
    return (
      <div className="App">
        <Router>
          {/* <Header />
          <Home />
          <Footer />

          <hr />

          <Splash />
          <SiteNav /> */}

        </Router>
      </div>
    );
  }
}

export default App;