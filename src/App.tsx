import { useCallback, useState } from 'react';
import {
  ArrowRight,
  Building2,
  CreditCard,
  FileText,
  GraduationCap,
  HeartPulse,
  PiggyBank,
  ShieldCheck,
  UserSearch,
} from 'lucide-react';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroCarousel } from './components/HeroCarousel';
import { NewsModal } from './components/NewsModal';
import { OptimizedImage } from './components/OptimizedImage';
import { SearchModal } from './components/SearchModal';
import {
  IMAGES,
  SITE_CONTENT,
  type Language,
  type NewsItem,
  type QuickActionItem,
  type SolutionItem,
} from './data/siteContent';

function QuickActionIcon({ name }: { name: QuickActionItem['iconName'] }) {
  switch (name) {
    case 'file':
      return <FileText className="h-5 w-5" aria-hidden="true" />;
    case 'card':
      return <CreditCard className="h-5 w-5" aria-hidden="true" />;
    case 'userSearch':
      return <UserSearch className="h-5 w-5" aria-hidden="true" />;
    case 'building':
      return <Building2 className="h-5 w-5" aria-hidden="true" />;
  }
}

function SolutionIcon({ name }: { name: SolutionItem['iconName'] }) {
  switch (name) {
    case 'shield':
      return <ShieldCheck className="h-6 w-6" aria-hidden="true" />;
    case 'heart':
      return <HeartPulse className="h-6 w-6" aria-hidden="true" />;
    case 'graduation':
      return <GraduationCap className="h-6 w-6" aria-hidden="true" />;
    case 'piggy':
      return <PiggyBank className="h-6 w-6" aria-hidden="true" />;
    case 'building':
      return <Building2 className="h-6 w-6" aria-hidden="true" />;
  }
}

function SectionHeading({
  eyebrow,
  title,
  linkLabel,
  onLinkClick,
}: {
  eyebrow: string;
  title: string;
  linkLabel?: string;
  onLinkClick?: () => void;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold text-foreground md:text-4xl">
          {title}
        </h2>
      </div>
      {linkLabel && onLinkClick && (
        <button
          type="button"
          onClick={onLinkClick}
          className="inline-flex items-center gap-2 self-start text-sm font-semibold text-primary transition-all hover:gap-3 md:self-auto"
        >
          {linkLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('ms');
  const copy = SITE_CONTENT[lang];

  const [selectedTopic, setSelectedTopic] = useState<string>(copy.contact.topics[0]);
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleLanguageChange = useCallback((nextLang: Language) => {
    setLang(nextLang);
    document.documentElement.lang = nextLang;
    setSelectedTopic(SITE_CONTENT[nextLang].contact.topics[0]);
  }, []);

  const handleNavigateTopic = useCallback((href: string, topic?: string) => {
    if (topic) {
      setSelectedTopic(topic);
    }
    const targetId = href.replace(/^#/, '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header
        copy={copy}
        lang={lang}
        onChangeLang={handleLanguageChange}
        onNavigateTopic={handleNavigateTopic}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <main>
        <HeroCarousel
          slides={copy.heroSlides}
          contactLabel={copy.topBar.contactCta}
          onNavigateTopic={handleNavigateTopic}
        />

        {/* Quick Actions Floating Strip */}
        <div className="container-x relative z-10 -mt-14">
          <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-border bg-card shadow-lift md:grid-cols-4">
            {copy.quickActions.map((item, idx) => (
              <a
                key={item.title}
                href="#borang-hubungi"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigateTopic('#borang-hubungi', item.topic);
                }}
                className={`group flex items-center gap-3 p-5 transition hover:bg-muted md:p-6 ${
                  idx % 2 === 0 ? 'border-r' : ''
                } ${idx < 2 ? 'border-b md:border-b-0' : ''} border-border md:border-r last:border-r-0`}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <QuickActionIcon name={item.iconName} />
                </span>
                <span className="text-sm font-semibold text-foreground">{item.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Solutions Grid */}
        <section id="penyelesaian" className="container-x py-20 md:py-28">
          <SectionHeading
            eyebrow={copy.solutionsSection.eyebrow}
            title={copy.solutionsSection.title}
            linkLabel={copy.solutionsSection.link}
            onLinkClick={() => handleNavigateTopic('#borang-hubungi', copy.solutions[0].topic)}
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {copy.solutions.map((item) => (
              <a
                key={item.id}
                href="#borang-hubungi"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigateTopic('#borang-hubungi', item.topic);
                }}
                className="group flex flex-col rounded-xl border border-border bg-card p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
              >
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-secondary text-primary">
                  <SolutionIcon name={item.iconName} />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {copy.solutionsSection.learnMore}{' '}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Spotlight Section */}
        <section id="sorotan" className="bg-secondary">
          <div className="container-x grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
            <div className="overflow-hidden rounded-xl shadow-lift">
              <OptimizedImage
                asset={IMAGES.hero3}
                alt={copy.spotlight.imageAlt}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div>
              <p className="eyebrow">{copy.spotlight.eyebrow}</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold text-foreground md:text-4xl">
                {copy.spotlight.title}
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                {copy.spotlight.description}
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-6 border-y border-border py-6">
                {copy.spotlight.stats.map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-serif text-2xl font-semibold tabular-nums text-primary md:text-3xl">
                      {value}
                    </dt>
                    <dd className="mt-1 text-xs text-muted-foreground md:text-sm">{label}</dd>
                  </div>
                ))}
              </dl>

              <a
                href="#borang-hubungi"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigateTopic('#borang-hubungi', copy.spotlight.topic);
                }}
                className="mt-8 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:gap-3"
              >
                {copy.spotlight.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* News & Media Section */}
        <section id="berita" className="container-x py-20 md:py-28">
          <SectionHeading
            eyebrow={copy.newsSection.eyebrow}
            title={copy.newsSection.title}
            linkLabel={copy.newsSection.link}
            onLinkClick={() => setActiveArticle(copy.news[0])}
          />

          <div className="grid gap-6 md:grid-cols-3">
            {copy.news.map((article) => (
              <button
                key={article.id}
                type="button"
                onClick={() => setActiveArticle(article)}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card text-left shadow-soft transition duration-300 hover:shadow-lift"
              >
                <div className="w-full overflow-hidden">
                  <OptimizedImage
                    asset={article.img}
                    alt={article.alt}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="font-bold uppercase tracking-wider text-primary">
                      {article.category}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span className="text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {article.summary}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* CTA Banner + Validated Contact Form */}
        <ContactSection
          copy={copy}
          selectedTopic={selectedTopic}
          onSelectTopic={setSelectedTopic}
        />
      </main>

      <Footer copy={copy} onNavigateTopic={handleNavigateTopic} />

      <NewsModal
        article={activeArticle}
        closeLabel={copy.newsSection.closeLabel}
        contactLabel={copy.ctaBanner.button}
        onClose={() => setActiveArticle(null)}
        onContact={() => handleNavigateTopic('#borang-hubungi')}
      />

      <SearchModal
        open={searchOpen}
        copy={copy}
        onClose={() => setSearchOpen(false)}
        onNavigateTopic={handleNavigateTopic}
      />
    </div>
  );
}
