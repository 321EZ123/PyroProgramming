"use client";

export default function CssHowTo() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS How To</h1>

      <h2 className="text-3xl font-semibold mb-4">Applying CSS</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Inline:</strong> using the <code className="bg-card/50 px-1 rounded">style</code> attribute directly on elements.</li>
        <li><strong>Internal:</strong> placing CSS inside a <code className="bg-card/50 px-1 rounded">&lt;style&gt;</code> tag within the HTML <code className="bg-card/50 px-1 rounded">&lt;head&gt;</code>.</li>
        <li><strong>External:</strong> linking to an external .css file using the <code className="bg-card/50 px-1 rounded">&lt;link&gt;</code> tag.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Linking CSS to HTML</h2>
      <p className="text-lg mb-4">Use the <code className="bg-card/50 px-1 rounded">&lt;link rel="stylesheet" href="styles.css" /&gt;</code> tag in the <code className="bg-card/50 px-1 rounded">&lt;head&gt;</code> section.</p>
      <p className="text-lg mb-4">Alternatively, embed CSS using the <code className="bg-card/50 px-1 rounded">&lt;style&gt;</code> tag.</p>

      <h2 className="text-3xl font-semibold mb-4">Best Practices</h2>
      <p className="text-lg mb-4">Use external stylesheets for maintainability and caching; internal for page-specific styles; inline for quick tests or overrides.</p>
    </div>
  );
}
