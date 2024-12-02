import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Addcontacts = ({ addContactHandler }) => {
    const [sampleData, setData] = useState({ name: "", email: "" });

    const add = (e) => {
        e.preventDefault();
        if (sampleData.name === "" || sampleData.email === "") {
            alert("All fields are mandatory");
            return;
        }
        // Pass data to parent using the handler
        addContactHandler(sampleData);
        setData({ name: "", email: "" }); // Reset form
    };

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={sampleData.name}
                        onChange={(e) =>
                            setData({ ...sampleData, name: e.target.value }) // Ensure both `name` and `email` stay in state
                        }
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={sampleData.email}
                        onChange={(e) =>
                            setData({ ...sampleData, email: e.target.value })
                        }
                    />
                </div>
                <button className="ui button blue right">Add</button>
                <br />
                <br />
                <Link to="/">
                    <button className="ui button blue right">Display Contacts</button>
                </Link>
            </form>
        </div>
    );
};

export default Addcontacts;
