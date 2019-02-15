import React, { Component } from 'react'
//import * as ContactsAPI from './util/contacts-api'
import ListContacts from './components/list-contacts'

class App extends Component {
  state = {
    contacts: [
      {
        'id': 'lakshay',
        'name': 'Lakshay Dutt',
        'email': 'lakshay91@gmail.com',
        'avatarUrl': 'https://media.licdn.com/dms/image/C5103AQEFvyCKLXmHgw/profile-displayphoto-shrink_200_200/0?e=1555545600&v=beta&t=3e8q0dGgR-oEi9DHhm5pfp51nRVzSNj4Xg3vGJtVvCo'
      },
      {
        'id': 'rahul',
        'name': 'Rahul Gupta',
        'email': 'l@gmail.com',
        'avatarUrl': 'https://cdn4.iconfinder.com/data/icons/mask/512/death-dead-batman-head-face-round-avatar-512.png'
      },
      {
        'id': 'Nitesh',
        'name': 'Nitesh',
        'email': 'nitesh@gmail.com',
        'avatarUrl': 'https://media.licdn.com/dms/image/C4D03AQHwabyOx3EubA/profile-displayphoto-shrink_800_800/0?e=1555545600&v=beta&t=PBCesZ90yaUt1WuL9dnxrvKfKwpHOJIHrpp999mSlC8'
      },
      {
        'id': 'manish',
        'name': 'Manish Jain',
        'email': 'manishJain@gmail.com',
        'avatarUrl': 'http://anderworx.com/wp-content/uploads/2018/09/cropped-Avatar-Round.png'
      }
    ]
  }

  // componentDidMount() {
  //   ContactsAPI.getAll().then((contacts) => this.setState({ contacts }))
  // }
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
