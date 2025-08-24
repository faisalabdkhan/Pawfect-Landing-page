import React, { useEffect } from 'react';
import './TermsOfUse.css';

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1>Terms & Conditions</h1>

        <h4>Effective Date: 5th August 2025</h4>
        <br />
        <p>Welcome to PawFect Caring, your trusted pet care reminders app. By accessing or using our app or website, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By using <strong>PawFect Caring</strong> (“we,” “our,” or “the App”), you (“User,” “you”) agree to be legally bound by these Terms. If you do not agree with any part, you must stop using the app and related services immediately.</p>
        </section>

        <section>
          <h2>2. About the App</h2>
          <p>PawFect Caring is a mobile application designed to:</p>
          <ul>
            <li>Help users manage daily and periodic pet care needs</li>
            <li>
              Provide timely reminders for:
              <ul>
                <li>Feeding schedules and food restocking</li>
                <li>Grooming sessions</li>
                <li>Veterinary vaccinations</li>
                <li>Pet insurance renewals reminder</li>
              </ul>
            </li>
          </ul>
          <p>
            <strong>Note:</strong> This app is a reminder tool and <strong>does not offer veterinary advice or medical treatment</strong>.<br />
            Consult a licensed veterinarian for any health-related concerns.
          </p>
        </section>

        <section>
          <h2>3. User Responsibilities</h2>
          <p>As a user, you agree to:</p>
          <ul>
            <li>Provide accurate and up-to-date information about your pet(s)</li>
            <li>Not use the app for illegal or abusive purposes</li>
            <li>Ensure that you do not solely rely on app notifications for critical pet care needs</li>
            <li>Keep your login credentials secure</li>
          </ul>
          <p>
            You are solely responsible for any consequences arising from incorrect data entries or missed reminders.
          </p>
        </section>

        <section>
          <h2>4. Account & Data Security</h2>
          <p>You are responsible for:</p>
          <ul>
            <li>Maintaining confidentiality of login details</li>
            <li>All activities occurring under your account
 We are not liable for any unauthorized access unless proven due to a breach on our side.</li>
          </ul>
        </section>

        <section>
          <h2>5. Intellectual Property Rights</h2>
          <p>All content, features, design elements, text, images, logos, and software in PawFect Caring are the exclusive property of the company and protected under intellectual property laws. You may not:</p>
          <ul>
            <li>Copy, reproduce, or distribute content</li>
            <li>Modify or reverse engineer any part of the app</li>
            <li>Use the brand or assets without written permission</li>
          </ul>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, PawFect Caring shall not be liable for:</p>
          <ul>
            <li>Loss or damage resulting from reliance on reminders</li>
            <li>Any errors, bugs, or temporary downtime of the app</li>
            <li>Loss of data due to technical issues or third-party services</li>
          </ul>
          <p>The app is provided "as is" and "as available."</p>
        </section>

        <section>
          <h2>7. Updates to the App and Terms</h2>
          <p>We reserve the right to:</p>
          <ul>
            <li>Update the app's functionality</li>
            <li>Change or add to these Terms at any time</li>
          </ul>
          <p>You will be notified of significant changes. Continued use after updates constitutes your acceptance of the changes.</p>
        </section>

        <section>
          <h2>8. Termination</h2>
          <p>We may terminate or suspend access to the app without prior notice if you violate any Terms or engage in misuse. Upon termination, your rights to use the app will cease immediately.</p>
        </section>
        
        <section>
          <h2>9. Contact Us</h2>
          <p>For questions, feedback or concerns regarding these Terms, contact us at: support@pawfectcaring.com</p>
        </section>

        <div className="terms-footer">
          <button onClick={() => window.history.back()} className="back-button">
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse; 