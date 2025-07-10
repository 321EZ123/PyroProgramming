"use client";

export default function HtmlCss() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML CSS Overview (Only Covers the Bare Minimum of CSS)</h1>

      <h2 className="text-3xl font-semibold mb-4">What is CSS?</h2>
      <p className="text-lg mb-4">
        CSS (Cascading Style Sheets) is used to style HTML elements and control layout, colors, fonts, and more.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Linking CSS to HTML</h2>
      <p className="text-lg mb-4">
        You can link an external CSS file using the <code className="bg-card/50 px-1 rounded">&lt;link&gt;</code> tag inside the <code className="bg-card/50 px-1 rounded">&lt;head&gt;</code>.
      </p>
      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            <code>{`<head>
  <link rel="stylesheet" href="styles.css">
</head>`}</code>
          </pre>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-4">Inline, Internal, and External CSS</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Inline CSS: using the <code className="bg-card/50 px-1 rounded">style</code> attribute</li>
        <li>Internal CSS: within a <code className="bg-card/50 px-1 rounded">&lt;style&gt;</code> tag in the <code className="bg-card/50 px-1 rounded">&lt;head&gt;</code></li>
        <li>External CSS: using a separate .css file linked with <code className="bg-card/50 px-1 rounded">&lt;link&gt;</code></li>
      </ul>
    </div>
  );
}
