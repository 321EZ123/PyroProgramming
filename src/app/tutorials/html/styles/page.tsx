"use client";

export default function HtmlStyles() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Styles</h1>

      <h2 className="text-3xl font-semibold mb-4">Inline Styles</h2>
      <p className="text-lg mb-4">
        Inline styles are added directly to HTML elements using the <code className="bg-card/50 px-1 rounded">style</code> attribute.
      </p>
      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            <code>{`<p style="color: red; font-size: 20px;">This text is styled inline.</p>`}</code>
          </pre>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-4">Using the {'<style>'} Tag</h2>
      <p className="text-lg mb-4">
        The <code className="bg-card/50 px-1 rounded">&lt;style&gt;</code> tag allows you to write internal CSS within the <code className="bg-card/50 px-1 rounded">&lt;head&gt;</code> section.
      </p>
      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            <code>{`<head>
  <style>
    p { color: blue; }
    .highlight { background: yellow; }
  </style>
</head>`}</code>
          </pre>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-4">Best Practices for Styling</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Use external CSS for maintainability.</li>
        <li>Avoid inline styles when possible.</li>
        <li>Group related styles together and use classes.</li>
      </ul>
    </div>
  );
}
