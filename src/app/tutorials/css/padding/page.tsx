"use client";

export default function CssPadding() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Padding</h1>

      <h2 className="text-3xl font-semibold mb-4">Introduction to Padding</h2>
      <p className="text-lg mb-4">Padding adds space inside an element, between the content and its border.</p>

      <h2 className="text-3xl font-semibold mb-4">Padding Properties</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">padding</code>: sets all four paddings.</li>
        <li><code className="bg-card/50 px-1 rounded">padding-left</code>, <code className="bg-card/50 px-1 rounded">padding-right</code>, etc.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6">
        <pre className="text-white font-mono text-sm">
          <code>{`div { padding: 20px; background: #eee; }

p { padding-top: 10px; padding-bottom: 10px; }`}</code>
        </pre>
      </div>
    </div>
  );
}
