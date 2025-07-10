"use client";

export default function CssTables() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Tables</h1>

      <h2 className="text-3xl font-semibold mb-4">Table Properties</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">border-collapse</code>: collapse table borders.</li>
        <li><code className="bg-card/50 px-1 rounded">border-spacing</code>: space between cells.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Styling Table Elements</h2>
      <p className="text-lg mb-4">Style <code className="bg-card/50 px-1 rounded">table</code>, <code className="bg-card/50 px-1 rounded">tr</code>, <code className="bg-card/50 px-1 rounded">td</code>, and <code className="bg-card/50 px-1 rounded">th</code> individually.</p>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6">
        <pre className="text-white font-mono text-sm">
          <code>{`table { border-collapse: collapse; width: 100%; }

th, td { border: 1px solid #ddd; padding: 8px; }`}</code>
        </pre>
      </div>
    </div>
  );
}
