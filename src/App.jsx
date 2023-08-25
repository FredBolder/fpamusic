import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { useState, useContext } from "react";
import { LoginContext } from "./Context/LoginContext";
import { DropdownMenu } from "bootstrap";
function App() {
  const [showProfile, setshowProfile] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <LoginContext.Provider value={{ username, setUsername, setshowProfile }}>
        {showProfile ? <Profile /> : <Login />}
     
      </LoginContext.Provider>
    </div>
  );
}

export default App;
