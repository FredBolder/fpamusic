
import Login from './Components/Login';
import Profile from './Components/Profile';
import {useState,useContext} from 'react'
import { LoginContext } from './Context/LoginContext';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import { Link } from 'react-router-dom';

function App() {
  const[showProfile,setshowProfile] = useState(false);
  const[username,setUsername ] = useState("");
  return (
    <div className ="App">
      <LoginContext.Provider value = {{username,setUsername,setshowProfile  }}>
      {showProfile? <Profile/> :  <Login/>}
      <BrowserRouter>
      <Link to ="/home">Home</Link>
      <Link to ="/about">About</Link>
         <Routes>
          <Route path="/" exact element={Home} />
          <Route path="/about" element={About} />

        </Routes>
        </BrowserRouter>
       
      </LoginContext.Provider> 
      </div>
  );
}
  export default App;