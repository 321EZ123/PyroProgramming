import { Flame, Github, Twitter, Download, Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-fire-medium">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Flame className="mr-2 h-6 w-6 text-primary" />
              <span className="font-bold text-xl">PyroProgramming</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/docs" className="text-muted-foreground hover:text-primary transition-colors">
              Docs
            </Link>
            <Link href="/tutorials" className="text-muted-foreground hover:text-primary transition-colors">
              Tutorials
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/signup">
              <Button variant="outline" size="sm" className="hidden md:inline-flex">
                Sign Up
              </Button>
            </Link>
            <Link href="/login">
              <Button size="sm" className="hidden md:inline-flex">
                Login
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
