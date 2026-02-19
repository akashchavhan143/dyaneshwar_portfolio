import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award, TrendingUp } from 'lucide-react';
import { education } from '../data/portfolioData';

/**
 * Education Card Component
 * Individual education item with enhanced design
 */
const EducationCard = ({ item, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-8 pb-12 last:pb-0 group"
    >
      {/* Timeline line */}
      <div 
        className="absolute left-0 top-0 w-px h-full"
        style={{ backgroundColor: 'var(--color-border)' }}
      />
      
      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 top-2 w-4 h-4 rounded-full border-4 -translate-x-[7.5px]"
        style={{ 
          backgroundColor: 'var(--color-primary)',
          borderColor: 'var(--color-background-alt)'
        }}
        whileHover={{ scale: 1.3 }}
      />
      
      {/* Card content */}
      <div className="card">
        <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>
              {item.degree}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={18} className="text-primary" />
              <p className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                {item.institution}
              </p>
            </div>
            {item.specialization && (
              <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                Specialization: {item.specialization}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: 'var(--color-primary-light)' }}>
            <Calendar size={18} className="text-primary" />
            <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
              {item.duration}
            </span>
          </div>
        </div>

        {/* Semester grades */}
        {item.semesters && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={18} className="text-primary" />
              <span className="font-semibold text-sm" style={{ color: 'var(--color-text-primary)' }}>
                Semester Performance
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {item.semesters.map((sem, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-lg p-4 text-center"
                  style={{ backgroundColor: 'var(--color-background-alt)' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-xs mb-1" style={{ color: 'var(--color-text-tertiary)' }}>
                    {sem.semester}
                  </p>
                  <p className="text-xl font-bold text-primary">
                    {sem.sgpa}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Grade badge */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Award size={20} style={{ color: 'var(--color-secondary)' }} />
            <span className="font-bold text-lg" style={{ color: 'var(--color-text-primary)' }}>
              {item.grade}
            </span>
          </div>
          {item.isCurrentStudent && (
            <span className="badge">
              🎓 Current Student
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Education Section Component
 * Timeline view of educational qualifications
 */
const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="education" 
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
            <GraduationCap className="text-primary" size={32} />
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic journey and achievements in social work
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((item, index) => (
            <EducationCard key={index} item={item} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
