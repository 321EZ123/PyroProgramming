"use client";

export default function HtmlBasics() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Basics</h1>

      <h2 className="text-3xl font-semibold mb-4">Basic Syntax</h2>
      <p className="text-lg mb-4">
        HTML uses tags enclosed in angle brackets to define elements. Most elements have an opening tag <code className="bg-card/50 px-1 rounded">&lt;tagname&gt;</code> and a closing tag <code className="bg-card/50 px-1 rounded">&lt;/tagname&gt;</code>, with content in between.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Nesting Elements</h2>
      <p className="text-lg mb-4">
        Elements can be nested inside other elements. It is important to properly close inner elements before closing the outer ones to maintain valid HTML structure.
      </p>
      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            <code>{`<div>
  <p>This is a paragraph inside a div.</p>
</div>`}</code>
          </pre>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-4">Common HTML Tags</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">&lt;h1&gt;–&lt;h6&gt;</code>: Headings</li>
        <li><code className="bg-card/50 px-1 rounded">&lt;p&gt;</code>: Paragraphs</li>
        <li><code className="bg-card/50 px-1 rounded">&lt;a&gt;</code>: Links</li>
        <li><code className="bg-card/50 px-1 rounded">&lt;img&gt;</code>: Images</li>
        <li><code className="bg-card/50 px-1 rounded">&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</code>: Lists</li>
      </ul>
    </div>
  );
}
