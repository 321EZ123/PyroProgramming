"use client";

export default function HtmlHeadings() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Headings</h1>

      <h2 className="text-3xl font-semibold mb-4">Importance of Headings</h2>
      <p className="text-lg mb-4">
        Headings define the structure of a web page and help both users and search engines understand the hierarchy and organization of content.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Using Heading Tags</h2>
      <p className="text-lg mb-4">
        HTML provides six levels of headings, from <code className="bg-card/50 px-1 rounded">&lt;h1&gt;</code> (most important) to <code className="bg-card/50 px-1 rounded">&lt;h6&gt;</code> (least important).
      </p>

      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            <code>{`<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>`}</code>
          </pre>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-4">Best Practices</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Use only one <code className="bg-card/50 px-1 rounded">&lt;h1&gt;</code> per page for the main title.</li>
        <li>Follow a logical hierarchy without skipping heading levels.</li>
        <li>Keep headings concise and descriptive.</li>
      </ul>
    </div>
  );
}
