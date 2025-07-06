"use client";

import { Button } from "@/components/ui/button";

export default function HtmlIntroduction() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Introduction</h1>

      <div className="bg-card/50 border border-fire-darker p-6 rounded-md mb-8">
        <p className="text-lg">
          HTML is the standard markup language for creating Web pages.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">What is HTML?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>HTML stands for Hyper Text Markup Language</li>
            <li>HTML is the standard markup language for creating Web pages</li>
            <li>HTML describes the structure of a Web page</li>
            <li>HTML consists of a series of elements</li>
            <li>HTML elements tell the browser how to display the content</li>
            <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">A Simple HTML Document</h2>

          <div className="bg-[#1E1E1E] rounded-md overflow-hidden shadow-lg mb-6">
            <div className="bg-card p-4 border-b border-fire-darker">
              <h3 className="text-lg font-semibold">Example:</h3>
            </div>
            <div className="p-4 text-white font-mono text-sm">
              <pre className="language-html">
                <code>{`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

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

          <div className="space-y-4">
            <p>Example Explained:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The <code className="bg-card/50 px-1 rounded">{'<!DOCTYPE html>'}</code> declaration defines that this document is an HTML5 document</li>
              <li>The <code className="bg-card/50 px-1 rounded">{'<html>'}</code> element is the root element of an HTML page</li>
              <li>The <code className="bg-card/50 px-1 rounded">{'<head>'}</code> element contains meta information about the HTML page</li>
              <li>The <code className="bg-card/50 px-1 rounded">{'<title>'}</code> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
              <li>The <code className="bg-card/50 px-1 rounded">{'<body>'}</code> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
              <li>The <code className="bg-card/50 px-1 rounded">{'<h1>'}</code> element defines a large heading</li>
              <li>The <code className="bg-card/50 px-1 rounded">{'<p>'}</code> element defines a paragraph</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">What is an HTML Element?</h2>
          <p className="mb-4">
            An HTML element is defined by a start tag, some content, and an end tag:
          </p>

          <div className="bg-card/50 p-4 border border-fire-darker rounded-md mb-4">
            <code className="text-lg font-mono">{'<tagname>Content goes here...</tagname>'}</code>
          </div>

          <p className="mb-4">
            The HTML <strong>element</strong> is everything from the start tag to the end tag:
          </p>

          <div className="bg-card/50 p-4 border border-fire-darker rounded-md mb-4">
            <code className="text-lg font-mono">{'<h1>My First Heading</h1>'}</code>
            <code className="text-lg font-mono block mt-2">{'<p>My first paragraph.</p>'}</code>
          </div>

          <table className="w-full border-collapse mb-4">
            <thead>
              <tr className="bg-card">
                <th className="border border-fire-darker p-2 text-left">Start tag</th>
                <th className="border border-fire-darker p-2 text-left">Element content</th>
                <th className="border border-fire-darker p-2 text-left">End tag</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-fire-darker p-2">{'<h1>'}</td>
                <td className="border border-fire-darker p-2">My First Heading</td>
                <td className="border border-fire-darker p-2">{'</h1>'}</td>
              </tr>
              <tr>
                <td className="border border-fire-darker p-2">{'<p>'}</td>
                <td className="border border-fire-darker p-2">My first paragraph.</td>
                <td className="border border-fire-darker p-2">{'</p>'}</td>
              </tr>
              <tr>
                <td className="border border-fire-darker p-2">{'<br>'}</td>
                <td className="border border-fire-darker p-2"></td>
                <td className="border border-fire-darker p-2">none</td>
              </tr>
            </tbody>
          </table>

          <p className="mb-4">
            <strong>Note:</strong> Some HTML elements have no content (like the {'<br>'} element). These elements are called empty elements. Empty elements do not have an end tag!
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Web Browsers</h2>
          <p className="mb-4">
            The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly.
          </p>
          <p className="mb-4">
            A browser does not display the HTML tags, but uses them to determine how to display the document:
          </p>

          <div className="bg-card p-6 rounded-md border border-fire-darker">
            <h1 className="text-3xl font-bold mb-4">My First Heading</h1>
            <p className="text-lg">My first paragraph.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">HTML Page Structure</h2>
          <p className="mb-4">
            Below is a visualization of an HTML page structure:
          </p>

          <div className="bg-[#1E1E1E] text-white font-mono p-4 rounded-md mb-4">
            <div className="pl-0">{'<html>'}</div>
            <div className="pl-4">{'<head>'}</div>
            <div className="pl-8">{'<title>Page title</title>'}</div>
            <div className="pl-4">{'</head>'}</div>
            <div className="pl-4">{'<body>'}</div>
            <div className="pl-8">
              <div>{'<h1>This is a heading</h1>'}</div>
              <div>{'<p>This is a paragraph.</p>'}</div>
              <div>{'<p>This is another paragraph.</p>'}</div>
            </div>
            <div className="pl-4">{'</body>'}</div>
            <div className="pl-0">{'</html>'}</div>
          </div>

          <div className="bg-card/50 p-4 rounded-md border border-fire-darker">
            <p><strong>Note:</strong> The content inside the {'<body>'} section will be displayed in a browser. The content inside the {'<title>'} element will be shown in the browser's title bar or in the page's tab.</p>
          </div>
        </section>

        <section className="border-t border-fire-darker pt-8">
          <h2 className="text-2xl font-bold mb-4">HTML Exercises</h2>
          <p className="mb-4">Test yourself with exercises:</p>

          <div className="bg-card border border-fire-darker rounded-md p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">Exercise:</h3>
            <p className="mb-4">Add a "tooltip" to the paragraph below with the text "About PyroProgramming".</p>

            <div className="bg-[#1E1E1E] p-4 text-white font-mono text-sm rounded mb-4">
              <pre className="language-html">
                <code>{`<p  >PyroProgramming is a web developer's platform.</p>`}</code>
              </pre>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white">
              Submit Answer »
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
