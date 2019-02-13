import React, { Component } from 'react'

import ListContacts from './components/list-contacts'

class App extends Component {
  state = {
    contacts: [
      {
        'id': 'lakshay',
        'name': 'Lakshay Dutt',
        'email': 'lakshay91@gmail.com',
        'avatarUrl': 'https://cdn.iconscout.com/icon/free/png-256/account-profile-avatar-man-circle-round-user-30452.png'
      },
      {
        'id': 'lawliet',
        'name': 'L Lawliet',
        'email': 'l@gmail.com',
        'avatarUrl': 'https://cdn4.iconfinder.com/data/icons/mask/512/death-dead-batman-head-face-round-avatar-512.png'
      },
      {
        'id': 'kira',
        'name': 'Light',
        'email': 'light@gmail.com',
        'avatarUrl': 'https://cdn2.iconfinder.com/data/icons/super-hero/154/batman-comics-hero-avatar-head-mask-512.png'
      },
      {
        'id': 'manish',
        'name': 'Manish Jain',
        'email': 'manishJain@gmail.com',
        'avatarUrl': 'http://anderworx.com/wp-content/uploads/2018/09/cropped-Avatar-Round.png'
      }
    ]
  }

  removeContact = (delContact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter(element => element.id !== delContact.id)
    }))
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <ListContacts
          contacts={this.state.contacts}
          handleRemoveUser={this.removeContact}>
        </ListContacts>
      </div>
    );
  }
}

export default App;
