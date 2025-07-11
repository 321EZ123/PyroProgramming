"use client";

export default function JsArithmetic() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Arithmetic</h1>
      <h2 className="text-3xl font-semibold mb-4">Basic Arithmetic Operations</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Addition: <code className="bg-card/50 px-1 rounded">a + b</code></li>
        <li>Subtraction: <code className="bg-card/50 px-1 rounded">a - b</code></li>
        <li>Multiplication: <code className="bg-card/50 px-1 rounded">a * b</code></li>
        <li>Division: <code className="bg-card/50 px-1 rounded">a / b</code></li>
        <li>Modulus: <code className="bg-card/50 px-1 rounded">a % b</code></li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Special Cases</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li><code className="bg-card/50 px-1 rounded">NaN</code>: Result of undefined or invalid math</li>
        <li><code className="bg-card/50 px-1 rounded">Infinity</code>: Division by zero</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Operator Precedence</h2>
      <p className="text-lg mb-4">Multiplication and division have higher precedence than addition and subtraction. Use parentheses to clarify order.</p>
    </div>
  );
}
