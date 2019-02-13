import React, { Component } from 'react'
import PropTypes from 'prop-types'

import sortBy from 'sort-by'
import escapeRegExp from 'escape-string-regexp'

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
        let visibleUsers
        if (this.state.query) {
            const matchedUsers = new RegExp(escapeRegExp(this.state.query), 'i')
            //escapeRegExp() -> escape all the special case char in the provided the string
            //'i' -> ignore upper/lower-casing of the characters 
            //'Lakshay-Dutt' will be transformed to 'lakshaydutt'

            visibleUsers = this.props.contacts.filter((contact) => matchedUsers.test(contact.name))
            //Since matchedUsers is an object of RegExp
            // matchedUsers.test('Lakshay Dutt') will result TRUE
            
        }
        else {
            //if no query is performed -> show all contacts
            visibleUsers = this.props.contacts
        }

        visibleUsers.sort(sortBy('name'))
        return (
            <div className='list-contacts'>
                {/* Top Panel -> Contains search box and Add user button*/}
                <div className='list-contacts-top'>
                    {/* Search Panel */}
                    <input
                        type='text' placeholder='Search Employee' autoFocus
                        className='search-contacts' value={this.state.query}
                        onChange={(event) => this.handleQueryChange(event.target.value)}>
                    </input>
                    {/* Add user */}
                    <div className='add-contact'></div>
                </div>

                <ol className='contact-list'>
                    {visibleUsers.map((contact, index) => (
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