"use client";

export default function CssFonts() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Fonts</h1>

      <h2 className="text-3xl font-semibold mb-4">Font Properties</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">font-family</code>: sets typeface.</li>
        <li><code className="bg-card/50 px-1 rounded">font-size</code>: sets text size.</li>
        <li><code className="bg-card/50 px-1 rounded">font-weight</code>: sets boldness.</li>
        <li><code className="bg-card/50 px-1 rounded">font-style</code>: sets style like italic.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Web Fonts</h2>
      <p className="text-lg mb-4">Use Google Fonts with <code className="bg-card/50 px-1 rounded">@import</code> or <code className="bg-card/50 px-1 rounded">@font-face</code> in CSS.</p>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6">
        <pre className="text-white font-mono text-sm">
          <code>{`body { font-family: 'Arial', sans-serif; }

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
p { font-family: 'Roboto', sans-serif; }`}</code>
        </pre>
      </div>
    </div>
  );
}
