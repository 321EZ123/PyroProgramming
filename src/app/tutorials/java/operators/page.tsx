"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java Operators</h1>
      <h2 className="text-3xl font-semibold mb-4">Arithmetic Operators</h2>
      <p className="text-lg mb-4">Basic operations: +, -, *, /, %.</p>
      <h2 className="text-3xl font-semibold mb-4">Relational Operators</h2>
      <p className="text-lg mb-4">Comparison operations: ==, !=, &gt;, &lt;, &gt;=, &lt;=.</p>
      <h2 className="text-3xl font-semibold mb-4">Logical Operators</h2>
      <p className="text-lg mb-4">AND (&&), OR (||), NOT (!).</p>
      <h2 className="text-3xl font-semibold mb-4">Bitwise Operators</h2>
      <p className="text-lg mb-4">&, |, ^, ~, &lt;&lt;, &gt;&gt;.</p>
      <h2 className="text-3xl font-semibold mb-4">Assignment Operators</h2>
      <p className="text-lg mb-6">=, +=, -=, *=, /=, %=.</p>
    </div>
  );
}
