import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Home from './components/homePage';

class Apps extends Component {
 render(){
  // var Child;
  //  switch(this.props.route){
  //    case 'about' : Child = About; break;
  //    default: Child = Home;
  //  }
   return(
     <div>
     <Home/>
     <App/>
     </div>
   );

 }

};

function render(){
//  var route = window.location.hash.substr(1);
 ReactDOM.render(<Apps/>, document.getElementById('root'));
}
// window.addEventListener('hashchange', render);
render();

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
