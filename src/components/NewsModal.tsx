import { useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import type { NewsItem } from '../data/siteContent';
import { OptimizedImage } from './OptimizedImage';

interface NewsModalProps {
  article: NewsItem | null;
  closeLabel: string;
  contactLabel: string;
  onClose: () => void;
  onContact: () => void;
}

export function NewsModal({
  article,
  closeLabel,
  contactLabel,
  onClose,
  onContact,
}: NewsModalProps) {
  useEffect(() => {
    if (!article) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="news-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card shadow-lift"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <OptimizedImage
            asset={article.img}
            alt={article.alt}
            sizes="(max-width: 768px) 100vw, 672px"
            className="h-full w-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-card/90 text-foreground shadow-soft transition hover:bg-card"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 text-xs">
            <span className="font-bold uppercase tracking-wider text-primary">
              {article.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span className="text-muted-foreground">{article.date}</span>
          </div>

          <h3
            id="news-modal-title"
            className="mt-3 font-serif text-2xl font-semibold leading-snug text-foreground"
          >
            {article.title}
          </h3>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {article.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              {closeLabel}
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onContact();
              }}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              {contactLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
