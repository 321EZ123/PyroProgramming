"use client";

import TutorialSidebar from "@/components/TutorialSidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const javascriptSidebarItems = [
  { title: "JavaScript Home", href: "/tutorials/javascript" },
  { title: "JS Introduction", href: "/tutorials/javascript/intro" },
  { title: "JS Where To", href: "/tutorials/javascript/whereto" },
  { title: "JS Output", href: "/tutorials/javascript/output" },
  { title: "JS Statements", href: "/tutorials/javascript/statements" },
  { title: "JS Syntax", href: "/tutorials/javascript/syntax" },
  { title: "JS Comments", href: "/tutorials/javascript/comments" },
  { title: "JS Variables", href: "/tutorials/javascript/variables" },
  { title: "JS Let", href: "/tutorials/javascript/let" },
  { title: "JS Const", href: "/tutorials/javascript/const" },
  { title: "JS Operators", href: "/tutorials/javascript/operators" },
  { title: "JS Arithmetic", href: "/tutorials/javascript/arithmetic" },
  { title: "JS Assignment", href: "/tutorials/javascript/assignment" },
  { title: "JS Data Types", href: "/tutorials/javascript/datatypes" },
  { title: "JS Functions", href: "/tutorials/javascript/functions" },
  { title: "JS Objects", href: "/tutorials/javascript/objects" },
  { title: "JS Events", href: "/tutorials/javascript/events" },
  { title: "JS Strings", href: "/tutorials/javascript/strings" },
  { title: "JS Numbers", href: "/tutorials/javascript/numbers" },
  { title: "JS Arrays", href: "/tutorials/javascript/arrays" },
];

export default function JavaScriptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <TutorialSidebar items={javascriptSidebarItems} language="JavaScript" />
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
