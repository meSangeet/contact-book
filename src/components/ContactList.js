import React from "react";
import CardContact from "./ContactCard";
const ContactList = (props) => {
    console.log(props); //to be able to see the props in the console

    const renderContactList = props.contacts.map((contact) => {
        return (
            <CardContact contact={contact}/>
        );
    });
    return <div className = "ui celled list">{renderContactList}</div>
}

export default ContactList;