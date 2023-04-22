// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route } from 'react-router-dom';

// const About = (props) => {
//   console.log(props.match)
//   console.log(props.location)
//   console.log(props.history)

//   return(
//     <div>
//       About
//     </div>
//   )
// }

// const App = (props) => {
//   return(
//   <div>
//     <BrowserRouter>
//       <Route path='/about' Component={About}/>    
//     </BrowserRouter>
//   </div>
//   )
// }






// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const AllUsers = () => {
  return (
    <div>
      Show All Users:
      <ul>
        <li>abc</li>
        <li>def</li>
        <li>ghi</li>
      </ul>
    </div>
  );
};
const Users = ({ match }) => <div>{match.params.id}</div>;
const DefaultRoute = () => <div>Default Route</div>;

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/info">Users: abc</Link>
        </li>
        <li>
          <Link to="/info">Show All Users</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="about" component={About} />
        <Route path="info" component={AllUsers} />
        <Route path="info" component={Users} />
        <Route component={DefaultRoute} />
      </Routes>
    </div>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

