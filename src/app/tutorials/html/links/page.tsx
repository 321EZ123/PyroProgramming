"use client";

export default function HtmlLinks() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Links</h1>

      <h2 className="text-3xl font-semibold mb-4">Creating Links</h2>
      <p className="text-lg mb-4">
        Use the <code className="bg-card/50 px-1 rounded">&lt;a&gt;</code> tag with the <code className="bg-card/50 px-1 rounded">href</code> attribute to create hyperlinks.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Link Attributes</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">href</code>: URL of the link</li>
        <li><code className="bg-card/50 px-1 rounded">target</code>: Where to open the link (e.g., <code className="bg-card/50 px-1 rounded">_blank</code>)</li>
        <li><code className="bg-card/50 px-1 rounded">rel</code>: Relationship of the linked document (e.g., <code className="bg-card/50 px-1 rounded">noopener noreferrer</code>)</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Example Links</h2>
      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            <code>{`<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">External Link</a>
<a href="/about">Internal Link</a>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
