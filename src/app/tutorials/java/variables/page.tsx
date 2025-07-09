"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java Variables</h1>
      <h2 className="text-3xl font-semibold mb-4">Understanding Variables</h2>
      <p className="text-lg mb-4">Variables store data values that can be used and modified in your program.</p>
      <h2 className="text-3xl font-semibold mb-4">Variable Types</h2>
      <p className="text-lg mb-4">Instance variables belong to objects, and local variables are defined within methods.</p>
      <h2 className="text-3xl font-semibold mb-4">Variable Scope</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Local variables: declared within methods and accessible only inside them.</li>
        <li>Instance variables: declared in a class and accessible by all methods of the class.</li>
        <li>Static variables: declared with static and shared across all instances.</li>
      </ul>
    </div>
  );
}
