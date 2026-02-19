import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/portfolioData';

/**
 * Experience Card Component
 * Individual experience item with modern card design
 */
const ExperienceCard = ({ item, index, isInView }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card group"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 icon-container group-hover:scale-110 transition-transform">
          <Briefcase className="text-primary" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
            {item.role}
          </h3>
          <div className="flex flex-wrap items-center gap-4 mb-3">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span className="font-medium" style={{ color: 'var(--color-primary)' }}>
                {item.organization}
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--color-primary-light)' }}>
              <Calendar size={14} className="text-primary" />
              <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
                {item.duration}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Responsibilities list */}
      <div className="space-y-3">
        <h4 className="font-semibold text-sm mb-3" style={{ color: 'var(--color-text-primary)' }}>
          Key Responsibilities:
        </h4>
        {item.responsibilities.map((responsibility, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: index * 0.15 + idx * 0.1 }}
            className="flex items-start gap-3 group/item"
          >
            <CheckCircle2 
              size={18} 
              className="flex-shrink-0 mt-0.5 text-primary group-hover/item:scale-110 transition-transform" 
            />
            <span style={{ color: 'var(--color-text-secondary)' }}>
              {responsibility}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

/**
 * Experience Section Component
 * Professional and field experience showcase
 */
const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="experience" 
      className="section-padding" 
      style={{ backgroundColor: 'var(--color-background-alt)' }} 
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
            <Briefcase className="text-primary" size={32} />
          </div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Hands-on experience in healthcare, community development, and social work
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid gap-8">
          {experience.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
