"use client";

export default function JsStatements() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Statements</h1>
      <h2 className="text-3xl font-semibold mb-4">Definition and Structure</h2>
      <p className="text-lg mb-4">Statements are individual instructions that JavaScript executes. Each statement ends with a semicolon.</p>

      <h3 className="text-2xl font-medium mb-2">Types of Statements</h3>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Declaration statements: <code className="bg-card/50 px-1 rounded">let x = 5;</code></li>
        <li>Expression statements: <code className="bg-card/50 px-1 rounded">x + y;</code></li>
        <li>Control flow statements: <code className="bg-card/50 px-1 rounded">if, for, while</code></li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="bg-card p-4 border-b border-fire-darker">
          <h3 className="text-lg font-semibold">Example:</h3>
        </div>
        <div className="p-4 text-white font-mono text-sm">
          <pre>{`let x = 10;
if (x > 5) {
  x++;
}
for (let i = 0; i < x; i++) {
  console.log(i);
}`}</pre>
        </div>
      </div>
    </div>
  );
}
