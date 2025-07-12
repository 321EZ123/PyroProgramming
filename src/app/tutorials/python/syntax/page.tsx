"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python Syntax</h1>
      <h2 className="text-3xl font-semibold mb-4">Basic Syntax Rules</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Indentation and whitespace define code blocks, no braces.</li>
        <li>Use consistent indentation (4 spaces recommended).</li>
      </ul>
      <h3 className="text-2xl font-semibold mb-2">Line Breaks and Comments</h3>
      <p className="text-lg mb-4">
        Statements end at line breaks; use <code className="bg-card/50 px-1 rounded">#</code> for comments.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Common Syntax Errors</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Indentation errors: mixing tabs and spaces.</li>
        <li>Missing colons after control statements.</li>
        <li>Unclosed parentheses or quotes.</li>
      </ul>
    </div>
  );
}
