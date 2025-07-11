"use client";

export default function JsComments() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Comments</h1>
      <h2 className="text-3xl font-semibold mb-4">Types of Comments</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>
          Single-line comments: <code className="bg-card/50 px-1 rounded">// This is a comment</code>
        </li>
        <li>
          Multi-line comments: <code className="bg-card/50 px-1 rounded">/* Comment block */</code>
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Best Practices</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Use comments to explain complex logic, not obvious code.</li>
        <li>Keep comments clear, concise, and up-to-date.</li>
      </ul>
    </div>
  );
}
