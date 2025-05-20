import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici tu peux ajouter ta logique d'envoi, API, etc.
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Formulaire de contact">
      <label htmlFor="name">Nom</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ton nom"
        required
        autoComplete="name"
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="ton.email@example.com"
        required
        autoComplete="email"
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Écris ton message ici..."
        required
        rows={5}
      />

      <button type="submit">Envoyer</button>

      {submitted && <p className="success-msg">Merci pour ton message !</p>}
    </form>
  );
};

export default ContactForm;
