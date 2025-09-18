import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <span>Developed by Omer</span>
        <span>|</span>
        <a
          href="https://github.com/omercha/hyrule-cookbook"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          View on GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
