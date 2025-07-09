"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java Comments</h1>
      <h2 className="text-3xl font-semibold mb-4">Types of Comments</h2>
      <ul className="list-disc list-inside mb-6">
        <li><code>//</code> Single-line comments</li>
        <li><code>/* */</code> Multi-line comments</li>
        <li><code>/** */</code> Documentation comments (Javadoc)</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Best Practices</h2>
      <p className="text-lg mb-6">Use comments to explain why code exists or clarify complex logic. Avoid obvious comments that duplicate code.</p>
    </div>
  );
}
