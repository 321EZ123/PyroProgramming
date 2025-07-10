"use client";

export default function CssDimension() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Height/Width</h1>

      <h2 className="text-3xl font-semibold mb-4">Setting Dimensions</h2>
      <p className="text-lg mb-4">Use <code className="bg-card/50 px-1 rounded">width</code> and <code className="bg-card/50 px-1 rounded">height</code> to define element size.</p>

      <h2 className="text-3xl font-semibold mb-4">Percentage vs. Fixed Values</h2>
      <p className="text-lg mb-4">Use fixed values (px) for precise control and percentages (%) for responsive layouts.</p>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6">
        <pre className="text-white font-mono text-sm">
          <code>{`div { width: 300px; height: 200px; }

img { width: 100%; height: auto; }`}</code>
        </pre>
      </div>
    </div>
  );
}
