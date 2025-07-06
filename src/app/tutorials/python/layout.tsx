"use client";

import TutorialSidebar from "@/components/TutorialSidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pythonSidebarItems = [
  { title: "Python Home", href: "/tutorials/python" },
  { title: "Python Intro", href: "/tutorials/python/intro" },
  { title: "Python Get Started", href: "/tutorials/python/getstarted" },
  { title: "Python Syntax", href: "/tutorials/python/syntax" },
  { title: "Python Comments", href: "/tutorials/python/comments" },
  { title: "Python Variables", href: "/tutorials/python/variables" },
  { title: "Python Data Types", href: "/tutorials/python/datatypes" },
  { title: "Python Numbers", href: "/tutorials/python/numbers" },
  { title: "Python Casting", href: "/tutorials/python/casting" },
  { title: "Python Strings", href: "/tutorials/python/strings" },
  { title: "Python Booleans", href: "/tutorials/python/booleans" },
  { title: "Python Operators", href: "/tutorials/python/operators" },
  { title: "Python Lists", href: "/tutorials/python/lists" },
  { title: "Python Tuples", href: "/tutorials/python/tuples" },
  { title: "Python Sets", href: "/tutorials/python/sets" },
  { title: "Python Dictionaries", href: "/tutorials/python/dictionaries" },
  { title: "Python If...Else", href: "/tutorials/python/conditions" },
  { title: "Python While Loops", href: "/tutorials/python/while" },
  { title: "Python For Loops", href: "/tutorials/python/for" },
  { title: "Python Functions", href: "/tutorials/python/functions" },
];

export default function PythonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <TutorialSidebar items={pythonSidebarItems} language="Python" />
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
