"use client";

export default function CssBoxModel() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Box Model</h1>

      <h2 className="text-3xl font-semibold mb-4">Understanding the Box Model</h2>
      <p className="text-lg mb-4">The CSS box model describes how elements are structured: content, padding, border, and margin.</p>

      <h2 className="text-3xl font-semibold mb-4">Visual Representation</h2>
      <div className="bg-card border border-fire-darker p-6 rounded-md mb-6">
        <p className="text-lg">[Box Model Diagram Placeholder]</p>
      </div>

      <h2 className="text-3xl font-semibold mb-4">Impact on Layout</h2>
      <p className="text-lg mb-4">Padding and borders increase the total size of elements, affecting spacing and alignment.</p>
    </div>
  );
}
