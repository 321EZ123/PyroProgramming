"use client";

export default function HtmlLists() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Lists</h1>

      <h2 className="text-3xl font-semibold mb-4">Types of Lists</h2>
      <p className="text-lg mb-4">
        HTML supports ordered lists (<code className="bg-card/50 px-1 rounded">&lt;ol&gt;</code>) and unordered lists (<code className="bg-card/50 px-1 rounded">&lt;ul&gt;</code>).
      </p>

      <h2 className="text-3xl font-semibold mb-4">Creating Lists</h2>
      <p className="text-lg mb-4">
        List items are added with the <code className="bg-card/50 px-1 rounded">&lt;li&gt;</code> tag inside either <code className="bg-card/50 px-1 rounded">&lt;ol&gt;</code> or <code className="bg-card/50 px-1 rounded">&lt;ul&gt;</code>.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Nested Lists</h2>
      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            <code>{`<ul>
  <li>Item 1
    <ol>
      <li>Subitem A</li>
      <li>Subitem B</li>
    </ol>
  </li>
  <li>Item 2</li>
</ul>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
