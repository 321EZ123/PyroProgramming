"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java Switch</h1>
      <h2 className="text-3xl font-semibold mb-4">Switch Statement Basics</h2>
      <p className="text-lg mb-4">Syntax: <code>switch (expression) { '{' } case value: // code break; default: // code { '}' }</code></p>
      <h2 className="text-3xl font-semibold mb-4">Case Handling</h2>
      <p className="text-lg mb-4">Use <code>case</code> labels and <code>break</code> statements to control flow. The <code>default</code> case handles unmatched values.</p>
      <h2 className="text-3xl font-semibold mb-4">Limitations of Switch</h2>
      <p className="text-lg mb-6">Switch works with primitives, enums, and Strings (Java 7+), but cannot handle complex conditions.</p>
    </div>
  );
}
