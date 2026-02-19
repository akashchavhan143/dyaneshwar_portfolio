import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, BookOpen } from 'lucide-react';
import { research } from '../data/portfolioData';

/**
 * Research Card Component
 * Individual research project card
 */
const ResearchCard = ({ item, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="card group"
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 icon-container group-hover:scale-110 transition-transform">
          <FileText className="text-primary" size={24} />
        </div>
        <div className="flex-1">
          <span className="badge mb-3 inline-block">
            {item.type}
          </span>
          <h3 className="text-lg md:text-xl font-bold mb-3 leading-snug" style={{ color: 'var(--color-text-primary)' }}>
            {item.title}
          </h3>
          <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Research Section Component
 * Academic research projects showcase
 */
const Research = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="research" 
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
            <BookOpen className="text-primary" size={32} />
          </div>
          <h2 className="section-title">Research Experience</h2>
          <p className="section-subtitle">
            Academic research contributions to social work and healthcare
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {research.map((item, index) => (
            <ResearchCard key={index} item={item} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
