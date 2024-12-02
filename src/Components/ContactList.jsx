import React from "react";
import { Link } from "react-router-dom";
import '../Styles/ContactList.css'

const ContactList = ({ Contacts, removeContactHandler }) => {
    return (
        <div>
            <h2>Contact List</h2>
            <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
            </Link>
            <ul>
                {Contacts.map((contact) => (
                    <li key={contact.id}>
                        <Link to={`/contact/${contact.id}`}>
                            {contact.name} - {contact.email}
                        </Link>
                        <button
                            onClick={() => removeContactHandler(contact.id)}
                            style={{
                                marginLeft: "10px",
                                backgroundColor: "red",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
