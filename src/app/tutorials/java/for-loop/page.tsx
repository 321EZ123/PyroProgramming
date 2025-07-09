"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java For Loop</h1>
      <h2 className="text-3xl font-semibold mb-4">For Loop Basics</h2>
      <p className="text-lg mb-4">
        Syntax: <code>{`for (int i = 0; i < n; i++) { /* code */ }`}</code>
      </p>
      <h2 className="text-3xl font-semibold mb-4">Enhanced For Loop</h2>
      <p className="text-lg mb-4">
        Syntax: <code>{`for (Type item : collection) { /* code */ }`}</code>
      </p>
      <h2 className="text-3xl font-semibold mb-4">Use Cases</h2>
      <p className="text-lg mb-6">
        Use for loops when you know the number of iterations or need to iterate over arrays/collections.
      </p>
    </div>
  );
}
