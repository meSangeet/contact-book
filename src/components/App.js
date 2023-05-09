import React, {useState, useEffect} from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
 const [contacts, setContacts] = useState([]);

 const addContactHandler = (contact) => {
  console.log(contact);
  setContacts([...contacts, contact]);
 };

 useEffect(() => {
 const retriveContacts =  localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))}, [contacts]);
 useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))}, [contacts]);
 
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;