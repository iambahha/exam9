import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Contacts from "./containers/Contacts/Contacts";
import NewContact from "./containers/NewContact/NewContact";
import {Container} from "reactstrap";
function App() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path="/" exact component={Contacts}/>
          <Route path="/new-contact" component={NewContact}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
