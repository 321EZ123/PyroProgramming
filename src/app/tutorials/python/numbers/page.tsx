"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python Numbers</h1>
      <h2 className="text-3xl font-semibold mb-4">Numeric Types</h2>
      <p className="text-lg mb-4">Python supports integers, floats, and complex numbers.</p>
      <h2 className="text-3xl font-semibold mb-4">Common Numeric Operations</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Addition, subtraction, multiplication, division.</li>
        <li>
          Floor division (<code className="bg-card/50 px-1 rounded">//</code>), exponentiation (<code className="bg-card/50 px-1 rounded">**</code>).
        </li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <pre className="bg-[#1E1E1E] p-4 text-white font-mono text-sm mb-4">
        <code>{`a = 10
b = 3
print(a + b)      # 13
print(a / b)      # 3.333...
print(a // b)     # 3
print(a ** 2)     # 100`}</code>
      </pre>
    </div>
  );
}
