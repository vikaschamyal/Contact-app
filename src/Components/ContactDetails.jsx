import React from "react";
import { useParams } from "react-router-dom";

const ContactDetails = ({ Contacts }) => {
    const { id } = useParams(); // Extract the contact ID from the route
    const contact = Contacts.find((contact) => contact.id === parseInt(id));

    if (!contact) return <p>Contact not found.</p>;

    return (
        <div>
            <h2>Contact Details</h2>
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
        </div>
    );
};

export default ContactDetails;
