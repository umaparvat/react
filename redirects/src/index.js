import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes, Link, redirect} from 'react-router-dom'

const Home = () => <div>Home</div>;
const Error = () => <div>Error: Invalid User</div>;

const Users = ({ match }) => {
  console.log(match);
  var validUsers = ["abc", "def"];
  if (!validUsers.includes(match.params.id)) return <redirect to="/error" />;
  else return <div>Welcome: {match.params.id}</div>;
}
const DefaultRoute = () => <div>Default Route</div>;


const App = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/users:id' element={<Users/>}/>
        <Route path='/error' element={<Error/>}/>
        <Route Component={DefaultRoute}/>
      </Routes>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/users/abc'>Users abc</Link></li>
        <li><Link to='/users/invalid user'>Users: invalid user</Link></li>
      </ul>
    </div>  
  </BrowserRouter>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
)

