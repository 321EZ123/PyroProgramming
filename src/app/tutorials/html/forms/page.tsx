"use client";

export default function HtmlForms() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Forms</h1>

      <h2 className="text-3xl font-semibold mb-4">Creating Forms</h2>
      <p className="text-lg mb-4">
        Use the <code className="bg-card/50 px-1 rounded">&lt;form&gt;</code> tag to collect user input, and set the <code className="bg-card/50 px-1 rounded">action</code> and <code className="bg-card/50 px-1 rounded">method</code> attributes for processing.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Form Elements</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">&lt;input&gt;</code>: Text, password, checkbox, radio, etc.</li>
        <li><code className="bg-card/50 px-1 rounded">&lt;textarea&gt;</code>: Multi-line text input</li>
        <li><code className="bg-card/50 px-1 rounded">&lt;button&gt;</code>: Submit or reset buttons</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Submitting Forms</h2>
      <p className="text-lg mb-4">
        Forms can be processed client-side with JavaScript or sent to a server using the specified <code className="bg-card/50 px-1 rounded">action</code> URL and <code className="bg-card/50 px-1 rounded">method</code> (GET or POST).
      </p>

      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            <code>{`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <button type="submit">Submit</button>
</form>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
