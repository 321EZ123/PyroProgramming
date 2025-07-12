"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HtmlTutorialHome() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">HTML Tutorial</h1>

      <div className="bg-card/50 border border-fire-darker p-6 rounded-md mb-8">
        <h2 className="text-3xl font-bold mb-4">Learn HTML</h2>
        <p className="text-lg mb-4">
          HTML is the standard markup language for Web pages.
        </p>
        <p className="text-lg mb-4">
          With HTML you can create your own Website.
        </p>
        <p className="text-lg mb-4">
          HTML is easy to learn - You will enjoy it!
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white mt-4">
          <Link href="/tutorials/html/intro">Start learning HTML now »</Link>
        </Button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Easy Learning with HTML "Try it Yourself"</h2>
        <p className="text-lg mb-4">
          With our online editor, you can edit the HTML code and view the result in your browser.
        </p>

        <div className="bg-[#1E1E1E] rounded-md overflow-hidden shadow-lg mb-6">
          <div className="bg-card p-4 border-b border-fire-darker">
            <h3 className="text-lg font-semibold">Example:</h3>
          </div>
          <div className="p-4 text-white font-mono text-sm">
            <pre className="language-html">
              <code>{`<!DOCTYPE html>
<html>
<head>
  <title>HTML Tutorial</title>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}</code>
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
        <h2 className="text-3xl font-bold mb-6">HTML Examples</h2>
        <p className="text-lg mb-4">
          In this HTML tutorial, you will find more than 200 examples. With our online editor, you can edit the HTML code and view the result.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">HTML Elements</h2>
        <p className="text-lg mb-4">
          At PyroProgramming you will find complete examples about HTML elements, attributes, events, color names, entities, character sets, URL encoding, language codes, HTTP messages, and more:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 py-3 h-auto">
            HTML Elements
          </Button>
          <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 py-3 h-auto">
            Browser Support
          </Button>
          <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 py-3 h-auto">
            Attributes
          </Button>
          <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 py-3 h-auto">
            Global Attributes
          </Button>
          <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 py-3 h-auto">
            Event Attributes
          </Button>
          <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 py-3 h-auto">
            Color Names
          </Button>
          <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 py-3 h-auto">
            Canvas
          </Button>
          <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 py-3 h-auto">
            Audio/Video DOM
          </Button>
          <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 py-3 h-auto">
            Character Sets
          </Button>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Video: HTML for Beginners</h2>
        <div className="bg-[#1E1E1E] rounded-md overflow-hidden">
          <div className="p-8 text-center text-white">
            <div className="inline-block bg-primary text-white text-3xl font-bold p-4 mb-4">
              HTML for Beginners
            </div>
            <p className="text-xl mb-4">in just 1 hour</p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Link href="https://www.youtube.com/watch?v=HD13eq_Pmp8">Watch Video</Link>
            </Button>
            <p className="text-sm mt-2">We are not affiliated with YouTube or the creator of the video.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
