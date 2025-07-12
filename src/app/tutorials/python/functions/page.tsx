"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python Functions</h1>
      <h2 className="text-3xl font-semibold mb-4">Function Definition</h2>
      <p className="text-lg mb-4">
        Define functions using <code className="bg-card/50 px-1 rounded">def</code> keyword.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Parameters and Return Values</h2>
      <p className="text-lg mb-4">
        Use parameters and <code className="bg-card/50 px-1 rounded">return</code> to output values.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Scope of Variables in Functions</h2>
      <p className="text-lg mb-4">
        Variables declared inside functions are local; global variables require <code className="bg-card/50 px-1 rounded">global</code> keyword.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <pre className="bg-[#1E1E1E] p-4 text-white font-mono text-sm mb-4">
        <code>{`def add(x, y):
    return x + y

result = add(5, 3)
print(result)  # 8`}</code>
      </pre>
    </div>
  );
}
