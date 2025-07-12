"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function JavaTutorialHome() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java HOME</h1>
      <p className="text-lg mb-4">Welcome to the complete Java tutorial series, designed to guide you from the fundamentals to advanced concepts of this versatile programming language.</p>
      <p className="text-lg mb-4">Our lessons cover everything from setup and syntax to object-oriented programming and data structures.</p>
      <ul className="list-disc list-inside space-y-2">
        <li><Link href="/tutorials/java/intro">Introduction to Java</Link></li>
        <li><Link href="/tutorials/java/get-started">Java Get Started</Link></li>
        <li><Link href="/tutorials/java/syntax">Java Syntax</Link></li>
        <li><Link href="/tutorials/java/output">Java Output</Link></li>
        <li><Link href="/tutorials/java/comments">Java Comments</Link></li>
        <li><Link href="/tutorials/java/variables">Java Variables</Link></li>
        <li><Link href="/tutorials/java/data-types">Java Data Types</Link></li>
        <li><Link href="/tutorials/java/type-casting">Java Type Casting</Link></li>
        <li><Link href="/tutorials/java/operators">Java Operators</Link></li>
        <li><Link href="/tutorials/java/strings">Java Strings</Link></li>
        <li><Link href="/tutorials/java/math">Java Math</Link></li>
        <li><Link href="/tutorials/java/booleans">Java Booleans</Link></li>
        <li><Link href="/tutorials/java/if-else">Java If...Else</Link></li>
        <li><Link href="/tutorials/java/switch">Java Switch</Link></li>
        <li><Link href="/tutorials/java/while-loop">Java While Loop</Link></li>
        <li><Link href="/tutorials/java/for-loop">Java For Loop</Link></li>
        <li><Link href="/tutorials/java/break-continue">Java Break/Continue</Link></li>
        <li><Link href="/tutorials/java/arrays">Java Arrays</Link></li>
      </ul>
      <p className="text-lg mt-6 mb-10">Feel free to explore the lessons in sequence or jump to topics that interest you most. Continue your Java journey by selecting a topic above!</p>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Examples in Each Chapter</h2>
        <p className="text-lg mb-4">
          In each chapter, we have included examples of the topics discussed. This enhances your understanding of the topic and gives you a reference to base your code on.
        </p>
        <div className="bg-[#1E1E1E] rounded-md overflow-hidden shadow-lg mb-6">
          <div className="bg-[#2D2D2D] p-3 border-b border-gray-600">
            <span className="text-gray-300 text-sm">Example</span>
          </div>
          <div className="p-4">
            <pre className="text-orange-400 font-mono text-sm">
              <code>{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}</code>
            </pre>
          </div>
          <div className="bg-card p-3 flex justify-center">
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => window.location.href = "https://pyroprogramming-ide.9p.al/"}
            >
              Try it Yourself
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Java Community and Resources</h2>
        <p className="text-lg mb-4">
          Join the vibrant Java community to enhance your learning experience. Participate in forums, attend meetups, and contribute to open-source projects.
        </p>
        <p className="text-lg mb-4">
          Here are some resources to help you on your Java journey:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><Link href="https://www.oracle.com/java/technologies/javase-downloads.html">Official Java Documentation</Link></li>
          <li><Link href="https://stackoverflow.com/questions/tagged/java">Java on Stack Overflow</Link></li>
          <li><Link href="https://www.javacodegeeks.com/">Java Code Geeks</Link></li>
          <li><Link href="https://www.javatpoint.com/">JavaTpoint Tutorials</Link></li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Next Steps</h2>
        <p className="text-lg mb-4">
          Once you've mastered the basics, consider diving into more advanced topics such as:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Design Patterns</li>
          <li>Java Frameworks (Spring, Hibernate)</li>
          <li>Web Development with Java (Servlets, JSP)</li>
          <li>Building RESTful APIs</li>
          <li>Java for Mobile Development (Android)</li>
        </ul>
        <p className="text-lg mb-4">
          Continue your Java journey with the resources and lessons offered here!
        </p>
      </div>
    </div>
  );
}
