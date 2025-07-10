"use client";

export default function CssLinks() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Links</h1>

      <h2 className="text-3xl font-semibold mb-4">Styling Links</h2>
      <p className="text-lg mb-4">Use properties like <code className="bg-card/50 px-1 rounded">color</code> and <code className="bg-card/50 px-1 rounded">text-decoration</code>.</p>

      <h2 className="text-3xl font-semibold mb-4">Pseudo-classes</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">:hover</code>: style when mouse hovers.</li>
        <li><code className="bg-card/50 px-1 rounded">:active</code>: style when link is clicked.</li>
        <li><code className="bg-card/50 px-1 rounded">:visited</code>: style visited links.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6">
        <pre className="text-white font-mono text-sm">
          <code>{`a { color: blue; text-decoration: none; }

a:hover { text-decoration: underline; }

a:visited { color: purple; }`}</code>
        </pre>
      </div>
    </div>
  );
}
