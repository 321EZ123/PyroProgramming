"use client";

export default function JsSyntax() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Syntax</h1>
      <h2 className="text-3xl font-semibold mb-4">Basic Syntax Rules</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Case sensitivity: <code className="bg-card/50 px-1 rounded">myVar</code> ≠ <code className="bg-card/50 px-1 rounded">myvar</code></li>
        <li>Semicolons and line breaks: Optional semicolons, but recommended to avoid errors.</li>
        <li>Whitespace and indentation: Improves readability; no effect on execution.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Common Errors</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Missing semicolon: <code className="bg-card/50 px-1 rounded">Uncaught SyntaxError</code></li>
        <li>Unexpected token: Typos in keywords or braces.</li>
      </ul>
    </div>
  );
}
