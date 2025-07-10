"use client";

export default function HtmlColors() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Colors</h1>

      <h2 className="text-3xl font-semibold mb-4">Using Colors in HTML</h2>
      <p className="text-lg mb-4">
        You can specify colors using the <code className="bg-card/50 px-1 rounded">style</code> attribute and CSS color properties.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Color Values</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Hexadecimal (e.g., <code className="bg-card/50 px-1 rounded">#FF5733</code>)</li>
        <li>RGB (e.g., <code className="bg-card/50 px-1 rounded">rgb(255, 87, 51)</code>)</li>
        <li>Named colors (e.g., <code className="bg-card/50 px-1 rounded">blue</code>)</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            <code>{`<p style="color: #FF5733;">Hex color example.</p>
<p style="color: rgb(255, 87, 51);">RGB color example.</p>
<p style="color: blue;">Named color example.</p>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
