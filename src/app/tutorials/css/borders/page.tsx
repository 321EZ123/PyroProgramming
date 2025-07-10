"use client";

export default function CssBorders() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Borders</h1>

      <h2 className="text-3xl font-semibold mb-4">Border Properties</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">border-width</code>: sets border thickness.</li>
        <li><code className="bg-card/50 px-1 rounded">border-style</code>: sets border line style.</li>
        <li><code className="bg-card/50 px-1 rounded">border-color</code>: sets border color.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Shorthand Property</h2>
      <p className="text-lg mb-4">Use <code className="bg-card/50 px-1 rounded">border: 1px solid #000;</code> for concise syntax.</p>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6">
        <pre className="text-white font-mono text-sm">
          <code>{`div { border-width: 2px; border-style: dashed; border-color: blue; }

p { border: 1px solid red; padding: 10px; }`}</code>
        </pre>
      </div>
    </div>
  );
}
