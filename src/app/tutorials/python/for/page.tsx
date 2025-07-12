"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python For Loops</h1>
      <h2 className="text-3xl font-semibold mb-4">For Loop Basics</h2>
      <p className="text-lg mb-4">
        Iterate over sequences using <code className="bg-card/50 px-1 rounded">for</code> loops.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Using range()</h2>
      <p className="text-lg mb-4">
        Generate numeric sequences with <code className="bg-card/50 px-1 rounded">range()</code>.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <pre className="bg-[#1E1E1E] p-4 text-white font-mono text-sm mb-4">
        <code>{`for i in range(5):
    print(i)

fruits = ["apple", "banana"]
for fruit in fruits:
    print(fruit)`}</code>
      </pre>
    </div>
  );
}
