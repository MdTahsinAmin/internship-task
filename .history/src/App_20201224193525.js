
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import SignIn from "./Components/Authentication/SignIn";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Pages/Home/Home";
import Editing from "./Components/Pages/Share/Editing/Editing";
import Navigation from "./Components/Pages/Share/Navigation/Navigation";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
   const [loginUser,setLoginUser] = useState({

   });

  return (
   <UserContext.Provider value={[loginUser,setLoginUser]}>
    <Router>
       <Switch> 
         <PrivateRoute path='/home'>
           <Home></Home>
         </PrivateRoute>

        <PrivateRoute path='/order-editing'>
               <Navigation></Navigation>
               <Editing></Editing>
        </PrivateRoute>

        <Route path='/sign-in'>
              <Navigation></Navigation>
              <SignIn/>
         </Route>
         
         <PrivateRoute exact path='/'>
             <Home></Home>
         </PrivateRoute>

       </Switch>
    </Router>
   </UserContext.Provider>
  );
}

export default App;
