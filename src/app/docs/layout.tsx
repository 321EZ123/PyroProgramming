import type React from 'react';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex">
      <aside className="w-64 hidden md:block sticky top-16 h-[calc(100vh-4rem-1px)] pr-8 border-r border-fire-medium overflow-y-auto">
        <nav className="py-4">
          <h3 className="text-lg font-semibold text-primary mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a href="#section-1" className="text-muted-foreground hover:text-primary transition-colors">Introduction</a>
              <ul className="pl-4 mt-1 space-y-1">
                <li><a href="#item-1-1" className="text-sm text-muted-foreground hover:text-primary">About us</a></li>
                <li><a href="#item-1-2" className="text-sm text-muted-foreground hover:text-primary">Our Services</a></li>
                <li><a href="#item-1-3" className="text-sm text-muted-foreground hover:text-primary">Features</a></li>
              </ul>
            </li>
            <li>
              <a href="#section-2" className="text-muted-foreground hover:text-primary transition-colors">Languages</a>
              <ul className="pl-4 mt-1 space-y-1">
                <li><a href="#item-2-1" className="text-sm text-muted-foreground hover:text-primary">About Computer Languages</a></li>
                <li><a href="#item-2-3" className="text-sm text-muted-foreground hover:text-primary">Tutorials</a></li>
              </ul>
            </li>
            <li>
              <a href="#section-3" className="text-muted-foreground hover:text-primary transition-colors">Deployment</a>
              <ul className="pl-4 mt-1 space-y-1">
                <li><a href="#item-3-1" className="text-sm text-muted-foreground hover:text-primary">Custom Domains</a></li>
                <li><a href="#item-3-2" className="text-sm text-muted-foreground hover:text-primary">Fastly</a></li>
                <li><a href="#item-3-3" className="text-sm text-muted-foreground hover:text-primary">Back4App (b4a.run)</a></li>
                <li><a href="#item-3-4" className="text-sm text-muted-foreground hover:text-primary">Vercel (vercel.app)</a></li>
                <li><a href="#item-3-5" className="text-sm text-muted-foreground hover:text-primary">Netlify (netlify.app)</a></li>
                <li><a href="#item-3-6" className="text-sm text-muted-foreground hover:text-primary">Railway (railway.app)</a></li>
                <li><a href="#item-3-7" className="text-sm text-muted-foreground hover:text-primary">Koyeb (koyeb.app)</a></li>
              </ul>
            </li>
            <li>
              <a href="#section-4" className="text-muted-foreground hover:text-primary transition-colors">Making your website</a>
              <ul className="pl-4 mt-1 space-y-1">
                <li><a href="#item-4-1" className="text-sm text-muted-foreground hover:text-primary">How to obtain games</a></li>
                <li><a href="#item-4-2" className="text-sm text-muted-foreground hover:text-primary">What to learn</a></li>
                <li><a href="#item-4-3" className="text-sm text-muted-foreground hover:text-primary">How to deploy your app</a></li>
                <li><a href="#item-4-4" className="text-sm text-muted-foreground hover:text-primary">Legal</a></li>
                <li><a href="#item-4-5" className="text-sm text-muted-foreground hover:text-primary">Potential Monetization</a></li>
              </ul>
            </li>
            <li>
              <a href="#section-5" className="text-muted-foreground hover:text-primary transition-colors">Exploits</a>
              <ul className="pl-4 mt-1 space-y-1">
                <li><a href="#item-5-1" className="text-sm text-muted-foreground hover:text-primary">Browser Extensions</a></li>
                <li><a href="#item-5-2" className="text-sm text-muted-foreground hover:text-primary">Extension Blockers</a></li>
                <li><a href="#item-5-3" className="text-sm text-muted-foreground hover:text-primary">ChromeOS Methods</a></li>
              </ul>
            </li>
            <li>
              <a href="#section-6" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a>
              <ul className="pl-4 mt-1 space-y-1">
                <li><a href="#item-6-1" className="text-sm text-muted-foreground hover:text-primary">How do I start learning programming?</a></li>
                <li><a href="#item-6-2" className="text-sm text-muted-foreground hover:text-primary">Which programming language should I learn first?</a></li>
                <li><a href="#item-6-3" className="text-sm text-muted-foreground hover:text-primary">How long does it take to build a website?</a></li>
                <li><a href="#item-6-4" className="text-sm text-muted-foreground hover:text-primary">Do I need to pay for hosting?</a></li>
                <li><a href="#item-6-5" className="text-sm text-muted-foreground hover:text-primary">Can I use the code examples in my projects?</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 md:pl-8">
        {children}
      </main>
    </div>
  );
}
