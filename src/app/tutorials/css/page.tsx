"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CssTutorialHome() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">CSS Tutorial</h1>

      <div className="bg-card/50 border border-fire-darker p-6 rounded-md mb-8">
        <h2 className="text-3xl font-bold mb-4">Learn CSS</h2>
        <p className="text-lg mb-4">
          CSS is the language we use to style an HTML document.
        </p>
        <p className="text-lg mb-4">
          CSS describes how HTML elements should be displayed.
        </p>
        <p className="text-lg mb-4">
          This tutorial will teach you CSS from basic to advanced.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white mt-4">
          <Link href="/tutorials/css/intro">Start learning CSS now »</Link>
        </Button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Examples in Each Chapter</h2>
        <p className="text-lg mb-4">
          This CSS tutorial contains hundreds of CSS examples.
        </p>
        <p className="text-lg mb-4">
          With our online editor, you can edit the CSS, and click on a button to view the result.
        </p>

        <div className="bg-[#1E1E1E] rounded-md overflow-hidden shadow-lg mb-6">
          <div className="bg-card p-4 border-b border-fire-darker">
            <h3 className="text-lg font-semibold">Example:</h3>
          </div>
          <div className="p-4 text-white font-mono text-sm">
            <pre className="language-css">
              <code>{`body {
  background-color: #111827;
  color: white;
  font-family: Arial, sans-serif;
}

h1 {
  color: #ff4500;
  text-align: center;
}

p {
  font-family: Verdana, sans-serif;
  margin: 20px;
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
        <h2 className="text-3xl font-bold mb-6">CSS References</h2>
        <p className="text-lg mb-4">
          At PyroProgramming you will find complete CSS references of all properties and selectors with syntax, examples, browser support, and more:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 py-3 h-auto">
            CSS Properties Reference
          </Button>
          <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 py-3 h-auto">
            CSS Selectors Reference
          </Button>
          <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 py-3 h-auto">
            CSS Functions Reference
          </Button>
          <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 py-3 h-auto">
            CSS Animatable Reference
          </Button>
          <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 py-3 h-auto">
            CSS Aural Reference
          </Button>
          <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 py-3 h-auto">
            CSS Web Safe Fonts
          </Button>
          <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 py-3 h-auto">
            CSS Color References
          </Button>
          <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 py-3 h-auto">
            CSS Default Values
          </Button>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Video: CSS Crash Course</h2>
        <div className="bg-[#1E1E1E] rounded-md overflow-hidden">
          <div className="p-8 text-center text-white">
            <div className="inline-block bg-primary text-white text-3xl font-bold p-4 mb-4">
              CSS Crash Course
            </div>
            <p className="text-xl mb-4">in just 20 minutes</p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Link href="https://www.youtube.com/watch?v=1PnVor36_40">Watch Video</Link>
            </Button>
            <p className="text-sm mt-2">We are not affiliated with YouTube or the creator of the video.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
