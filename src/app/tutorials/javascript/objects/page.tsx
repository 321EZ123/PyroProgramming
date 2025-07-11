"use client";

export default function JsObjects() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Objects</h1>
      <h2 className="text-3xl font-semibold mb-4">Understanding Objects</h2>
      <p className="text-lg mb-4">Objects are collections of key-value pairs, representing complex data structures.</p>

      <h2 className="text-3xl font-semibold mb-4">Creating Objects</h2>
      <p className="text-lg mb-4">Use object literals <code className="bg-card/50 px-1 rounded">const obj = {}</code>, constructors, or classes.</p>

      <h2 className="text-3xl font-semibold mb-4">Methods and Properties</h2>
      <p className="text-lg mb-4">Access properties with dot notation <code className="bg-card/50 px-1 rounded">obj.name</code> and methods as functions within objects.</p>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6 text-white font-mono text-sm">
        <pre>{`const user = { name: 'Alice', age: 25 };
user.email = 'alice@example.com';
console.log(user.name);

class Person {
  constructor(name) { this.name = name; }
  greet() { return 'Hi ' + this.name; }
}
console.log(new Person('Bob').greet());`}</pre>
      </div>
    </div>
  );
}
