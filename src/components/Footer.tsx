const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '40px 20px',
            borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            marginTop: '80px',
            fontFamily: "'Inter', sans-serif",
        }}>
            <p style={{ fontSize: '0.9rem', color: '#555', margin: '0 0 8px 0' }}>
                © 2026 Kaija Lazda.
            </p>
            <a
                href="mailto:Kaija.Lazda@colorado.edu"
                style={{
                    fontSize: '0.85rem',
                    color: '#888',
                    textDecoration: 'none',
                }}
            >
                Kaija.Lazda@colorado.edu
            </a>
        </footer>
    );
};

export default Footer;
