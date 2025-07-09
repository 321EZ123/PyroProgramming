"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java Output</h1>
      <h2 className="text-3xl font-semibold mb-4">Printing to Console</h2>
      <p className="text-lg mb-4">
        Use <code>System.out.println()</code> to print lines to the console.
      </p>
      <p className="text-lg mb-6">
        For example:<br />
        <code>System.out.println("Hello, World!");</code>
      </p>
      <h2 className="text-3xl font-semibold mb-4">Writing to Files as Output</h2>
      <p className="text-lg mb-4">
        Use <code>PrintWriter</code> to write output to files:
      </p>
      <pre className="bg-black text-orange-500 p-4 rounded mb-6">
        <code>
          {`try (PrintWriter writer = new PrintWriter("output.txt")) {`}
          <br />
          {`    writer.println("Hello, File!");`}
          <br />
          {`}`}
        </code>
      </pre>
    </div>
  );
}
