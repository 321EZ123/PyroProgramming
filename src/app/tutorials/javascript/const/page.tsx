"use client";

export default function JsConst() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Const</h1>
      <h2 className="text-3xl font-semibold mb-4">Using const</h2>
      <p className="text-lg mb-4">Declare constants with <code className="bg-card/50 px-1 rounded">const</code>. These must be initialized at declaration and cannot be reassigned.</p>

      <h2 className="text-3xl font-semibold mb-4">Immutability and Scope</h2>
      <p className="text-lg mb-4">Const variables are block-scoped and immutable for primitive values. For objects and arrays, the binding is constant but properties or elements can change.</p>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6">
        <pre className="text-white font-mono text-sm">{`const PI = 3.14;
const arr = [1,2,3];
arr.push(4);  // Allowed
// PI = 3.1415; // Error`}</pre>
      </div>
    </div>
  );
}
