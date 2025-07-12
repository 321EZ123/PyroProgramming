"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python While Loops</h1>
      <h2 className="text-3xl font-semibold mb-4">While Loop Basics</h2>
      <p className="text-lg mb-4">
        Repeat a block of code while a condition is true using <code className="bg-card/50 px-1 rounded">while</code>.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Infinite Loops</h2>
      <p className="text-lg mb-4">
        Ensure loop condition changes; use <code className="bg-card/50 px-1 rounded">break</code> to exit loops.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <pre className="bg-[#1E1E1E] p-4 text-white font-mono text-sm mb-4">
        <code>{`count = 0
while count < 5:
    print(count)
    count += 1
print("Done")`}</code>
      </pre>
    </div>
  );
}
