"use client";

export default function JsDatatypes() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Data Types</h1>
      <h2 className="text-3xl font-semibold mb-4">Primitive vs Reference Types</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Primitive: string, number, boolean, null, undefined, symbol</li>
        <li>Reference: object (arrays, functions, objects)</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Type Checking</h2>
      <p className="text-lg mb-4">Use <code className="bg-card/50 px-1 rounded">typeof</code> for primitives and <code className="bg-card/50 px-1 rounded">instanceof</code> for objects.</p>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6 text-white font-mono text-sm">
        <pre>{`typeof 'hello'    // 'string'
typeof 123        // 'number'
typeof null       // 'object'
[1,2,3] instanceof Array // true`}</pre>
      </div>
    </div>
  );
}
