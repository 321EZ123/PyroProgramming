"use client";

export default function CssSyntax() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Syntax</h1>

      <h2 className="text-3xl font-semibold mb-4">Understanding CSS Syntax</h2>
      <p className="text-lg mb-4">
        CSS syntax consists of selectors, properties, and values. A selector targets HTML elements, and declarations inside curly braces define style properties.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Basic Rules</h2>
      <p className="text-lg mb-4">
        CSS rules are written as <code className="bg-card/50 px-1 rounded">{`selector { property: value; }`}</code>. Always end declarations with semicolons.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Example Rules</h2>
      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            <code>{`h1 { color: red; font-size: 24px; }
p { margin: 20px; line-height: 1.5; }`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
