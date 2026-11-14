import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import type { HeroSlide } from '../data/siteContent';
import { OptimizedImage } from './OptimizedImage';

interface HeroCarouselProps {
  slides: HeroSlide[];
  contactLabel: string;
  onNavigateTopic: (href: string, topic?: string) => void;
}

export function HeroCarousel({
  slides,
  contactLabel,
  onNavigateTopic,
}: HeroCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [active, slides.length]);

  const step = (delta: number) => {
    setActive((prev) => (prev + delta + slides.length) % slides.length);
  };

  return (
    <section
      id="top"
      className="relative h-[560px] overflow-hidden bg-ink md:h-[640px]"
      aria-roledescription="carousel"
      aria-label="El Zahra Agency Highlights"
    >
      {slides.map((slide, idx) => {
        const isCurrent = idx === active;
        return (
          <div
            key={slide.tag}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isCurrent ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            aria-hidden={!isCurrent}
          >
            <OptimizedImage
              asset={slide.img}
              alt={slide.alt}
              priority={idx === 0}
              sizes="100vw"
              className={`h-full w-full object-cover object-[70%_center] transition-transform duration-[7000ms] ${
                isCurrent ? 'scale-105' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-hero-overlay" />

            <div className="absolute inset-0 flex items-center">
              <div className="container-x">
                <div className="max-w-xl text-primary-foreground">
                  <span className="inline-block rounded-full border border-accent/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                    {slide.tag}
                  </span>
                  <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] md:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-5 text-base leading-relaxed opacity-90 md:text-lg">
                    {slide.text}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={slide.targetSection}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigateTopic(slide.targetSection, slide.topic);
                      }}
                      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition hover:gap-3"
                    >
                      {slide.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a
                      href="#hubungi"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigateTopic('#hubungi');
                      }}
                      className="inline-flex items-center whitespace-nowrap rounded-full border border-primary-foreground/50 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
                    >
                      {contactLabel}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide indicators & navigation controls */}
      <div className="absolute inset-x-0 bottom-20 md:bottom-24">
        <div className="container-x flex items-center gap-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`Slide ${idx + 1}`}
              className="h-1.5 w-10 overflow-hidden rounded-full bg-primary-foreground/30 md:w-16"
            >
              <span
                className={`block h-full bg-accent ${
                  idx === active ? 'w-full transition-[width] duration-[7000ms] ease-linear' : 'w-0'
                }`}
              />
            </button>
          ))}

          <div className="ml-auto hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous slide"
              className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/40 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next slide"
              className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/40 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
