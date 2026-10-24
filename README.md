# Contact Book (React + Vite)

A single-page Contact Book built with React. Add, list, search and delete contacts. Data lives in memory for the session (no backend).

**Live site:** https://mohamab-j.github.io/contact-book2/
**Repository:** https://github.com/mohamab-j/contact-book2

## Features
- Controlled form (Name, Email, Phone) with client-side validation
- Contacts list rendered with `map` and stable `id` keys
- Case-insensitive search by name or email
- Delete a contact
- Empty state and “No matches found for ‘…’” state
- Responsive layout with visible focus states

## Components
`App` (owns `contacts` and `filterText`) → `ContactForm`, `SearchBar`, `ContactList` → `ContactItem`

## Run locally
```bash
npm install
npm run dev
```

## Screenshots
| Desktop | Tablet | Mobile |
|---|---|---|
| ![Desktop](screenshots/desktop.png) | ![Tablet](screenshots/tablet.png) | ![Mobile](screenshots/mobile.png) |
