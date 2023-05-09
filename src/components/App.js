import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts =(props) => [
    {
      id: "1",
      name: "Sangeet",
      email: "abc@gmail.com",
    },
    {
      id: "1",
      name: "Jack",
      email: "def@gmail.com",
    },
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts()}/>
    </div>
  );
}

export default App;
