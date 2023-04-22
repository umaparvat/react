import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Users = ({ match }) => <div>{match.url}</div>;

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
          <Link to="/users">Users</Link>{" "}
        </li>
      </ul>
      <hr />
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/users" Component={Users}/>
      </Routes>
    </div>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
)