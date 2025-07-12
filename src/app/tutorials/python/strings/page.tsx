"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python Strings</h1>
      <h2 className="text-3xl font-semibold mb-4">String Basics</h2>
      <p className="text-lg mb-4">
        Create strings using single (<code className="bg-card/50 px-1 rounded">' '</code>), double (<code className="bg-card/50 px-1 rounded">" "</code>), or triple (<code className="bg-card/50 px-1 rounded">{`''' '''`}</code> or <code className="bg-card/50 px-1 rounded">{`""" """`}</code>) quotes.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Common String Methods</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>
          <code className="bg-card/50 px-1 rounded">len()</code>,{" "}
          <code className="bg-card/50 px-1 rounded">upper()</code>,{" "}
          <code className="bg-card/50 px-1 rounded">lower()</code>.
        </li>
        <li>
          <code className="bg-card/50 px-1 rounded">split()</code>,{" "}
          <code className="bg-card/50 px-1 rounded">replace()</code>.
        </li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">String Formatting</h2>
      <p className="text-lg mb-4">
        Use f-strings (<code className="bg-card/50 px-1 rounded">{'f"{var}"'}</code>),{" "}
        <code className="bg-card/50 px-1 rounded">format()</code>.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <pre className="bg-[#1E1E1E] p-4 text-white font-mono text-sm mb-4">
        <code>{`name = "Alice"
print(f"Hello, {name}!")  # Hello, Alice!

s = "Hello World"
print(s.upper())           # HELLO WORLD`}</code>
      </pre>
    </div>
  );
}
