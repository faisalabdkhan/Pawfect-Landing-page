import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Cleanup: restore body scroll when component unmounts
      document.body.style.overflow = 'unset';
    };
  }, []);

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    
    // Prevent body scroll when menu is open
    if (newMenuState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Contact Us", path: "/#footer" },
  ];

  const logoSrc = "/images/new-blue-logo-of-paw.png";

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="nav">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={logoSrc} alt="PawFect Caring Logo" className="logo-image" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="nav-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.techflux.pawfectcaring"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`} style={{display: isMenuOpen ? 'flex' : 'none'}}>
          <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
            <span className="close-icon">×</span>
          </button>
          <ul className="mobile-nav-menu">
            {navItems.map((item) => (
              <li key={item.name} className="mobile-nav-item">
                <Link
                  to={item.path}
                  className={`mobile-nav-link ${location.pathname === item.path ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="mobile-nav-item">
              <a
                href="https://play.google.com/store/apps/details?id=com.techflux.pawfectcaring"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mobile-cta"
                onClick={closeMenu}
              >
                Download App
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header; 