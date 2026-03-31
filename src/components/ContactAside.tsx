const ContactAside: React.FC = () => {
  return (
    <aside
      className="contact-aside"
      data-testid="contact-aside"
      aria-labelledby="contact-aside-title"
    >
      <h2 id="contact-aside-title" style={{ fontFamily: 'var(--font-display)' }}>
        CONTACT
      </h2>
      <ul>
        <li>
          <span style={{ fontSize: '0.8rem' }}>@</span>
          <a href="mailto:barbeylise@gmail.com">barbeylise@gmail.com</a>
        </li>
        <li>
          <span style={{ fontSize: '0.8rem' }}>☎</span>
          <a href="tel:0633660338">06 33 66 03 38</a>
        </li>
        <li>
          <span style={{ fontSize: '0.8rem' }}>◎</span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Rennes+Saint-Malo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rennes / Saint-Malo
          </a>
        </li>
        <li>
          <span style={{ fontSize: '0.8rem' }}>in</span>
          <a
            href="https://www.linkedin.com/in/lise-barbey"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lise Barbey
          </a>
        </li>
        <li>
          <span style={{ fontSize: '0.8rem' }}>&lt;/&gt;</span>
          <a
            href="https://github.com/LeelooDallas-creator"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeelooDallas-creator
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default ContactAside;
