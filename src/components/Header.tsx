import Link from 'next/link';
import { Github, Twitter, Download, Menu, Flame } from 'lucide-react';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md border-b border-fire-medium">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/" className="flex items-center text-2xl font-bold text-primary hover:text-fire-bright transition-colors">
            <Flame className="h-8 w-8 mr-2" />
            PyroProgramming
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/petezahv4/docs" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://twitter.com/PeteZahGames" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="Twitter">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://discord.gg/petezah" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="Discord">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9994 14.7101 20.9234 17.2383 19 19L17.5 17.5"/><path d="M8.5 10.5C9.32843 10.5 10 9.82843 10 9C10 8.17157 9.32843 7.5 8.5 7.5C7.67157 7.5 7 8.17157 7 9C7 9.82843 7.67157 10.5 8.5 10.5Z"/><path d="M15.5 10.5C16.3284 10.5 17 9.82843 17 9C17 8.17157 16.3284 7.5 15.5 7.5C14.6716 7.5 14 8.17157 14 9C14 9.82843 14.6716 10.5 15.5 10.5Z"/><path d="M16.5 15.5C16.2017 16.4327 15.3774 17.2214 14.1961 17.5715C13.0148 17.9216 11.6389 17.5486 10.5 17C9.5 17.5 8.5 17.5 7.5 17C7.5 17 7.5 17 7.5 17C7.5 17 7.5 17 7.5 17C7.5 17 7.5 17 7.5 17C7.5 17 7.5 17 7.5 17C7.5 17 7.5 17 7.5 17C7.5 17 7.5 17 7.5 17C7.5 17 7.5 17 7.5 17"/></svg>
          </a>
          <a href="https://github.com/petezahv4/docs/archive/refs/heads/master.zip" download="PeteZah-Docs.zip" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-fire-bright focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors" aria-label="Download">
            <Download className="h-5 w-5 mr-2" />
            Download
          </a>
        </div>
        <div className="md:hidden">
          <button type="button" className="text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
