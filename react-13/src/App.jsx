import React from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contact from './components/Contact';
import Contacts from './components/Contacts';
import Container from './components/Container'

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Topbar />
        <Container>
          <Filters /> 
        </Container>
        <Container>
          <Contacts>
            <Contact />
          </Contacts>
        </Container>
      </React.Fragment>
    )
  }
}

export default App;
