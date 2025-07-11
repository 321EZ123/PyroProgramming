"use client";

export default function JsOutput() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Output</h1>
      <h2 className="text-3xl font-semibold mb-4">Output Methods</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li><code className="bg-card/50 px-1 rounded">console.log()</code>: Logs messages to the browser console.</li>
        <li><code className="bg-card/50 px-1 rounded">alert()</code>: Displays an alert dialog.</li>
        <li><code className="bg-card/50 px-1 rounded">document.write()</code>: Writes HTML to the document.</li>
        <li>Modifying the DOM: Using <code className="bg-card/50 px-1 rounded">innerHTML</code> and <code className="bg-card/50 px-1 rounded">textContent</code>.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="bg-card p-4 border-b border-fire-darker">
          <h3 className="text-lg font-semibold">Example:</h3>
        </div>
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            {`console.log('Hello World');
alert('Hello World');
document.write('<h1>Hello World</h1>');
document.getElementById('demo').innerHTML = 'Hello World';`}
          </pre>
        </div>
      </div>
    </div>
  );
}
