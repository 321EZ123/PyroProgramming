"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python Lists</h1>
      <h2 className="text-3xl font-semibold mb-4">List Basics</h2>
      <p className="text-lg mb-4">Lists are ordered, mutable collections defined using square brackets.</p>
      <h2 className="text-3xl font-semibold mb-4">Common List Methods</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>
          <code className="bg-card/50 px-1 rounded">append()</code>,{" "}
          <code className="bg-card/50 px-1 rounded">remove()</code>,{" "}
          <code className="bg-card/50 px-1 rounded">pop()</code>.
        </li>
        <li>
          <code className="bg-card/50 px-1 rounded">sort()</code>,{" "}
          <code className="bg-card/50 px-1 rounded">reverse()</code>, slicing.
        </li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <pre className="bg-[#1E1E1E] p-4 text-white font-mono text-sm mb-4">
        <code>{`fruits = ["apple", "banana", "cherry"]
print(fruits[1])    # banana
fruits.append("date")
print(fruits)`}</code>
      </pre>
    </div>
  );
}
