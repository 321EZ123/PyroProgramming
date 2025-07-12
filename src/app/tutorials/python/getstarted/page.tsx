"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python Get Started</h1>
      <h2 className="text-3xl font-semibold mb-4">First Steps</h2>
      <h3 className="text-2xl font-semibold mb-2">Writing Your First Python Program</h3>
      <p className="text-lg mb-4">
        Create a file named <code className="bg-card/50 px-1 rounded">hello.py</code> with the following code:
      </p>
      <pre className="bg-[#1E1E1E] p-4 text-white font-mono text-sm mb-4">
        <code>{`print("Hello, World!")`}</code>
      </pre>
      <h3 className="text-2xl font-semibold mb-2">Running Python Scripts</h3>
      <p className="text-lg mb-4">Run the script from the command line:</p>
      <pre className="bg-[#1E1E1E] p-4 text-white font-mono text-sm mb-4">
        <code>{`python hello.py`}</code>
      </pre>
      <h3 className="text-2xl font-semibold mb-2">Using Python Interactively</h3>
      <p className="text-lg mb-4">
        Start the Python shell by running <code className="bg-card/50 px-1 rounded">python</code> in your terminal:
      </p>
      <pre className="bg-[#1E1E1E] p-4 text-white font-mono text-sm mb-4">
        <code>{`>>> print("Hello from REPL")`}</code>
      </pre>
      <p className="text-lg mb-4">
        Use the shell for testing code snippets, performing calculations, and exploring Python libraries interactively.
      </p>
    </div>
  );
}
