import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

/**
 * Contact Section Component
 * Contact form and information with social links
 * Enhanced with modern design and animations
 */
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Placeholder for form submission logic
    setTimeout(() => {
      alert('Form submission feature - Please integrate with your backend or email service');
      console.log('Form data:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { 
      icon: Phone, 
      label: 'Phone', 
      value: personalInfo.phone, 
      href: `tel:${personalInfo.phone}`,
      color: '#6366F1'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      value: personalInfo.email, 
      href: `mailto:${personalInfo.email}`,
      color: '#10B981'
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: personalInfo.location, 
      href: null,
      color: '#F59E0B'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0A66C2' },
    { icon: Github, href: '#', label: 'GitHub', color: '#333' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' }
  ];

  return (
    <section 
      id="contact" 
      className="section-padding" 
      style={{ backgroundColor: 'var(--color-background)' }} 
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 icon-container">
            <MessageCircle className="text-primary" size={32} />
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's connect and discuss how we can work together for social development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${info.color}20` }}
                  >
                    <info.icon style={{ color: info.color }} size={20} />
                  </div>
                  <div>
                    <p className="text-sm mb-1" style={{ color: 'var(--color-text-tertiary)' }}>
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-lg font-semibold transition-colors hover:text-primary"
                        style={{ color: 'var(--color-text-primary)' }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ 
                      backgroundColor: 'var(--color-background-alt)',
                      border: '1px solid var(--color-border)'
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: social.color,
                      borderColor: social.color,
                      color: '#fff'
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="card space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-all"
                  style={{
                    backgroundColor: 'var(--color-background-alt)',
                    border: '2px solid var(--color-border)',
                    color: 'var(--color-text-primary)'
                  }}
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-all"
                  style={{
                    backgroundColor: 'var(--color-background-alt)',
                    border: '2px solid var(--color-border)',
                    color: 'var(--color-text-primary)'
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg transition-all resize-none"
                  style={{
                    backgroundColor: 'var(--color-background-alt)',
                    border: '2px solid var(--color-border)',
                    color: 'var(--color-text-primary)'
                  }}
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
