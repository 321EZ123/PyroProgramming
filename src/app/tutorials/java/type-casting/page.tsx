"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java Type Casting</h1>
      <h2 className="text-3xl font-semibold mb-4">Implicit Casting (Widening)</h2>
      <p className="text-lg mb-4">Automatic conversion from smaller to larger types, e.g., int to long.</p>
      <h2 className="text-3xl font-semibold mb-4">Explicit Casting (Narrowing)</h2>
      <p className="text-lg mb-4">Manual conversion required for larger to smaller types, e.g., double to int:</p>
      <pre className="bg-gray-100 p-4 rounded"><code>int i = (int) 3.14;</code></pre>
      <h2 className="text-3xl font-semibold mb-4">Type Casting between Objects</h2>
      <p className="text-lg mb-6">Use <code>instanceof</code> to check before downcasting between object types.</p>
    </div>
  );
}
