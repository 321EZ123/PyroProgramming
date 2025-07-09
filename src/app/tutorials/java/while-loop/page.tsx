"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java While Loop</h1>
      <h2 className="text-3xl font-semibold mb-4">While Loop Basics</h2>
      <p className="text-lg mb-4">Syntax: <code>while (condition) { '{' } // code { '}' }</code></p>
      <h2 className="text-3xl font-semibold mb-4">Infinite Loops</h2>
      <p className="text-lg mb-4">Avoid conditions that are always true, e.g., <code>while(true)</code> without a break.</p>
      <h2 className="text-3xl font-semibold mb-4">Use Cases</h2>
      <p className="text-lg mb-6">Use while loops when the number of iterations is not known in advance.</p>
    </div>
  );
}
