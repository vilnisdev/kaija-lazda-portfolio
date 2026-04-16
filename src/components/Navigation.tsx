import resumeFile from '../assets/Kaija Lazda Resume.docx';
import { useHamburgerMenu } from '../hooks/useHamburgerMenu';

const links = [
    { href: 'https://www.flipsnack.com/895C9D5EFB5/design-is-final', label: 'About Me', external: true },
    { href: '#portfolio', label: 'Portfolio', external: false },
    { href: 'mailto:Kaija.Lazda@colorado.edu', label: 'Contact', external: false },
    { href: '#experience', label: 'Experience', external: false },
    { href: resumeFile, label: 'Resume', external: true },
];

const Navigation = () => {
    const { isOpen, toggle, close, panelRef, toggleRef } = useHamburgerMenu();

    return (
        <nav className="main-nav" aria-label="Primary">
            <button
                ref={toggleRef}
                type="button"
                className="nav-toggle"
                aria-expanded={isOpen}
                aria-controls="nav-panel"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                onClick={toggle}
            >
                <span className={`nav-toggle-bar ${isOpen ? 'open' : ''}`} />
                <span className={`nav-toggle-bar ${isOpen ? 'open' : ''}`} />
                <span className={`nav-toggle-bar ${isOpen ? 'open' : ''}`} />
            </button>
            <div
                className={`nav-scrim ${isOpen ? 'open' : ''}`}
                aria-hidden="true"
                onClick={close}
            />
            <div
                id="nav-panel"
                ref={panelRef}
                className={`nav-panel ${isOpen ? 'open' : ''}`}
            >
                <ul>
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                target={link.external ? '_blank' : undefined}
                                rel={link.external ? 'noopener noreferrer' : undefined}
                                className="nav-link"
                                onClick={close}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
