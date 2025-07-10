"use client";

export default function HtmlFormatting() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Formatting</h1>

      <h2 className="text-3xl font-semibold mb-4">Text Formatting Tags</h2>
      <p className="text-lg mb-4">
        HTML provides several tags to format text for styling and emphasis.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li><code className="bg-card/50 px-1 rounded">&lt;b&gt;</code>: Bold text</li>
        <li><code className="bg-card/50 px-1 rounded">&lt;i&gt;</code>: Italic text</li>
        <li><code className="bg-card/50 px-1 rounded">&lt;u&gt;</code>: Underlined text</li>
        <li><code className="bg-card/50 px-1 rounded">&lt;strong&gt;</code>: Importance/intense text</li>
        <li><code className="bg-card/50 px-1 rounded">&lt;em&gt;</code>: Emphasized text</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Usage Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            <code>{`<p>This is <b>bold</b> and this is <i>italic</i>.</p>
<p><strong>Strong text</strong> and <em>emphasized text</em>.</p>
<p><u>Underlined text</u> example.</p>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
