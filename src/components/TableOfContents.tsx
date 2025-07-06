"use client";
import { useEffect, useState } from 'react';
import clsx from 'clsx';

type TocItem = { id: string; title: string; items?: TocItem[] };

export default function TableOfContents() {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const article = document.querySelector('main article');
    if (!article) return;
    const headings = Array.from(article.querySelectorAll('h2, h3')) as HTMLElement[];
    const tocData: TocItem[] = [];
    let currentSection: TocItem | null = null;

    headings.forEach((heading) => {
      const id = heading.id;
      const title = heading.textContent?.trim() || '';
      if (heading.tagName === 'H2') {
        currentSection = { id, title, items: [] };
        tocData.push(currentSection);
      } else if (heading.tagName === 'H3' && currentSection) {
        currentSection.items!.push({ id, title });
      }
    });

    setToc(tocData);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headings = Array.from(document.querySelectorAll('main article h2, main article h3')) as HTMLElement[];
      const scrollPos = window.scrollY;
      let current = headings[0];
      for (const heading of headings) {
        if (heading.offsetTop <= scrollPos + 100) {
          current = heading;
        } else break;
      }
      setActiveId(current.id);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (toc.length === 0) return null;

  return (
    <nav className="py-4">
      <h3 className="text-lg font-semibold text-primary mb-3">Navigation</h3>
      <ul className="space-y-2">
        {toc.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className={clsx('transition-colors', activeId === section.id ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-primary')}>{section.title}</a>
            {section.items && section.items.length > 0 && (
              <ul className="pl-4 mt-1 space-y-1">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className={clsx('text-sm transition-colors', activeId === item.id ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-primary')}>{item.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
