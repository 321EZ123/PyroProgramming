"use client";

import TutorialSidebar from "@/components/TutorialSidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const javaSidebarItems = [
  { title: "Java HOME", href: "/tutorials/java" },
  { title: "Java Intro", href: "/tutorials/java/intro" },
  { title: "Java Get Started", href: "/tutorials/java/get-started" },
  { title: "Java Syntax", href: "/tutorials/java/syntax" },
  { title: "Java Output", href: "/tutorials/java/output" },
  { title: "Java Comments", href: "/tutorials/java/comments" },
  { title: "Java Variables", href: "/tutorials/java/variables" },
  { title: "Java Data Types", href: "/tutorials/java/data-types" },
  { title: "Java Type Casting", href: "/tutorials/java/type-casting" },
  { title: "Java Operators", href: "/tutorials/java/operators" },
  { title: "Java Strings", href: "/tutorials/java/strings" },
  { title: "Java Math", href: "/tutorials/java/math" },
  { title: "Java Booleans", href: "/tutorials/java/booleans" },
  { title: "Java If...Else", href: "/tutorials/java/if-else" },
  { title: "Java Switch", href: "/tutorials/java/switch" },
  { title: "Java While Loop", href: "/tutorials/java/while-loop" },
  { title: "Java For Loop", href: "/tutorials/java/for-loop" },
  { title: "Java Break/Continue", href: "/tutorials/java/break-continue" },
  { title: "Java Arrays", href: "/tutorials/java/arrays" },
];

export default function SqlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentIndex = javaSidebarItems.findIndex(item => item.href === pathname);
  const prev = currentIndex > 0 ? javaSidebarItems[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < javaSidebarItems.length - 1 ? javaSidebarItems[currentIndex + 1] : null;

  return (
    <div className="flex min-h-screen">
      <TutorialSidebar items={javaSidebarItems} language="Java" />
      <main className="flex-1">
        <div className="p-6">
          {children}
        </div>
        <div className="border-t border-fire-darker p-4 flex justify-between items-center">
          {prev ? (
            <Button variant="outline" asChild>
              <Link href={prev.href} className="flex items-center gap-2">
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
          ) : <div />}
          {next ? (
            <Button variant="outline" asChild>
              <Link href={next.href} className="flex items-center gap-2">
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
          ) : <div />}
        </div>
      </main>
    </div>
  );
}
