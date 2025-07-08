"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function JavaTutorialHome() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java Tutorial</h1>
      <div className="bg-card/50 border border-fire-darker p-6 rounded-md mb-8">
        <h2 className="text-3xl font-bold mb-4">Learn Java</h2>
        <p className="text-lg mb-4">
          Java is a powerful, object-oriented programming language used for building a wide variety of applications.
        </p>
        <p className="text-lg mb-4">
          Our Java tutorial will teach you Java fundamentals, object-oriented programming, data structures, and how to build robust applications.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white mt-4">
          <Link href="/tutorials/java/intro">Start learning Java now »</Link>
        </Button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Examples in Each Chapter</h2>
        <p className="text-lg mb-4">
          With our online Java editor, you can edit the Java code, and click on a button to view the result.
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
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white">
          Try it Yourself »
        </Button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Java Exercises</h2>
        <p className="text-lg mb-4">
          Test yourself with exercises and quizzes to improve your Java skills.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Java Reference</h2>
        <p className="text-lg mb-4">
          We have created a complete Java reference guide with syntax, examples, and documentation for all Java classes and methods.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Java Quiz</h2>
        <p className="text-lg mb-4">
          Test your Java skills with a quiz. You will get 1 point for each correct answer. Good luck!
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          Start Java Quiz »
        </Button>
      </div>

      <div className="mb-8 bg-card/50 border border-fire-darker p-6 rounded-md">
        <h2 className="text-3xl font-bold mb-4">My Learning</h2>
        <p className="text-lg mb-4">
          Track your progress with the free "My Learning" program here at Pyro Programming.
        </p>
        <p className="text-lg mb-4">
          Log in to your account, and start earning points!
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white mt-4">
          Get Started »
        </Button>
      </div>
    </div>
  );
}
