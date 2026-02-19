interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface Props {
  contacts: Contact[];
  onDelete: (id: number) => void;
}

function ContactList({ contacts, onDelete }: Props) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} - {contact.phone}
          <button onClick={() => onDelete(contact.id)}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

