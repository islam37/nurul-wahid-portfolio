import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ end, suffix = '', prefix = '', duration = 2.5 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="text-center">
      {inView && (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
          className="text-4xl md:text-5xl font-bold text-gold"
        />
      )}
    </div>
  );
};

export default AnimatedCounter;