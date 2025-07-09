"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java If...Else</h1>
      <h2 className="text-3xl font-semibold mb-4">Basic If Statement</h2>
      <p className="text-lg mb-4">Syntax: <code>if (condition) { '{' } // code { '}' }</code></p>
      <h2 className="text-3xl font-semibold mb-4">If-Else Statement</h2>
      <p className="text-lg mb-4">Syntax: <code>if (condition) { '{' } // code { '}' } else { '{' } // code { '}' }</code></p>
      <h2 className="text-3xl font-semibold mb-4">Nested If Statements</h2>
      <p className="text-lg mb-6">Use multiple if statements inside each other to test multiple conditions.</p>
    </div>
  );
}
