"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python Casting</h1>
      <h2 className="text-3xl font-semibold mb-4">Type Casting</h2>
      <p className="text-lg mb-4">
        Convert between data types using built-in functions like{" "}
        <code className="bg-card/50 px-1 rounded">int()</code>,{" "}
        <code className="bg-card/50 px-1 rounded">float()</code>, and{" "}
        <code className="bg-card/50 px-1 rounded">str()</code>.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <pre className="bg-[#1E1E1E] p-4 text-white font-mono text-sm mb-4">
        <code>{`x = "10"
print(int(x) + 5)   # 15

y = 3.14
print(str(y))       # "3.14"`}</code>
      </pre>
    </div>
  );
}
