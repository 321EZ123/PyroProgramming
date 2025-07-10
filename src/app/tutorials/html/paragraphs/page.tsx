"use client";

export default function HtmlParagraphs() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Paragraphs</h1>

      <h2 className="text-3xl font-semibold mb-4">Creating Paragraphs</h2>
      <p className="text-lg mb-4">
        Use the <code className="bg-card/50 px-1 rounded">&lt;p&gt;</code> tag to create paragraphs of text. Browsers automatically add some space before and after each paragraph.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Paragraph Attributes</h2>
      <p className="text-lg mb-4">
        Paragraphs can have attributes like <code className="bg-card/50 px-1 rounded">class</code>, <code className="bg-card/50 px-1 rounded">id</code>, and <code className="bg-card/50 px-1 rounded">style</code> for identification and styling.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            <code>{`<p>This is a paragraph.</p>
+<p class="lead">This is a paragraph with a class attribute.</p>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
