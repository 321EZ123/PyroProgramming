"use client";

export default function CssComments() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Comments</h1>

      <h2 className="text-3xl font-semibold mb-4">Adding Comments in CSS</h2>
      <p className="text-lg mb-4">Comments in CSS are written using <code className="bg-card/50 px-1 rounded">/* comment text */</code>.</p>

      <h2 className="text-3xl font-semibold mb-4">Purpose of Comments</h2>
      <p className="text-lg mb-4">Comments help document your code, explain sections, and improve readability.</p>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6">
        <pre className="text-white font-mono text-sm">
          <code>{`/* Main container styles */
.container {
  width: 100%;
  padding: 20px;
}

/* Highlighted text */
.highlight { color: yellow; }`}</code>
        </pre>
      </div>
    </div>
  );
}
