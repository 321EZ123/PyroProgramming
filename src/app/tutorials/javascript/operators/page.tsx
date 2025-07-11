"use client";

export default function JsOperators() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Operators</h1>
      <h2 className="text-3xl font-semibold mb-4">Types of Operators</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Arithmetic: +, -, *, /, %</li>
        <li>Assignment: =, +=, -=, *=, /=</li>
        <li>Comparison: ==, ===, !=, !==, &lt;, &gt;, &lt;=, &gt;=</li>
        <li>Logical: &&, ||, !</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Operator Precedence</h2>
      <p className="text-lg mb-4">Precedence determines the order in which operators are evaluated. Use parentheses to override.</p>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6 text-white font-mono text-sm">
        <pre>{`1 + 2 * 3   // 7
(1 + 2) * 3 // 9
x += 5      // x = x + 5
true && false // false`}</pre>
      </div>
    </div>
  );
}
