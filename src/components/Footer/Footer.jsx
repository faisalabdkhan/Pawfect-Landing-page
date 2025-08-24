import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Linkedin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      {/* Keep decorative animated background */}
      <div className="footer-background">
        <div className="footer-shapes">
          <div className="footer-shape shape-1"></div>
          <div className="footer-shape shape-2"></div>
          <div className="footer-shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="company-info">
            <div className="company-header">
              <img src="/images/new-logo-in-white-paw.png" alt="PawFect Caring Logo" className="company-logo" />
            </div>
            <p className="company-description">
              Your reliable pet care partner! Get timely reminders for food, grooming, vaccinations,
              and insurance - all in one app. Because your pet deserves the best, always.
            </p>
          </div>

          {/* Right Sections */}
          <div className="right-sections">
            {/* HelpLine */}
            <div className="footer-section">
              <h4 className="section-title">HelpLine</h4>
              <ul className="section-list">
                <li><a href="#" className="section-link">Support</a></li>
                <li><a href="#" className="section-link">FAQs</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="section-title">Services</h4>
              <ul className="section-list">
                <li><a href="#" className="section-link">Health</a></li>
                <li><a href="#" className="section-link">Grooming</a></li>
                <li><a href="#" className="section-link">Food</a></li>
                <li><a href="#" className="section-link">Insurance</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="footer-section">
              <h4 className="section-title">Contact Us</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <a href="mailto:pawfectcaring@gmail.com" className="contact-link">support@pawfectcaring.com</a>
                </div>
                <div className="social-media">
                  <a href="https://www.facebook.com/pawfect.caring/" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">
                      <Facebook className="social-icon-svg" />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/pawfect_caring/?igsh=eTVxY3g1Z2JldGM1#" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon instagram">
                      <Instagram className="social-icon-svg" />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/company/pawfect-caring/" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">
                      <Linkedin className="social-icon-svg" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider and Bottom */}
        <div className="footer-divider">
          <div className="footer-bottom">
            <p className="copyright">© 2025 Pawfectcaring. All Rights Reserved.</p>
            <div className="footer-links">
              <Link to="/terms" className="footer-link">Terms & Conditions </Link>
              <span className="link-separator"> | </span>
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            </div>
            <p className="venture">
              A venture by <a href="https://techflux.in/" target="_blank" rel="noopener noreferrer" className="venture-link">Techflux Solutions</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
