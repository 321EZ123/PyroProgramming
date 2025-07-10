"use client";

export default function CssIcons() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Icons</h1>

      <h2 className="text-3xl font-semibold mb-4">Using Icons in CSS</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Font libraries like Font Awesome.</li>
        <li>Inline SVGs styled via CSS.</li>
        <li>Image icons using <code className="bg-card/50 px-1 rounded">background-image</code>.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Styling Icons</h2>
      <p className="text-lg mb-4">Use <code className="bg-card/50 px-1 rounded">font-size</code>, <code className="bg-card/50 px-1 rounded">color</code>, and <code className="bg-card/50 px-1 rounded">width/height</code> properties.</p>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6">
        <pre className="text-white font-mono text-sm">
          <code>{`/* Font Awesome */
i { font-family: 'Font Awesome 5 Free'; font-weight: 900; font-size: 24px; }

/* SVG icon */
.svg-icon { width: 32px; height: 32px; fill: red; }`}</code>
        </pre>
      </div>
    </div>
  );
}
