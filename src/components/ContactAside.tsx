const ContactAside: React.FC = () => {
  return (
    <aside
      data-testid="contact-aside"
      aria-labelledby="contact-aside-title"
      style={{
        flexShrink: 0,
        width: '300px',
        padding: '2rem',
        borderRadius: '1.5rem',
        backgroundColor: '#fbd6e3', // --rose
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
        position: 'sticky',
        top: '2rem',
        height: 'fit-content',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <h2
        id="contact-aside-title"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.8rem',
          color: '#5a2e99', // --text-main
          marginBottom: '1.2rem',
          borderBottom: '2px solid #f6b8d1',
          paddingBottom: '0.5rem',
        }}
      >
        Contact
      </h2>

      <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8', color: '#7a5ab6' }}>
        <li>
          📧 <strong>Email :</strong>{' '}
          <a href="mailto:barbeylise@gmail.com" style={{ color: '#5a2e99' }}>
            barbeylise@gmail.com
          </a>
        </li>
        <li>
          📞 <strong>Téléphone :</strong>{' '}
          <a href="tel:0633660338" style={{ color: '#5a2e99' }}>
            06 33 66 03 38
          </a>
        </li>
        <li>
          📍 <strong>Localisation :</strong>{' '}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Rennes+Saint-Malo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#5a2e99' }}
          >
            Rennes / Saint-Malo
          </a>
        </li>
        <li>
          💼 <strong>LinkedIn :</strong>{' '}
          <a
            href="https://www.linkedin.com/in/lise-barbey"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#5a2e99' }}
          >
            Lise Barbey
          </a>
        </li>
        <li>
          💻 <strong>GitHub :</strong>{' '}
          <a
            href="https://github.com/LeelooDallas-creator"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#5a2e99' }}
          >
            LeelooDallas
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default ContactAside;
