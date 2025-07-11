"use client";

export default function JsWhereTo() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Where To</h1>
      <h2 className="text-3xl font-semibold mb-4">Where to Use JavaScript</h2>
      <h3 className="text-2xl font-medium mb-2">In HTML Documents</h3>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Inline scripts: Using <code className="bg-card/50 px-1 rounded">&lt;script&gt;</code> tags directly in HTML</li>
        <li>Internal scripts: Placed inside the HTML <code className="bg-card/50 px-1 rounded">&lt;head&gt;</code> or <code className="bg-card/50 px-1 rounded">&lt;body&gt;</code></li>
        <li>External scripts: Linking via <code className="bg-card/50 px-1 rounded">&lt;script src=\"app.js\"&gt;</code></li>
      </ul>

      <h3 className="text-2xl font-medium mb-2">In Various Environments</h3>
      <p className="text-lg mb-4">JavaScript runs in web browsers for front-end, and on servers using Node.js, as well as in desktop and mobile apps powered by frameworks like Electron and React Native.</p>

      <h2 className="text-3xl font-semibold mb-4">Best Practices</h2>
      <h3 className="text-2xl font-medium mb-2">Loading Scripts</h3>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li><code className="bg-card/50 px-1 rounded">defer</code>: Loads scripts after HTML parsing</li>
        <li><code className="bg-card/50 px-1 rounded">async</code>: Loads scripts asynchronously without blocking parsing</li>
      </ul>

      <h3 className="text-2xl font-medium mb-2">Keeping Code Organized</h3>
      <p className="text-lg mb-4">Structure code into modules and separate files, follow naming conventions, and use build tools or bundlers to manage dependencies and optimize loading.</p>
    </div>
  );
}
