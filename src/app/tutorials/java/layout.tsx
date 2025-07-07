"use client";

import TutorialSidebar from "@/components/TutorialSidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const sqlSidebarItems = [
  { title: "SQL Home", href: "/tutorials/sql" },
  { title: "SQL Introduction", href: "/tutorials/sql/intro" },
  { title: "SQL Syntax", href: "/tutorials/sql/syntax" },
  { title: "SQL Select", href: "/tutorials/sql/select" },
  { title: "SQL Select Distinct", href: "/tutorials/sql/selectdistinct" },
  { title: "SQL Where", href: "/tutorials/sql/where" },
  { title: "SQL And, Or, Not", href: "/tutorials/sql/where" },
  { title: "SQL Order By", href: "/tutorials/sql/orderby" },
  { title: "SQL Insert Into", href: "/tutorials/sql/insert" },
  { title: "SQL Null Values", href: "/tutorials/sql/null" },
  { title: "SQL Update", href: "/tutorials/sql/update" },
  { title: "SQL Delete", href: "/tutorials/sql/delete" },
  { title: "SQL Select Top", href: "/tutorials/sql/top" },
  { title: "SQL Min and Max", href: "/tutorials/sql/minmax" },
  { title: "SQL Count, Avg, Sum", href: "/tutorials/sql/count" },
  { title: "SQL Like", href: "/tutorials/sql/like" },
  { title: "SQL Wildcards", href: "/tutorials/sql/wildcards" },
  { title: "SQL In", href: "/tutorials/sql/in" },
  { title: "SQL Between", href: "/tutorials/sql/between" },
  { title: "SQL Join", href: "/tutorials/sql/join" },
];

export default function SqlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <TutorialSidebar items={sqlSidebarItems} language="SQL" />
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
