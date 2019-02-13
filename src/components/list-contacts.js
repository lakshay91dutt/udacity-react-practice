import React, { Component } from 'react';

const ListContacts = (props) => {
    return (
        <ol className='contact-list'>
            {props.contacts.map((contact, index) => (
                <li key={index} className='contact-list-item'>
                    {/* Avatar */}
                    <div className='contact-avatar' style={{ backgroundImage: `url(${contact.avatarUrl})` }}></div>
                    {/* Details of the Avatar */}
                    <div className= 'contact-details'>
                        <p>{contact.name}</p>
                        <p>{contact.email}</p>
                    </div>
                    {/* Delete user button */}
                    <button className = 'contact-remove'></button>
                </li>
            ))}
        </ol>
    );
}
export default ListContacts;