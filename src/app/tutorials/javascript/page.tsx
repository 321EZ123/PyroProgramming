"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function JavaScriptTutorialHome() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">JavaScript Tutorial</h1>

      <div className="bg-card/50 border border-fire-darker p-6 rounded-md mb-8">
        <h2 className="text-3xl font-bold mb-4">Learn JavaScript</h2>
        <p className="text-lg mb-4">
          JavaScript is the world's most popular programming language.
        </p>
        <p className="text-lg mb-4">
          JavaScript is the programming language of the Web.
        </p>
        <p className="text-lg mb-4">
          JavaScript is easy to learn.
        </p>
        <p className="text-lg mb-4">
          This tutorial will teach you JavaScript from basic to advanced.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white mt-4">
          <Link href="/tutorials/javascript/intro">Start learning JavaScript now »</Link>
        </Button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">JavaScript Example</h2>

        <div className="bg-[#1E1E1E] rounded-md overflow-hidden shadow-lg mb-6">
          <div className="bg-card p-4 border-b border-fire-darker">
            <h3 className="text-lg font-semibold">Example:</h3>
          </div>
          <div className="p-4 text-white font-mono text-sm">
            <pre className="language-javascript">
              <code>{`function myFunction() {
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
  document.getElementById("demo").style.fontSize = "25px";
  document.getElementById("demo").style.color = "#ff4500";
  document.getElementById("demo").style.backgroundColor = "#111827";
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

        <p className="text-lg">
          Click the button below to try it out yourself!
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Why Study JavaScript?</h2>
        <p className="text-lg mb-4">
          JavaScript is one of the three essential languages for web development:
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-6 text-lg">
          <li><strong>HTML</strong> to define the structure of web pages</li>
          <li><strong>CSS</strong> to style web pages</li>
          <li><strong>JavaScript</strong> to add interactivity to web pages</li>
        </ol>

        <p className="text-lg mb-4">
          This tutorial covers all relevant versions of JavaScript including:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>The Original JavaScript ES1, ES2, ES3 (1997-1999)</li>
          <li>The First Major Revision ES5 (2009)</li>
          <li>The Second Revision ES6 (2015)</li>
          <li>All Annual Additions (2016-2020)</li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>
        <p className="text-lg mb-4">
          Explore various resources to enhance your JavaScript skills:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><Link href="/tutorials/javascript/advanced">Advanced JavaScript Concepts</Link></li>
          <li><Link href="/tutorials/javascript/dom">Manipulating the DOM</Link></li>
          <li><Link href="/tutorials/javascript/apis">Working with APIs</Link></li>
          <li><Link href="/tutorials/javascript/frameworks">JavaScript Frameworks Overview</Link></li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Video: JavaScript in 48 Minutes</h2>
        <div className="bg-[#1E1E1E] rounded-md overflow-hidden">
          <div className="p-8 text-center text-white">
            <div className="inline-block bg-primary text-white text-3xl font-bold p-4 mb-4">
              JavaScript in 48 Minutes
            </div>
            <p className="text-xl mb-4">Full Course for Beginners</p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Link href="https://www.youtube.com/watch?v=W6NZfCO5SIk">Watch Video</Link>
            </Button>
            <p className="text-sm mt-2">We are not affiliated with YouTube or the creator of the video.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
