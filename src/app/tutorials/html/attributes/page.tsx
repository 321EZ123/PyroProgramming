"use client";

export default function HtmlAttributes() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Attributes</h1>

      <h2 className="text-3xl font-semibold mb-4">What are Attributes?</h2>
      <p className="text-lg mb-4">
        Attributes provide additional information about HTML elements. They are placed inside the opening tag and consist of a name and value.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Common Attributes</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">id</code>: Unique identifier for an element</li>
        <li><code className="bg-card/50 px-1 rounded">class</code>: Class name(s) for CSS styling</li>
        <li><code className="bg-card/50 px-1 rounded">style</code>: Inline CSS styles</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Using Attributes in Elements</h2>
      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            <code>{`<p id="intro" class="text-lg" style="color: blue;">This paragraph has attributes.</p>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
