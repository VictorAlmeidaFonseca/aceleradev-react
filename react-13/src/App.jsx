import React from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Contact from './components/Contact';
// import { compareFunction } from './utils/sortArray'

import './App.scss';

const URL = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      search: [] ,
    }
  }

  componentDidMount() {
    fetch(URL)
       .then(response => response.json())
       .then(data => this.setState({contacts: data}))
      
  }
  
  seachTextBox = (name) => {
    const { contacts, search } = this.state;
    const filteredContacts = contacts.filter(
      (contact) => {
        const values = contact.name
        return values.toLowerCase()
                     .includes(search)                           
      }
    )
    
    this.setState({
      search: filteredContacts,
    })

  }

  render() {
    const { search } = this.state
    
    const mappedContacts = search.map(contacts => <Contact data={contacts} key={contacts.id} /> )

    
    return (
      <React.Fragment>
        <Topbar />
        <Filters 
          search={search}
          onSearch={this.seachTextBox}
        />
        <Contacts>
          { mappedContacts }
        </Contacts>
      </React.Fragment>
    )
  }
}

export default App;
