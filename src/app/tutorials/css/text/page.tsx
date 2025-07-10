"use client";

export default function CssText() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Text</h1>

      <h2 className="text-3xl font-semibold mb-4">Text Properties</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">text-align</code>: aligns text horizontally.</li>
        <li><code className="bg-card/50 px-1 rounded">text-transform</code>: controls capitalization.</li>
        <li><code className="bg-card/50 px-1 rounded">text-decoration</code>: adds decorative lines.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Text Styling</h2>
      <p className="text-lg mb-4">Use font properties like <code className="bg-card/50 px-1 rounded">font-size</code> and <code className="bg-card/50 px-1 rounded">font-weight</code> to style text.</p>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6">
        <pre className="text-white font-mono text-sm">
          <code>{`h1 { text-align: center; text-transform: uppercase; }
p { font-size: 16px; font-weight: 300; }`}</code>
        </pre>
      </div>
    </div>
  );
}
