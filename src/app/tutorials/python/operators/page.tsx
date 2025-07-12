"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python Operators</h1>
      <h2 className="text-3xl font-semibold mb-4">Types of Operators</h2>
      <p className="text-lg mb-4">Arithmetic, assignment, comparison, logical, and bitwise operators.</p>
      <h2 className="text-3xl font-semibold mb-4">Operator Precedence</h2>
      <p className="text-lg mb-4">Operators follow standard mathematical precedence; use parentheses to override.</p>
      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <pre className="bg-[#1E1E1E] p-4 text-white font-mono text-sm mb-4">
        <code>{`# Arithmetic
print(2 + 3 * 4)   # 14

# Comparison
print(5 > 3)       # True

# Logical
print(True and False)  # False`}</code>
      </pre>
    </div>
  );
}
