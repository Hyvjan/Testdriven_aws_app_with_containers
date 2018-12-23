import React from 'react';

const AddUser = (props) => {
    return (
        <form onSubmit={(event) => props.addUser(event)}>
            <div className="field">
                <input 
                    name="username"
                    className="input is-large"
                    type="text"
                    placeholder="Enter a username"
                    value={props.username}
                    onChange={props.handleChange}
                    required/>
            </div>
            <div className="field">
                <input 
                    name="email"
                    className="input is-large"
                    type="email"
                    value={props.email}
                    onChange={props.handleChange}
                    placeholder="Enter an email address"
                    required/>
            </div>
                <input 
                    className="button is-primary is-large is-fullwidth"
                    type="submit"
                    value="Submit"/>
        </form>
    )
};

export default AddUser;