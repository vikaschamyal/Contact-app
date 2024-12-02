import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header'

import Addcontacts from "./Components/Addcontacts";
import ContactList from "./Components/ContactList";
import ContactDetails from "./Components/ContactDetails";

function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [Contacts, setContacts] = useState(() => {
        const savedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        return savedContacts || [];
    });

    const addContactHandler = (data) => {
        const updatedContacts = [...Contacts, { ...data, id: Date.now() }];
        setContacts(updatedContacts);
    };

    const removeContactHandler = (id) => {
        const updatedContacts = Contacts.filter((contact) => contact.id !== id);
        setContacts(updatedContacts);
    };

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Contacts));
    }, [Contacts]);

    return (
        <div className="ui container">
            <Router>
                <Header />
                <br />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ContactList
                                Contacts={Contacts}
                                removeContactHandler={removeContactHandler}
                            />
                        }
                    />
                    <Route
                        path="/add"
                        element={<Addcontacts addContactHandler={addContactHandler} />}
                    />
                    <Route
                        path="/contact/:id"
                        element={<ContactDetails Contacts={Contacts} />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
