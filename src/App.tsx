import { useState, useEffect } from "react";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Loader from "./loader";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

function App() {

  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>([]);

  // Simular carga inicial
  useEffect(() => {
    setTimeout(() => {
      setContacts([
        { id: 1, name: "Luis", phone: "123456" },
        { id: 2, name: "Carlos", phone: "987654" }
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  // Agregar contacto
  const addContact = (name: string, phone: string) => {
    const newContact: Contact = {
      id: Date.now(),
      name,
      phone
    };

    setContacts(prev => [...prev, newContact]);
  };

  // Eliminar contacto
  const deleteContact = (id: number) => {
    setContacts(prev =>
      prev.filter(contact => contact.id !== id)
    );
  };

  return (
    <>
      <h1>Contactos</h1>

      {loading ? (
        <Loader />
      ) : (
        <>
          <AddContact onAdd={addContact} />
          <ContactList
            contacts={contacts}
            onDelete={deleteContact}
          />
        </>
      )}
    </>
  );
}

export default App;
