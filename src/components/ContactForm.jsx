import { useState } from "react";

const EMPTY = { name: "", email: "", phone: "" };

export default function ContactForm({ onAdd }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // clear that field's error as the user fixes it
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const found = {};
    if (!values.name.trim()) found.name = "Enter a name.";
    if (!values.email.trim()) {
      found.email = "Enter an email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
      found.email = "Enter an email like name@example.com.";
    }
    return found;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    onAdd({
      id: Date.now().toString(),
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
    });
    setValues(EMPTY);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          autoComplete="name"
        />
        {errors.name && <p className="error" id="name-error">{errors.name}</p>}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          autoComplete="email"
        />
        {errors.email && <p className="error" id="email-error">{errors.email}</p>}
      </div>

      <div className="field">
        <label htmlFor="phone">Phone <span className="hint">(optional)</span></label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          autoComplete="tel"
        />
      </div>

      <button type="submit" className="btn btn-primary">Add contact</button>
    </form>
  );
}
