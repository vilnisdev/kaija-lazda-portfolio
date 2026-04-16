
import resumeFile from '../assets/Kaija Lazda Resume.docx';

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><a href="https://www.flipsnack.com/895C9D5EFB5/design-is-final" target="_blank" rel="noopener noreferrer" className="nav-link">About Me</a></li>
                <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
                <li><a href="mailto:Kaija.Lazda@colorado.edu" className="nav-link">Contact</a></li>
                <li><a href="#experience" className="nav-link">Experience</a></li>
                <li><a href={resumeFile} target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
