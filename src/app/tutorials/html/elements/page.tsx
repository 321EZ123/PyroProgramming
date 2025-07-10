"use client";

export default function HtmlElements() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Elements</h1>

      <h2 className="text-3xl font-semibold mb-4">Definition of Elements</h2>
      <p className="text-lg mb-4">
        An HTML element is a part of HTML, defined by a start tag, content, and an end tag. Elements form the building blocks of web pages.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Block-Level vs Inline Elements</h2>
      <p className="text-lg mb-4">
        Block-level elements start on a new line and take up the full width available, while inline elements do not start on a new line and only take as much width as necessary.
      </p>

      <h3 className="text-2xl font-semibold mb-2">Common Block-Level Elements</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">&lt;div&gt;</code></li>
        <li><code className="bg-card/50 px-1 rounded">&lt;p&gt;</code></li>
        <li><code className="bg-card/50 px-1 rounded">&lt;h1&gt;–&lt;h6&gt;</code></li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2">Common Inline Elements</h3>
      <ul className="list-disc pl-6">
        <li><code className="bg-card/50 px-1 rounded">&lt;span&gt;</code></li>
        <li><code className="bg-card/50 px-1 rounded">&lt;a&gt;</code></li>
        <li><code className="bg-card/50 px-1 rounded">&lt;img&gt;</code></li>
      </ul>
    </div>
  );
}
