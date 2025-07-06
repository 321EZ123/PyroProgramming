"use client";

import TutorialSidebar from "@/components/TutorialSidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const htmlSidebarItems = [
  { title: "HTML Home", href: "/tutorials/html" },
  { title: "HTML Introduction", href: "/tutorials/html/intro" },
  { title: "HTML Basics", href: "/tutorials/html/basics" },
  { title: "HTML Elements", href: "/tutorials/html/elements" },
  { title: "HTML Attributes", href: "/tutorials/html/attributes" },
  { title: "HTML Headings", href: "/tutorials/html/headings" },
  { title: "HTML Paragraphs", href: "/tutorials/html/paragraphs" },
  { title: "HTML Styles", href: "/tutorials/html/styles" },
  { title: "HTML Formatting", href: "/tutorials/html/formatting" },
  { title: "HTML Quotations", href: "/tutorials/html/quotations" },
  { title: "HTML Comments", href: "/tutorials/html/comments" },
  { title: "HTML Colors", href: "/tutorials/html/colors" },
  { title: "HTML CSS", href: "/tutorials/html/css" },
  { title: "HTML Links", href: "/tutorials/html/links" },
  { title: "HTML Images", href: "/tutorials/html/images" },
  { title: "HTML Tables", href: "/tutorials/html/tables" },
  { title: "HTML Lists", href: "/tutorials/html/lists" },
  { title: "HTML Blocks", href: "/tutorials/html/blocks" },
  { title: "HTML Forms", href: "/tutorials/html/forms" },
];

export default function HtmlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <TutorialSidebar items={htmlSidebarItems} language="HTML" />
      <main className="flex-1">
        <div className="p-6">
          {children}
        </div>
        <div className="border-t border-fire-darker p-4 flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link href="#" className="flex items-center gap-2">
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
          <Button variant="outline" asChild>
            <Link href="#" className="flex items-center gap-2">
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
