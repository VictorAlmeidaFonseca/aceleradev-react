import React from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contact from './components/Contact';
import Contacts from './components/Contacts';
import Container from './components/Container'

import './App.scss';

const URL = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }
  
  componentDidMount() {
    fetch(URL)
     .then(response => response.json())
     .then((data) => {
        this.setState(
          {contacts: data}
        )
      }
    )
  }

  render() {
    return (
      <React.Fragment>
      <Topbar />
        
        <Container>
          <Filters /> 
        </Container>
        
        <Container>
          <Contacts>
           {this.state.contacts.map((contact) => (
             <Contact data={contact}/>
           ))}
            
          </Contacts>
        </Container>
      
      </React.Fragment>
    )
  }
}

export default App;
