"use client";

export default function CssBackgrounds() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Backgrounds</h1>

      <h2 className="text-3xl font-semibold mb-4">Background Properties</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">background-color</code>: sets background color.</li>
        <li><code className="bg-card/50 px-1 rounded">background-image</code>: sets background image.</li>
        <li><code className="bg-card/50 px-1 rounded">background-repeat</code>: controls tile repetition.</li>
        <li><code className="bg-card/50 px-1 rounded">background-position</code>: sets image position.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Using Images as Backgrounds</h2>
      <p className="text-lg mb-4">Use <code className="bg-card/50 px-1 rounded">background-image: url('image.jpg');</code> to load images.</p>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6">
        <pre className="text-white font-mono text-sm">
          <code>{`body { background-color: #f0f0f0; }
div { background-image: url('bg.jpg'); background-repeat: no-repeat; background-position: center; }`}</code>
        </pre>
      </div>
    </div>
  );
}
