"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python Booleans</h1>
      <h2 className="text-3xl font-semibold mb-4">Boolean Type</h2>
      <p className="text-lg mb-4">
        Boolean values are <code className="bg-card/50 px-1 rounded">True</code> or <code className="bg-card/50 px-1 rounded">False</code>, representing truth values.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Boolean Operations</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>
          <code className="bg-card/50 px-1 rounded">and</code>, <code className="bg-card/50 px-1 rounded">or</code>, <code className="bg-card/50 px-1 rounded">not</code>.
        </li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <pre className="bg-[#1E1E1E] p-4 text-white font-mono text-sm mb-4">
        <code>{`x = True
y = False
print(x and y)   # False
print(x or y)    # True
print(not x)     # False`}</code>
      </pre>
    </div>
  );
}
