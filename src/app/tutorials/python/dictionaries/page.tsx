"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python Dictionaries</h1>
      <h2 className="text-3xl font-semibold mb-4">Dictionary Basics</h2>
      <p className="text-lg mb-4">Dictionaries store key-value pairs defined using curly braces.</p>
      <h2 className="text-3xl font-semibold mb-4">Common Methods</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>
          <code className="bg-card/50 px-1 rounded">keys()</code>,{" "}
          <code className="bg-card/50 px-1 rounded">values()</code>,{" "}
          <code className="bg-card/50 px-1 rounded">items()</code>.
        </li>
        <li>
          <code className="bg-card/50 px-1 rounded">get()</code>,{" "}
          <code className="bg-card/50 px-1 rounded">update()</code>.
        </li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <pre className="bg-[#1E1E1E] p-4 text-white font-mono text-sm mb-4">
        <code>{`person = {"name": "Alice", "age": 25}
print(person["name"])       # Alice
print(person.get("age"))    # 25

person["city"] = "NY"
print(person)`}</code>
      </pre>
    </div>
  );
}
