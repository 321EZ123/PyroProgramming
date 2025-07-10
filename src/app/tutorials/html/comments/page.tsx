"use client";

export default function HtmlComments() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Comments</h1>

      <h2 className="text-3xl font-semibold mb-4">What are Comments?</h2>
      <p className="text-lg mb-4">
        Comments are notes in the code that are not displayed in the browser but help document and explain the HTML.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Syntax for Comments</h2>
      <p className="text-lg mb-4">
        Use <code className="bg-card/50 px-1 rounded">&lt;!-- comment --&gt;</code> to add comments in HTML.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Best Practices</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Use comments to explain complex code.</li>
        <li>Keep comments concise and relevant.</li>
        <li>Avoid over-commenting simple code.</li>
      </ul>
    </div>
  );
}
