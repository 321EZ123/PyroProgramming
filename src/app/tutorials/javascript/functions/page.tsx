"use client";

export default function JsFunctions() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Functions</h1>
      <h2 className="text-3xl font-semibold mb-4">Function Declaration and Expression</h2>
      <p className="text-lg mb-4">
        Declare functions using{" "}
        <code className="bg-card/50 px-1 rounded">{'function myFunc() {}'}</code>{" "}
        or expressions{" "}
        <code className="bg-card/50 px-1 rounded">{'const myFunc = function() {}'}</code>.
      </p>

      <h2 className="text-3xl font-semibold mb4">Parameters and Return Values</h2>
      <p className="text-lg mb-4">
        Functions can accept parameters and return values using{" "}
        <code className="bg-card/50 px-1 rounded">return</code>.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Arrow Functions</h2>
      <p className="text-lg mb-4">
        Shorter syntax:{" "}
        <code className="bg-card/50 px-1 rounded">{'const add = (a, b) => a + b;'}</code>.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6 text-white font-mono text-sm">
        <pre>{`function greet(name) {
  return 'Hello ' + name;
}
const sum = (a, b = 0, c) => a + b + c;
console.log(greet('World'));
console.log(sum(5, 3));`}</pre>
      </div>
    </div>
  );
}
