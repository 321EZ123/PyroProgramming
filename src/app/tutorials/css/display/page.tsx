"use client";

export default function CssDisplay() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Display</h1>

      <h2 className="text-3xl font-semibold mb-4">Display Property</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">block</code>: starts on a new line, full width.</li>
        <li><code className="bg-card/50 px-1 rounded">inline</code>: flows within text.</li>
        <li><code className="bg-card/50 px-1 rounded">inline-block</code>: inline flow but accepts width/height.</li>
        <li><code className="bg-card/50 px-1 rounded">flex</code>: enables flexbox layout.</li>
        <li><code className="bg-card/50 px-1 rounded">grid</code>: enables grid layout.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Visibility vs. Display</h2>
      <p className="text-lg mb-4"><code className="bg-card/50 px-1 rounded">display: none</code> removes element from layout; <code className="bg-card/50 px-1 rounded">visibility: hidden</code> hides but retains space.</p>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6">
        <pre className="text-white font-mono text-sm">
          <code>{`div { display: inline-block; width: 100px; }

nav { display: flex; gap: 10px; }`}</code>
        </pre>
      </div>
    </div>
  );
}
