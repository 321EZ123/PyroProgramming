"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python Sets</h1>
      <h2 className="text-3xl font-semibold mb-4">Set Basics</h2>
      <p className="text-lg mb-4">
        Sets are unordered collections of unique elements defined using curly braces.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Set Methods</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>
          <code className="bg-card/50 px-1 rounded">add()</code>,{" "}
          <code className="bg-card/50 px-1 rounded">remove()</code>.
        </li>
        <li>
          <code className="bg-card/50 px-1 rounded">union()</code>,{" "}
          <code className="bg-card/50 px-1 rounded">intersection()</code>.
        </li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <pre className="bg-[#1E1E1E] p-4 text-white font-mono text-sm mb-4">
        <code>{`nums = {1, 2, 3}
nums.add(4)
print(nums)  # {1, 2, 3, 4}

setA = {1, 2}
setB = {2, 3}
print(setA.union(setB))          # {1, 2, 3}`}</code>
      </pre>
    </div>
  );
}
