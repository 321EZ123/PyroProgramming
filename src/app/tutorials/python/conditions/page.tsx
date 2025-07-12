"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python If...Else</h1>
      <h2 className="text-3xl font-semibold mb-4">Conditional Statements</h2>
      <p className="text-lg mb-4">
        Use <code className="bg-card/50 px-1 rounded">if</code>, <code className="bg-card/50 px-1 rounded">elif</code>, and <code className="bg-card/50 px-1 rounded">else</code> to control flow.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Nested Conditions</h2>
      <p className="text-lg mb-4">
        Combine multiple conditions using logical operators (<code className="bg-card/50 px-1 rounded">and</code>, <code className="bg-card/50 px-1 rounded">or</code>).
      </p>
      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <pre className="bg-[#1E1E1E] p-4 text-white font-mono text-sm mb-4">
        <code>{`age = 18
if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teenager")
else:
    print("Child")`}</code>
      </pre>
    </div>
  );
}
