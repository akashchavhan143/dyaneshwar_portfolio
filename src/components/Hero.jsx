import { motion } from 'framer-motion';
import { Download, MapPin, Phone, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

/**
 * Hero Section Component
 * Landing section with profile image, introduction, and CTA
 * Includes social media links and contact information
 */
const Hero = () => {
  const handleDownloadResume = () => {
    // Placeholder for resume download functionality
    alert('Resume download feature - Please link your actual resume file here');
  };

  // Social media links configuration
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0A66C2' },
    { icon: Github, href: '#', label: 'GitHub', color: '#333' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-background) 50%, var(--color-background-alt) 100%)'
      }}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20"
          style={{ background: 'var(--color-primary)' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'var(--color-secondary)' }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="badge text-sm">Social Work Professional</span>
              </motion.div>

              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {personalInfo.name}
              </h1>
              
              <p className="text-xl md:text-2xl gradient-text font-semibold mb-6">
                {personalInfo.title}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {personalInfo.introduction}
            </motion.p>

            {/* Contact Info Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}>
                <MapPin size={18} className="text-primary" />
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{personalInfo.location}</span>
              </div>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full hover:scale-105 transition-transform" 
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}
              >
                <Phone size={18} className="text-primary" />
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{personalInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full hover:scale-105 transition-transform" 
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}
              >
                <Mail size={18} className="text-primary" />
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{personalInfo.email}</span>
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                style={{ 
                  border: '2px solid var(--color-primary)',
                  color: 'var(--color-primary)'
                }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: social.color,
                    borderColor: social.color
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative max-w-md mx-auto">
              {/* Decorative background */}
              <div 
                className="absolute inset-0 rounded-full opacity-20 blur-3xl"
                style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
              />
              
              {/* Profile image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.pexels.com/photos/17311570/pexels-photo-17311570.jpeg"
                    alt={personalInfo.name}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 card p-4 shadow-xl"
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}>
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>MSW Student</p>
                    <p className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>Nirmala Niketan</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
