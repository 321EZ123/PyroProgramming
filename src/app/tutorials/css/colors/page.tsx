"use client";

export default function CssColors() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Colors</h1>

      <h2 className="text-3xl font-semibold mb-4">Introduction to Colors in CSS</h2>
      <p className="text-lg mb-4">CSS supports various color models: RGB, HEX, and HSL. These models define colors through different representations.</p>

      <h2 className="text-3xl font-semibold mb-4">Common Color Properties</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">color</code>: sets the text color.</li>
        <li><code className="bg-card/50 px-1 rounded">background-color</code>: sets the background color of an element.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6">
        <pre className="text-white font-mono text-sm">
          <code>{`/* RGB */
h1 { color: rgb(255, 0, 0); }

/* HEX */
p { color: #00ff00; }

/* HSL */
div { background-color: hsl(240, 100%, 50%); }`}</code>
        </pre>
      </div>
    </div>
  );
}
