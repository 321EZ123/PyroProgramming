"use client";

export default function HtmlQuotations() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Quotations</h1>

      <h2 className="text-3xl font-semibold mb-4">Quotation Tags</h2>
      <p className="text-lg mb-4">
        HTML provides <code className="bg-card/50 px-1 rounded">&lt;blockquote&gt;</code> for block quotations and <code className="bg-card/50 px-1 rounded">&lt;q&gt;</code> for inline quotations.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Citing Sources</h2>
      <p className="text-lg mb-4">
        Use the <code className="bg-card/50 px-1 rounded">cite</code> attribute or a <code className="bg-card/50 px-1 rounded">&lt;footer&gt;</code> in <code className="bg-card/50 px-1 rounded">&lt;blockquote&gt;</code> to reference the source.
      </p>

      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            <code>{`<blockquote cite="https://www.example.com">
  This is a block quotation from a source.
  <footer>— Source Name</footer>
</blockquote>
<p>Here is an inline quote: <q>Life is beautiful.</q></p>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
