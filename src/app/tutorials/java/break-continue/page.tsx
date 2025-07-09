"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java Break and Continue</h1>

      <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
      <p className="text-lg mb-4">
        The <code>break</code> and <code>continue</code> statements control loop execution flow.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Break Statement</h2>
      <p className="text-lg mb-4">
        <strong>Definition:</strong> Terminates the loop.
      </p>
      <pre className="bg-black text-orange-500 p-4 rounded mb-4">
        <code>break;</code>
      </pre>
      <pre className="bg-black text-orange-500 p-4 rounded mb-4">
        <code>
          {`for (let i = 0; i < 10; i++) {`}
          <br />
          {`    if (i === 5) break;`}
          <br />
          {`    console.log(i);`}
          <br />
          {`}`}
        </code>
      </pre>

      <h2 className="text-3xl font-semibold mb-4">Continue Statement</h2>
      <p className="text-lg mb-4">
        <strong>Definition:</strong> Skips the current iteration.
      </p>
      <pre className="bg-black text-orange-500 p-4 rounded mb-4">
        <code>continue;</code>
      </pre>
      <pre className="bg-black text-orange-500 p-4 rounded mb-4">
        <code>
          {`for (let i = 0; i < 10; i++) {`}
          <br />
          {`    if (i % 2 === 0) continue;`}
          <br />
          {`    console.log(i);`}
          <br />
          {`}`}
        </code>
      </pre>

      <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
      <p className="text-lg mb-6">
        Use <code>break</code> to exit loops and <code>continue</code> to skip iterations effectively.
      </p>
    </div>
  );
}
