"use client";

export default function CssLists() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Lists</h1>

      <h2 className="text-3xl font-semibold mb-4">Styling Lists</h2>
      <p className="text-lg mb-4">Use <code className="bg-card/50 px-1 rounded">ul</code>, <code className="bg-card/50 px-1 rounded">ol</code>, and <code className="bg-card/50 px-1 rounded">li</code> to style lists.</p>

      <h2 className="text-3xl font-semibold mb-4">List Properties</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">list-style-type</code>: defines bullet style.</li>
        <li><code className="bg-card/50 px-1 rounded">list-style-position</code>: defines bullet position.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6">
        <pre className="text-white font-mono text-sm">
          <code>{`ul { list-style-type: square; }

ol { list-style-position: inside; }`}</code>
        </pre>
      </div>
    </div>
  );
}
