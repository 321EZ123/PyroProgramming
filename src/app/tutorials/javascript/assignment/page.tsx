"use client";

export default function JsAssignment() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Assignment</h1>
      <h2 className="text-3xl font-semibold mb-4">Assignment Operators</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li><code className="bg-card/50 px-1 rounded">=</code></li>
        <li><code className="bg-card/50 px-1 rounded">+=</code>, <code className="bg-card/50 px-1 rounded">-=</code>, <code className="bg-card/50 px-1 rounded">*=</code>, <code className="bg-card/50 px-1 rounded">/=</code></li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Destructuring Assignment</h2>
      <p className="text-lg mb-4">Assign values from arrays or objects to variables in a single statement.</p>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6 text-white font-mono text-sm">
        <pre>{`const [a, b] = [1, 2];
const {name, age} = {name: 'Alice', age: 25};`}</pre>
      </div>
    </div>
  );
}
