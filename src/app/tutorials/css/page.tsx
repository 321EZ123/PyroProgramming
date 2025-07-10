"use client";

import TutorialSidebar from "@/components/TutorialSidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const cssSidebarItems = [
  { title: "CSS Home", href: "/tutorials/css" },
  { title: "CSS Introduction", href: "/tutorials/css/intro" },
  { title: "CSS Syntax", href: "/tutorials/css/syntax" },
  { title: "CSS Selectors", href: "/tutorials/css/selectors" },
  { title: "CSS How To", href: "/tutorials/css/howto" },
  { title: "CSS Comments", href: "/tutorials/css/comments" },
  { title: "CSS Colors", href: "/tutorials/css/colors" },
  { title: "CSS Backgrounds", href: "/tutorials/css/backgrounds" },
  { title: "CSS Borders", href: "/tutorials/css/borders" },
  { title: "CSS Margins", href: "/tutorials/css/margins" },
  { title: "CSS Padding", href: "/tutorials/css/padding" },
  { title: "CSS Height/Width", href: "/tutorials/css/dimension" },
  { title: "CSS Box Model", href: "/tutorials/css/boxmodel" },
  { title: "CSS Text", href: "/tutorials/css/text" },
  { title: "CSS Fonts", href: "/tutorials/css/fonts" },
  { title: "CSS Icons", href: "/tutorials/css/icons" },
  { title: "CSS Links", href: "/tutorials/css/links" },
  { title: "CSS Lists", href: "/tutorials/css/lists" },
  { title: "CSS Tables", href: "/tutorials/css/tables" },
  { title: "CSS Display", href: "/tutorials/css/display" },
];

export default function CssLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentIndex = cssSidebarItems.findIndex(item => item.href === pathname);
  const prevItem = currentIndex > 0 ? cssSidebarItems[currentIndex - 1] : null;
  const nextItem = currentIndex < cssSidebarItems.length - 1 ? cssSidebarItems[currentIndex + 1] : null;

  return (
    <div className="flex min-h-screen">
      <TutorialSidebar items={cssSidebarItems} language="CSS" />
      <main className="flex-1">
        <div className="p-6">
          {children}
        </div>
        <div className="border-t border-fire-darker p-4 flex justify-between items-center">
          <Button variant="outline" asChild disabled={!prevItem}>
            <Link href={prevItem?.href ?? "#"} className="flex items-center gap-2">
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
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Previous
            </Link>
          </Button>
          <Button variant="outline" asChild disabled={!nextItem}>
            <Link href={nextItem?.href ?? "#"} className="flex items-center gap-2">
              Next
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
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
