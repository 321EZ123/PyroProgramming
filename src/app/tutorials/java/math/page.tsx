"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java Math</h1>
      <h2 className="text-3xl font-semibold mb-4">Math Class Overview</h2>
      <p className="text-lg mb-4">The <code>Math</code> class provides methods such as <code>abs()</code>, <code>sqrt()</code>, <code>pow()</code>, <code>min()</code>, <code>max()</code>.</p>
      <h2 className="text-3xl font-semibold mb-4">Random Numbers</h2>
      <p className="text-lg mb-4">Use <code>Math.random()</code> to generate a random double between 0.0 and 1.0.</p>
      <h2 className="text-3xl font-semibold mb-4">Rounding Methods</h2>
      <p className="text-lg mb-6">Use <code>Math.round()</code>, <code>Math.floor()</code>, and <code>Math.ceil()</code> to round numbers.</p>
    </div>
  );
}
