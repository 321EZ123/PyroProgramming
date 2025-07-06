"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface TutorialSidebarProps {
  items: {
    title: string;
    href: string;
  }[];
  language: string;
}

export default function TutorialSidebar({ items, language }: TutorialSidebarProps) {
  const pathname = usePathname();

  return (
    <div className="w-full max-w-xs bg-card border-r border-fire-darker">
      <div className="bg-primary text-white py-4 px-6">
        <h2 className="text-xl font-bold">{language} Tutorial</h2>
      </div>
      <div className="h-[calc(100vh-4rem)] overflow-y-auto">
        <nav className="py-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block px-6 py-2 hover:bg-fire-darker/10 text-foreground transition-colors",
                pathname === item.href && "bg-fire-darker/20 font-medium"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
