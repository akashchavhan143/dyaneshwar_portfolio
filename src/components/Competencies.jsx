import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Hospital, Users, ClipboardList, Network, MapPin, Award } from 'lucide-react';
import { competencies } from '../data/portfolioData';

const iconMap = {
  Hospital,
  Users,
  ClipboardList,
  Network,
  MapPin,
  Award
};

/**
 * Competency Card Component
 * Enhanced card with hover effects and animations
 */
const CompetencyCard = ({ item, index, isInView }) => {
  const IconComponent = iconMap[item.icon] || Award;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card text-center group"
      whileHover={{ y: -8 }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 icon-container group-hover:scale-110 transition-transform">
        <IconComponent className="text-primary" size={28} />
      </div>
      <h3 className="text-base md:text-lg font-bold leading-snug" style={{ color: 'var(--color-text-primary)' }}>
        {item.title}
      </h3>
    </motion.div>
  );
};

/**
 * Competencies Section Component
 * Grid layout of core competencies
 */
const Competencies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="competencies" 
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
          <h2 className="section-title">Core Competencies</h2>
          <p className="section-subtitle">
            Key skills and expertise in healthcare and social work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {competencies.map((item, index) => (
            <CompetencyCard key={index} item={item} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competencies;
