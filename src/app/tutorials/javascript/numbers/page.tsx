"use client";

export default function JsNumbers() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Numbers</h1>
      <h2 className="text-3xl font-semibold mb-4">Number Types</h2>
      <p className="text-lg mb-4">JavaScript has a single Number type for both integers and floats.</p>

      <h2 className="text-3xl font-semibold mb-4">Common Number Methods</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li><code className="bg-card/50 px-1 rounded">parseInt()</code></li>
        <li><code className="bg-card/50 px-1 rounded">parseFloat()</code></li>
        <li><code className="bg-card/50 px-1 rounded">toFixed()</code></li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6 text-white font-mono text-sm">
        <pre>{`console.log(parseInt('15')); // 15
console.log(parseFloat('10.5')); // 10.5
console.log((2/3).toFixed(2)); // '0.67'`}</pre>
      </div>
    </div>
  );
}
