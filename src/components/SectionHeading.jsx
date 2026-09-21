import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function SectionHeading({ badge, title, subtitle, center = true, light = false }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className={`mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
          light ? 'bg-white/10 text-white/80' : 'bg-td-red/10 text-td-red'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight ${
        light ? 'text-white' : 'text-td-dark'
      }`} style={{ fontFamily: 'var(--font-heading)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${center ? 'mx-auto text-center' : ''} ${
          light ? 'text-gray-300' : 'text-td-gray'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
