import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Initialize EmailJS (replace with your public key from emailjs.com)
  useEffect(() => {
    emailjs.init('3qGFQuPWJ6gGHbBuO'); // Replace with your actual public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_thsxyj7', // Replace with your service ID
        'template_edat47b', // Replace with your template ID
        {
          to_email: 'maraballikwt@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email
        }
      );

      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <a href="mailto:maraballikwt@gmail.com">maraballikwt@gmail.com</a>
            </div>

            <div className="info-item">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/shaik-mahammad-sajid/" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com/in/shaik-mahammad-sajid/
              </a>
            </div>

            <div className="info-item">
              <h3>GitHub</h3>
              <a href="https://github.com/skmsajid/" target="_blank" rel="noopener noreferrer">
                github.com/skmsajid/
              </a>
            </div>

            <div className="info-item">
              <h3>Location</h3>
              <p>Badvel, Kadapa District, Andhra Pradesh, India</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}

            {error && (
              <div className="error-message">
                ✗ {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows="6"
                disabled={loading}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
