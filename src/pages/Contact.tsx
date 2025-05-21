import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé !");
    // En prod : envoyer via emailjs, API, etc.
  };

  return (
    <section style={{
      maxWidth: '600px',
      margin: '3rem auto',
      background: 'var(--rose)',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
    }}>
      <h2 style={{
        fontFamily: 'var(--font-title)',
        fontSize: '2rem',
        color: 'var(--text-main)',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        Me contacter
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom" style={{ display: 'block', marginBottom: '0.5rem' }}>Nom</label>
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="email" style={{ display: 'block', margin: '1rem 0 0.5rem' }}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="message" style={{ display: 'block', margin: '1rem 0 0.5rem' }}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          style={{ ...inputStyle, resize: 'vertical' }}
        />

        <button type="submit" style={{
          backgroundColor: 'var(--violet)',
          color: '#fff',
          fontWeight: 600,
          border: 'none',
          padding: '0.8rem 2rem',
          borderRadius: '0.5rem',
          marginTop: '1.5rem',
          cursor: 'pointer',
          width: '100%'
        }}>
          Envoyer
        </button>
      </form>
    </section>
  );
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.8rem',
  borderRadius: '0.5rem',
  border: '1px solid #ccc',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
};

export default ContactForm;
