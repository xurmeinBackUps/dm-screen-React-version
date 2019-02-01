import React, { Component } from 'react';



import {
  BrowserRouter as Router,
  // Switch,
  // Route
} from 'react-router-dom';
// import { Button } from 'reactstrap';



import './App.scss';

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

  // views = (event) => {
  //   if(event && this.state.noSession){
  //     this.setState({ activate: true});
  //     return (
  //       <div className="App">
  //         <Switch>
  //           <Route path="/interface">



  //             <div className="view-btn-container">
  //               <button className="view-btn" onClick={this.endSession}>
                  
  //               </button>
  //             </div>

  //           </Route>
  //         </Switch>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div className="App">
  //         <Route path="/" exact>
          
  //           <div className="view-btn-container">
  //             <button className="view-btn" onClick={this.activateSession}>
  //               ENTER
  //             </button>
  //           </div>

  //         </Route>
  //       </div>
  //     )
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Router>
          {/* {this.views()} */}

        </Router>
      </div>
    );
  }
}

export default App;