import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import type { SiteCopy } from '../data/siteContent';

interface SearchModalProps {
  open: boolean;
  copy: SiteCopy;
  onClose: () => void;
  onNavigateTopic: (href: string, topic?: string) => void;
}

export function SearchModal({ open, copy, onClose, onNavigateTopic }: SearchModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const items = useMemo(() => {
    const base = [
      ...copy.solutions.map((s) => ({
        title: s.title,
        subtitle: s.description,
        href: '#penyelesaian',
        topic: s.topic,
      })),
      ...copy.quickActions.map((q) => ({
        title: q.title,
        subtitle: copy.contact.eyebrow,
        href: '#hubungi',
        topic: q.topic,
      })),
      ...copy.news.map((n) => ({
        title: n.title,
        subtitle: `${n.category} · ${n.date}`,
        href: '#berita',
        topic: undefined,
      })),
    ];

    const q = query.trim().toLowerCase();
    if (!q) return base.slice(0, 6);
    return base.filter(
      (item) =>
        item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q),
    );
  }, [copy, query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-ink/70 p-4 pt-20 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label={copy.search.title}
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-lift"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border px-5 py-4">
          <Search className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <input
            type="search"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={copy.search.placeholder}
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={copy.search.closeLabel}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-3">
          {items.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-muted-foreground">
              {copy.search.empty}
            </p>
          ) : (
            <ul className="divide-y divide-border/60">
              {items.map((item) => (
                <li key={item.title}>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onNavigateTopic(item.href, item.topic);
                    }}
                    className="flex w-full items-center justify-between gap-4 rounded-xl px-4 py-3 text-left transition hover:bg-muted"
                  >
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
