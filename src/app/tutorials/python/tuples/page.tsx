"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python Tuples</h1>
      <h2 className="text-3xl font-semibold mb-4">Tuple Basics</h2>
      <p className="text-lg mb-4">Tuples are ordered, immutable collections defined using parentheses.</p>
      <h2 className="text-3xl font-semibold mb-4">Immutability of Tuples</h2>
      <p className="text-lg mb-4">Once created, tuple elements cannot be changed.</p>
      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <pre className="bg-[#1E1E1E] p-4 text-white font-mono text-sm mb-4">
        <code>{`coords = (10, 20)
print(coords[0])  # 10
# coords[0] = 15  # Error: tuples are immutable`}</code>
      </pre>
    </div>
  );
}
