"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python Variables</h1>
      <h2 className="text-3xl font-semibold mb-4">Variable Declaration</h2>
      <p className="text-lg mb-4">Assign values to variables without explicit type declaration. Python uses dynamic typing.</p>
      <h3 className="text-2xl font-semibold mb-2">Naming Conventions and Rules</h3>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Variable names must start with a letter or underscore.</li>
        <li>Use lowercase with underscores (snake_case).</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Scope of Variables</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Local variables are defined within functions.</li>
        <li>Global variables are defined at the module level.</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Best Practices</h2>
      <p className="text-lg mb-4">Choose descriptive variable names and avoid using single letters except for counters or indices.</p>
    </div>
  );
}
