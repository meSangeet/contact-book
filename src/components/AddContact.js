import React from "react";

// now we will create a class component

class AddContact extends React.Component {
    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name "/>
                        </div>
                        <div className="field">
                        <label>Name</label>
                        <input type="email" name="Email" placeholder="Email "/>
                        </div>
                        </form>
                </div>
        );
    }
}