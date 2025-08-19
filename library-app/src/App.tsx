import { useState,useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage"
import type { User } from "./models/User";

function App() {

  const [displayLogin, setDisplayLogin] = useState<boolean>(true);
  const [loggedInUser, setLoggedInUser] = useState<User>();


  const updateLoggedInUser   = (user:User) =>{
    setLoggedInUser(user);
}


useEffect(()=>{
console.log(loggedInUser)
},[loggedInUser])

  return (
    <div>
      <HomePage displayLogin={displayLogin} updatedLoggedInUser={updateLoggedInUser}/>
    </div>
  )
}

export default App