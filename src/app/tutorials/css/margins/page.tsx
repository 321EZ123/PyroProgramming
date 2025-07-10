"use client";

export default function CssMargins() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Margins</h1>

      <h2 className="text-3xl font-semibold mb-4">Understanding Margins</h2>
      <p className="text-lg mb-4">Margins create space around elements, outside of any defined borders.</p>

      <h2 className="text-3xl font-semibold mb-4">Margin Properties</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">margin</code>: sets all four margins.</li>
        <li><code className="bg-card/50 px-1 rounded">margin-top</code>, <code className="bg-card/50 px-1 rounded">margin-right</code>, etc.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6">
        <pre className="text-white font-mono text-sm">
          <code>{`div { margin: 20px; }

p { margin-top: 10px; margin-bottom: 10px; }`}</code>
        </pre>
      </div>
    </div>
  );
}
