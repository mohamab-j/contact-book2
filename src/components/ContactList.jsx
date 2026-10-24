import ContactItem from "./ContactItem.jsx";

export default function ContactList({ contacts, totalCount, filterText, onDelete }) {
  // Empty state: nothing saved yet
  if (totalCount === 0) {
    return <p className="empty">No contacts yet. Add one above!</p>;
  }

  // Filter hid everything
  if (contacts.length === 0) {
    return <p className="empty">No matches found for ‘{filterText}’</p>;
  }

  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
}
