import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, MessageCircle, Instagram, Facebook } from 'lucide-react';
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
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dnyaneshwar-jadhav-ba3aaa252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
      color: "#0A66C2",
    },
    // { icon: Github, href: '#', label: 'GitHub', color: '#333' },
    {
      icon: Twitter,
      href: "https://www.instagram.com/dnyaneshwar_2310?igsh=MXMwN2gxZ2FkbnNyMQ==",
      label: "Twitter",
      color: "#1DA1F2",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/dnyaneshwar_2310?igsh=MXMwN2gxZ2FkbnNyMQ==",
      label: "Instgram",
      color: "#f21d41",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1FCyyA5aMx/",
      label: "facebook",
      color: "#1DA1F2",
    },
  ];
  return (
    <section 
      id="contact" 
      className="section-padding" 
      style={{ backgroundColor: 'var(--color-background)' }} 
      ref={ref}
    >
      <div className="container-custom max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-4 icon-container">
            <MessageCircle className="text-primary" size={28} />
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's connect and discuss how we can work together for social development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-text-primary)' }}>
              Contact Information
            </h3>
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {/* {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${info.color}20` }}
                  >
                    <info.icon style={{ color: info.color }} size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm mb-1" style={{ color: 'var(--color-text-tertiary)' }}>
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-base sm:text-lg font-semibold transition-colors hover:text-primary break-words block"
                        style={{ color: 'var(--color-text-primary)' }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base sm:text-lg font-semibold break-words" style={{ color: 'var(--color-text-primary)' }}>
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))} */}
              {contactInfo.map((info, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
          className="flex items-start gap-4"
        >
          {/* Icon */}
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${info.color}20` }}
          >
            <info.icon style={{ color: info.color }} size={18} />
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <p
              className="text-xs sm:text-sm mb-1"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              {info.label}
            </p>

            {info.href ? (
              <a
                href={info.href}
                className="block w-full text-base sm:text-lg font-semibold transition-colors hover:text-primary break-all"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {info.value}
              </a>
            ) : (
              <p
                className="w-full text-base sm:text-lg font-semibold break-all"
                style={{ color: 'var(--color-text-primary)' }}
              >
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
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ color: 'var(--color-text-primary)' }}>
                Connect With Me
              </h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300"
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
            <form onSubmit={handleSubmit} className="card space-y-4 sm:space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-xs sm:text-sm font-semibold mb-2"
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
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all text-sm sm:text-base"
                  style={{
                    backgroundColor: 'var(--color-background-alt)',
                    border: '2px solid var(--color-border)',
                    color: 'var(--color-text-primary)',
                    maxWidth: '100%'
                  }}
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-xs sm:text-sm font-semibold mb-2"
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
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all text-sm sm:text-base"
                  style={{
                    backgroundColor: 'var(--color-background-alt)',
                    border: '2px solid var(--color-border)',
                    color: 'var(--color-text-primary)',
                    maxWidth: '100%'
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-xs sm:text-sm font-semibold mb-2"
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
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all resize-none text-sm sm:text-base"
                  style={{
                    backgroundColor: 'var(--color-background-alt)',
                    border: '2px solid var(--color-border)',
                    color: 'var(--color-text-primary)',
                    maxWidth: '100%'
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
