import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Calendar, Sparkles } from 'lucide-react';
import { events } from '../data/eventsData';

/**
 * Event Card Component
 * Displays individual event with image and description
 */
const EventCard = ({ event }) => {
  return (
    <div className="card flex-shrink-0 w-[350px] md:w-[400px] mr-6 hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col gap-4">
        {/* Event Image */}
        <div className="w-full h-48 rounded-lg overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        </div>
        
        {/* Event Details */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={16} className="text-primary" />
            <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
              {event.date}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>
            {event.title}
          </h3>
          <p className="leading-relaxed text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * Events Section Component
 * Auto-scrolling horizontal events section with hover pause functionality
 */
const Events = () => {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate events for infinite scroll effect
  const duplicatedEvents = [...events, ...events];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame (adjust for speed)

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Calculate the width of one set of events
        const cardWidth = 400 + 24; // card width + margin
        const maxScroll = events.length * cardWidth;
        
        // Reset scroll position when first set of events is fully scrolled
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused, events.length]);

  return (
    <section 
      id="events" 
      className="section-padding" 
      style={{ backgroundColor: 'var(--color-background-alt)' }} 
      ref={ref}
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 icon-container">
            <Sparkles className="text-primary" size={32} />
          </div>
          <h2 className="section-title">Events & Activities</h2>
          <p className="section-subtitle">
            Showcasing my journey through various social work events, conferences, and community initiatives
          </p>
        </motion.div>

        {/* Horizontal Auto-scrolling Events Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient overlays for fade effect */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, var(--color-background-alt), transparent)'
            }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, var(--color-background-alt), transparent)'
            }}
          />

          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="overflow-x-hidden overflow-y-hidden pb-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <div className="flex">
              {duplicatedEvents.map((event, index) => (
                <EventCard key={`${event.id}-${index}`} event={event} />
              ))}
            </div>
          </div>

          {/* Hide scrollbar */}
          <style>{`
            .overflow-x-hidden::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* Pause indicator */}
          {isPaused && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-4"
            >
              <span className="text-sm font-medium" style={{ color: 'var(--color-text-tertiary)' }}>
                Scroll paused • Move cursor away to resume
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
