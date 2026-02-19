import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Globe, Sparkles } from 'lucide-react';
import { careerObjective, personalAttributes, personalInfo } from '../data/portfolioData';

/**
 * About Section Component
 * Displays career objective and personal attributes
 * Enhanced with modern card design and animations
 */
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="about" 
      className="section-padding" 
      style={{ backgroundColor: 'var(--color-background-alt)' }} 
      ref={ref}
    >
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-subtitle"
        >
          Driven by passion for social development and community empowerment
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Career Objective Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center icon-container group-hover:scale-110 transition-transform">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                Career Objective
              </h3>
            </div>
            <p className="leading-relaxed text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              {careerObjective}
            </p>
          </motion.div>

          {/* Personal Attributes Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center icon-container group-hover:scale-110 transition-transform">
                <Sparkles className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                Personal Attributes
              </h3>
            </div>
            <ul className="space-y-4">
              {personalAttributes.map((attribute, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--color-primary)' }} />
                  <span className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>{attribute}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
              <div className="flex items-center gap-2 mb-2">
                <Globe size={20} className="text-primary" />
                <span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>Languages</span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                {personalInfo.languages.join(', ')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
