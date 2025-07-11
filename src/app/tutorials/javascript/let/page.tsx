"use client";

export default function JsLet() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Let</h1>
      <h2 className="text-3xl font-semibold mb-4">Using let</h2>
      <p className="text-lg mb-4">Declare block-scoped variables using <code className="bg-card/50 px-1 rounded">let</code>, e.g., <code className="bg-card/50 px-1 rounded">let x = 10;</code>.</p>

      <h2 className="text-3xl font-semibold mb-4">When to Use let</h2>
      <p className="text-lg mb-4">Use <code className="bg-card/50 px-1 rounded">let</code> when a variable's value needs to change over time within its block scope.</p>

      <h2 className="text-3xl font-semibold mb-4">Practical Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6">
        <pre className="text-white font-mono text-sm">{`for (let i = 0; i < 5; i++) {
  console.log(i);
}`}</pre>
      </div>
    </div>
  );
}
