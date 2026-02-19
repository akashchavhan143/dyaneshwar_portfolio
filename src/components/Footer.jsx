import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { footer } from '../data/portfolioData';

/**
 * Footer Component
 * Professional footer with signature and scroll to top
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative" style={{ backgroundColor: 'var(--color-dark-background)' }}>
      <div className="container-custom section-padding py-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-dark-text-primary)' }}>
              DNYANESHWAR JAYRAM JADHAV
            </h3>
            <p className="text-lg mb-4" style={{ color: 'var(--color-dark-text-secondary)' }}>
              Social Work Professional | MSW Student
            </p>
            <div className="flex items-center justify-center gap-2">
              <span style={{ color: 'var(--color-dark-text-secondary)' }}>
                Made with
              </span>
              <Heart className="text-red-500" size={20} fill="currentColor" />
              <span style={{ color: 'var(--color-dark-text-secondary)' }}>
                for Social Development
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-8 mt-8"
            style={{ borderTop: '1px solid var(--color-dark-border)' }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm" style={{ color: 'var(--color-dark-text-tertiary)' }}>
                <p className="mb-1">Sign: {footer.signature}</p>
                <p>Date: {footer.date}</p>
              </div>
              
              <p className="text-sm" style={{ color: 'var(--color-dark-text-tertiary)' }}>
                © {currentYear} {footer.signature}. All rights reserved.
              </p>

              <motion.button
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--color-primary)',
                  color: 'white'
                }}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
