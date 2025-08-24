import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1>Privacy Policy</h1>

        <section>
          <h4>Effective Date: 5th August 2025</h4>
          <br />
          <p>At PawFect Caring, your privacy is our top priority. This Privacy Policy explains how we collect, use, protect, and share your personal information.</p>
        </section>

        <section>
          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of data when you use our services:</p>

          <p><strong>a) Personal Information</strong></p>
          <ul>
            <li>Your name, email address, phone number (optional)</li>
            <li>Pet names, age, breed, health info</li>
          </ul>

          <p><strong>b) Usage Data</strong></p>
          <ul>
            <li>App activity logs</li>
            <li>Frequency of reminders used</li>
            <li>Feedback and support queries</li>
          </ul>

          <p><strong>c) Device &amp; Technical Data</strong></p>
          <ul>
            <li>Device type, OS, and app version</li>
            <li>IP address (for security)</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul>
            <li>Send pet care reminders and notifications</li>
            <li>Personalize your app experience</li>
            <li>Monitor app performance and fix bugs</li>
            <li>Communicate updates and customer support</li>
          </ul>
          <p><strong>We do not sell or rent your personal data to anyone.</strong></p>
        </section>

        <section>
          <h2>3. Data Security</h2>
          <p>We take precautions to protect your data using:</p>
          <ul>
            <li>Encrypted storage solutions</li>
            <li>Secure API calls</li>
            <li>Access control for internal systems</li>
          </ul>
          <p>Although we use best practices, no system is 100% secure. Use at your own discretion.</p>
        </section>

        <section>
          <h2>4. Cookies & Analytics</h2>
          <p>Our app may use cookies or similar technologies to:</p>
          <ul>
            <li>Track app performance</li>
            <li>Analyze usage trends</li>
            <li>Improve user experience</li>
          </ul>
            <p>You can choose to disable these through device settings, but it may affect functionality.</p>
        </section>

        <section>
          <h2>5. Your Rights</h2>
          <p>As a user, you can::</p>
          <ul>
            <li>Request a copy of your personal data</li>
            <li>Update or correct your data</li>
            <li>Ask us to delete your account and information</li>
            <li>Withdraw consent to receive communications</li>
          </ul>
          <p>To request changes, email us at support@pawfectcaring.com</p>
        </section>

        <section>
          <h2>6. Children's Privacy</h2>
          <p>PawFect Caring is not intended for use by children under 18 years of age. We do not knowingly collect information from minors without parental consent.</p>
        </section>

        <section>
          <h2>7. Data Retention</h2>
          <p>We retain your information for as long as your account is active or as needed to provide services. Upon account deletion, your data is wiped from our active systems within 30 days.</p>
        </section>

        <section>
          <h2>8. Policy Updates</h2>
          <p>This policy may be updated periodically. Changes will be posted on this page and effective immediately upon publication. We encourage you to review this page regularly.</p>
        </section>

        <section>
          <h2>9. Contact Us</h2>
          <p>Have questions about your data privacy? Contact our team:
support@pawfectcaring.com</p>
        </section>

        <div className="privacy-footer">
          <button onClick={() => window.history.back()} className="back-button">
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 