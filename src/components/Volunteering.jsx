import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Calendar, Users } from 'lucide-react';
import { volunteering } from '../data/portfolioData';

/**
 * Volunteering Card Component
 * Individual volunteering activity card
 */
const VolunteeringCard = ({ item, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card group"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" 
             style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
          <Heart style={{ color: 'var(--color-secondary)' }} size={20} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
            {item.role}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <Users size={16} style={{ color: 'var(--color-secondary)' }} />
            <p className="font-medium" style={{ color: 'var(--color-secondary)' }}>
              {item.organization}
            </p>
          </div>
          <div className="flex items-center gap-2 mb-3 px-3 py-1 rounded-full inline-flex" 
               style={{ backgroundColor: 'var(--color-background-alt)' }}>
            <Calendar size={14} style={{ color: 'var(--color-text-tertiary)' }} />
            <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {item.duration}
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Volunteering Section Component
 * Displays community service and volunteering activities
 */
const Volunteering = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="volunteering" 
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" 
               style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
            <Heart style={{ color: 'var(--color-secondary)' }} size={32} />
          </div>
          <h2 className="section-title">Volunteering</h2>
          <p className="section-subtitle">
            Dedicated community service and social initiatives
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {volunteering.map((item, index) => (
            <VolunteeringCard key={index} item={item} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
