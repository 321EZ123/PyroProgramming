"use client";

export default function JsStrings() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Strings</h1>
      <h2 className="text-3xl font-semibold mb-4">String Basics</h2>
      <p className="text-lg mb-4">Strings can be defined with single quotes, double quotes, or template literals: <code className="bg-card/50 px-1 rounded">`Hello ${name}`</code>.</p>

      <h2 className="text-3xl font-semibold mb-4">Common String Methods</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li><code className="bg-card/50 px-1 rounded">length</code></li>
        <li><code className="bg-card/50 px-1 rounded">concat</code></li>
        <li><code className="bg-card/50 px-1 rounded">includes</code></li>
        <li><code className="bg-card/50 px-1 rounded">slice</code></li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6 text-white font-mono text-sm">
        <pre>{`const str = 'Hello';
console.log(str.length);
console.log(str.concat(' World'));
console.log(str.includes('ell'));
console.log(str.slice(1,4));`}</pre>
      </div>
    </div>
  );
}
