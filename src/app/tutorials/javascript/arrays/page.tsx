"use client";

export default function JsArrays() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Arrays</h1>
      <h2 className="text-3xl font-semibold mb-4">Array Basics</h2>
      <p className="text-lg mb-4">Arrays store ordered collections of values: <code className="bg-card/50 px-1 rounded">const arr = [1, 2, 3];</code>.</p>

      <h2 className="text-3xl font-semibold mb-4">Array Methods</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li><code className="bg-card/50 px-1 rounded">push(), pop()</code></li>
        <li><code className="bg-card/50 px-1 rounded">shift(), unshift()</code></li>
        <li><code className="bg-card/50 px-1 rounded">splice(), slice()</code></li>
        <li><code className="bg-card/50 px-1 rounded">map(), filter(), reduce()</code></li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6 text-white font-mono text-sm">
        <pre>{`let nums = [1, 2, 3];
nums.push(4);
nums = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
const sum = nums.reduce((a, b) => a + b, 0);`}</pre>
      </div>
    </div>
  );
}
