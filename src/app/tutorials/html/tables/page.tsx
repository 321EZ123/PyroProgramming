"use client";

export default function HtmlTables() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Tables</h1>

      <h2 className="text-3xl font-semibold mb-4">Creating Tables</h2>
      <p className="text-lg mb-4">
        Use <code className="bg-card/50 px-1 rounded">&lt;table&gt;</code>, with rows defined by <code className="bg-card/50 px-1 rounded">&lt;tr&gt;</code> and cells by <code className="bg-card/50 px-1 rounded">&lt;td&gt;</code> or headers by <code className="bg-card/50 px-1 rounded">&lt;th&gt;</code>.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Table Attributes</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">border</code>: Sets table border width</li>
        <li><code className="bg-card/50 px-1 rounded">cellpadding</code>: Sets cell padding</li>
        <li><code className="bg-card/50 px-1 rounded">cellspacing</code>: Sets space between cells</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Example Table Structure</h2>
      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            <code>{`<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th>Name</th><th>Age</th><th>City</th>
  </tr>
  <tr>
    <td>Alice</td><td>25</td><td>New York</td>
  </tr>
</table>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
