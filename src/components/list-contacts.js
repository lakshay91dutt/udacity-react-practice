import React, { Component } from 'react';
import PropTypes from 'prop-types'
class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        handleRemoveUser: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    handleQueryChange = (newQuery) => {
        this.setState({
            query: newQuery
        })
        
    }
    render() {
        return (
            <div className='list-contacts'>
                
                {/* Top Panel -> Contains search box and Add user button*/}
                <div className='list-contacts-top'>
                    {/* Search Panel */}
                    <input
                        type='text' placeholder='Search Employee'
                        className='search-contacts' value={this.state.query}
                        onChange={(event) => this.handleQueryChange(event.target.value)}>
                    </input>
                    {/* Add user */}
                    <div className='add-contact'></div>
                </div>

                <ol className='contact-list'>
                    {this.props.contacts.map((contact, index) => (
                        <li key={index} className='contact-list-item'>

                            {/* Avatar */}
                            <div className='contact-avatar' style={{ backgroundImage: `url(${contact.avatarUrl})` }}></div>

                            {/* Details of the Avatar */}
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>

                            {/* Delete user button */}
                            <button className='contact-remove' onClick={() => this.props.handleRemoveUser(contact)}></button>

                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}
export default ListContacts;