import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Contacts from "./containers/Contacts/Contacts";
import NewContact from "./containers/NewContact/NewContact";
function App() {
  return (
    <BrowserRouter>
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
