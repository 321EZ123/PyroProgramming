"use client";

export default function JsVariables() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Variables</h1>
      <h2 className="text-3xl font-semibold mb-4">Variable Declaration</h2>
      <p className="text-lg mb-4">Variables store data values and are declared using <code className="bg-card/50 px-1 rounded">var</code>, <code className="bg-card/50 px-1 rounded">let</code>, or <code className="bg-card/50 px-1 rounded">const</code>.</p>

      <h2 className="text-3xl font-semibold mb-4">Scope and Hoisting</h2>
      <p className="text-lg mb-4"><code className="bg-card/50 px-1 rounded">var</code> is function-scoped, while <code className="bg-card/50 px-1 rounded">let</code> and <code className="bg-card/50 px-1 rounded">const</code> are block-scoped. All declarations are hoisted, but <code className="bg-card/50 px-1 rounded">let</code> and <code className="bg-card/50 px-1 rounded">const</code> are not initialized until their definition (Temporal Dead Zone).</p>
    </div>
  );
}
