import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Users, Sparkles } from 'lucide-react';
import { skills } from '../data/portfolioData';

/**
 * Skill Category Component
 * Displays skills in a category with badges
 */
const SkillCategory = ({ title, skillsList, icon: Icon, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="card group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center icon-container group-hover:scale-110 transition-transform">
          <Icon className="text-primary" size={24} />
        </div>
        <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skillsList.map((skill, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 cursor-default"
            style={{
              backgroundColor: 'var(--color-primary-light)',
              color: 'var(--color-primary-dark)'
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

/**
 * Skills Section Component
 * Technical and core skills showcase
 */
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="skills" 
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
            <Sparkles className="text-primary" size={32} />
          </div>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Comprehensive skill set spanning technical proficiency and interpersonal excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <SkillCategory
            title="Technical Skills"
            skillsList={skills.technical}
            icon={Code}
            index={0}
            isInView={isInView}
          />
          <SkillCategory
            title="Core Skills"
            skillsList={skills.core}
            icon={Users}
            index={1}
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
