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
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-white">
              Try it Yourself
            </Button>
          </div>
        </div>

        <p className="text-lg">
          Click on the "Try it Yourself" button to see how it works.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Learn JavaScript</h2>
        <p className="text-lg mb-4">
          In this tutorial, the learning happens by examples.
        </p>
        <p className="text-lg mb-6">
          With our editor, you can edit JavaScript, and view the result.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-fire-darker rounded-md p-4">
            <h3 className="text-xl font-bold mb-2">Example</h3>
            <p className="mb-2">How to change text:</p>
            <div className="bg-[#1E1E1E] p-3 rounded-md text-white font-mono text-sm mb-2">
              <code>document.getElementById("demo").innerHTML = "Hello JavaScript";</code>
            </div>
            <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 w-full">
              Try it
            </Button>
          </div>
          <div className="bg-card border border-fire-darker rounded-md p-4">
            <h3 className="text-xl font-bold mb-2">Example</h3>
            <p className="mb-2">How to change an attribute value:</p>
            <div className="bg-[#1E1E1E] p-3 rounded-md text-white font-mono text-sm mb-2">
              <code>document.getElementById("myImage").src = "landscape.jpg";</code>
            </div>
            <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 w-full">
              Try it
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card border border-fire-darker rounded-md p-4">
            <h3 className="text-xl font-bold mb-2">Example</h3>
            <p className="mb-2">How to change CSS styling:</p>
            <div className="bg-[#1E1E1E] p-3 rounded-md text-white font-mono text-sm mb-2">
              <code>document.getElementById("demo").style.fontSize = "25px";</code>
            </div>
            <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 w-full">
              Try it
            </Button>
          </div>
          <div className="bg-card border border-fire-darker rounded-md p-4">
            <h3 className="text-xl font-bold mb-2">Example</h3>
            <p className="mb-2">How to hide/show elements:</p>
            <div className="bg-[#1E1E1E] p-3 rounded-md text-white font-mono text-sm mb-2">
              <code>document.getElementById("demo").style.display = "none";</code>
            </div>
            <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 w-full">
              Try it
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Why Study JavaScript?</h2>
        <p className="text-lg mb-4">
          JavaScript is one of the 3 languages all web developers must learn:
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-6 text-lg">
          <li><strong>HTML</strong> to define the content of web pages</li>
          <li><strong>CSS</strong> to specify the layout of web pages</li>
          <li><strong>JavaScript</strong> to program the behavior of web pages</li>
        </ol>

        <div className="bg-card/50 p-4 rounded-md border border-fire-darker mb-6">
          <p>This tutorial covers every version of JavaScript:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>The Original JavaScript ES1 ES2 ES3 (1997-1999)</li>
            <li>The First Main Revision ES5 (2009)</li>
            <li>The Second Revision ES6 (2015)</li>
            <li>All Yearly Additions (2016, 2017, 2018, 2019, 2020)</li>
          </ul>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">JavaScript Examples</h2>
        <p className="text-lg mb-4">
          Learn by examples! At PyroProgramming you will find hundreds of JavaScript examples.
        </p>

        <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10">
          <Link href="/tutorials/javascript/examples">Go to JavaScript Examples</Link>
        </Button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">JavaScript Exercises</h2>
        <p className="text-lg mb-4">
          Test your JavaScript skills with exercises.
        </p>

        <div className="bg-card border border-fire-darker rounded-md p-6 mb-6">
          <h3 className="text-xl font-bold mb-4">Exercise:</h3>
          <p className="mb-4">Create a variable called carName and assign the value "Volvo" to it.</p>

          <div className="bg-[#1E1E1E] p-4 text-white font-mono text-sm rounded mb-4">
            <pre className="language-javascript">
              <code>{`___ = "Volvo";`}</code>
            </pre>
          </div>

          <Button className="bg-primary hover:bg-primary/90 text-white">
            Submit Answer »
          </Button>
        </div>

        <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10">
          <Link href="/tutorials/javascript/exercises">Start JavaScript Exercises</Link>
        </Button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">JavaScript Quiz</h2>
        <p className="text-lg mb-4">
          Test your JavaScript skills with our JavaScript Quiz!
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          <Link href="/tutorials/javascript/quiz">Start JavaScript Quiz</Link>
        </Button>
      </div>

      <div className="bg-card/50 border border-fire-darker p-6 rounded-md mb-8">
        <h2 className="text-3xl font-bold mb-4">Kickstart your career</h2>
        <p className="text-lg mb-4">
          Get certified by completing the JavaScript course
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white mt-2">
          Learn More
        </Button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Video: JavaScript in 60 Minutes</h2>
        <div className="bg-[#1E1E1E] rounded-md overflow-hidden">
          <div className="p-8 text-center text-white">
            <div className="inline-block bg-primary text-white text-3xl font-bold p-4 mb-4">
              JavaScript in 60 Minutes
            </div>
            <p className="text-xl mb-4">Full Course for Beginners</p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Watch Video
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
