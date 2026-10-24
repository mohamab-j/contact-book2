export default function ContactItem({ contact, onDelete }) {
  const { id, name, email, phone } = contact;

  return (
    <li className="contact">
      <div className="avatar" aria-hidden="true">
        {name.charAt(0).toUpperCase()}
      </div>
      <div className="contact-info">
        <strong>{name}</strong>
        <a href={`mailto:${email}`}>{email}</a>
        {phone && <span>{phone}</span>}
      </div>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => onDelete(id)}
        aria-label={`Delete ${name}`}
      >
        Delete
      </button>
    </li>
  );
}
