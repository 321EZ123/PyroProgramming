"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java Data Types</h1>
      <h2 className="text-3xl font-semibold mb-4">Primitive Data Types</h2>
      <p className="text-lg mb-4">
        <code>{`int`}</code>, <code>{`float`}</code>, <code>{`double`}</code>, <code>{`char`}</code>, <code>{`boolean`}</code>
      </p>
      <h2 className="text-3xl font-semibold mb-4">Non-Primitive Data Types</h2>
      <p className="text-lg mb-4">
        <code>{`String`}</code>, <code>{`Arrays`}</code>, <code>{`Classes`}</code>
      </p>
      <h2 className="text-3xl font-semibold mb-4">Type Inference</h2>
      <p className="text-lg mb-6">
        Using <code>{`var`}</code> in modern Java to let the compiler infer types.
      </p>
    </div>
  );
}
