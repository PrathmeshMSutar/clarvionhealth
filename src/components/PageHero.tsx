import { type ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, subtitle, image, alt, children }: PageHeroProps) {
  return (
    <section className="relative min-h-[480px] lg:min-h-[540px] flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 max-w-9xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-3xl">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-5">
            {eyebrow}
          </span>
          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-5">
            {title}
          </h1>
          <p className="text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
