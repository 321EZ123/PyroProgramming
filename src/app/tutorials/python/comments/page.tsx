"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python Comments</h1>
      <h2 className="text-3xl font-semibold mb-4">Types of Comments</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>
          Single-line comments using <code className="bg-card/50 px-1 rounded">#</code>.
        </li>
        <li>
          Multi-line comments using triple quotes{" "}
          <code className="bg-card/50 px-1 rounded">{`'''...`}</code> or{" "}
          <code className="bg-card/50 px-1 rounded">{`"""...`}</code>.
        </li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Best Practices</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Write comments to explain why code exists, not what it does.</li>
        <li>Keep comments up-to-date with code changes.</li>
      </ul>
    </div>
  );
}
