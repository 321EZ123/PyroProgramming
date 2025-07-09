"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java Strings</h1>
      <h2 className="text-3xl font-semibold mb-4">String Basics</h2>
      <p className="text-lg mb-4">Creating and initializing strings: <code>String s = "Hello";</code></p>
      <h2 className="text-3xl font-semibold mb-4">String Methods</h2>
      <p className="text-lg mb-4">Common methods: <code>length(), substring(), toUpperCase()</code>.</p>
      <h2 className="text-3xl font-semibold mb-4">String Immutability</h2>
      <p className="text-lg mb-6">Strings cannot be changed once created; operations return new strings.</p>
    </div>
  );
}
