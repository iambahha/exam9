import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Contacts from "./containers/Contacts/Contacts";
import NewContact from "./containers/NewContact/NewContact";
import NavBar from "./components/Navbar/NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div>
        <Switch>
          <Route path="/" exact component={Contacts}/>
          <Route path="/new-contact" component={NewContact}/>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
