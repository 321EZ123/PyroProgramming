"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python Data Types</h1>
      <h2 className="text-3xl font-semibold mb-4">Overview of Data Types</h2>
      <p className="text-lg mb-4">
        Built-in types include <code className="bg-card/50 px-1 rounded">int</code>, <code className="bg-card/50 px-1 rounded">float</code>, <code className="bg-card/50 px-1 rounded">str</code>, <code className="bg-card/50 px-1 rounded">bool</code>, <code className="bg-card/50 px-1 rounded">list</code>, <code className="bg-card/50 px-1 rounded">tuple</code>, <code className="bg-card/50 px-1 rounded">set</code>, and <code className="bg-card/50 px-1 rounded">dict</code>.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Type Checking</h2>
      <p className="text-lg mb-4">
        Use <code className="bg-card/50 px-1 rounded">type()</code> and <code className="bg-card/50 px-1 rounded">isinstance()</code> to inspect types.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <pre className="bg-[#1E1E1E] p-4 text-white font-mono text-sm mb-4">
        <code>{`# int
x = 5
# float
y = 3.14
# str
s = "Hello"
# list
lst = [1, 2, 3]
# dict
d = {"key": "value"}`}</code>
      </pre>
    </div>
  );
}
