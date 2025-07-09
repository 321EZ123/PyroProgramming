"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java Syntax</h1>
      <h2 className="text-3xl font-semibold mb-4">Basic Syntax Rules</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Java is case-sensitive.</li>
        <li>Each statement ends with a semicolon.</li>
        <li>Code must be organized into classes.</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Java Keywords</h2>
      <p className="text-lg mb-6">Java has reserved keywords such as abstract, assert, boolean, break, and class that cannot be used as identifiers.</p>
      <h2 className="text-3xl font-semibold mb-4">Naming Conventions</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Class names use PascalCase (e.g., MyClass).</li>
        <li>Method and variable names use camelCase (e.g., myMethod, myVariable).</li>
        <li>Constants use uppercase with underscores (e.g., MAX_VALUE).</li>
      </ul>
    </div>
  );
}
