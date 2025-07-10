"use client";

export default function HtmlBlocks() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Blocks</h1>

      <h2 className="text-3xl font-semibold mb-4">Block Elements Explained</h2>
      <p className="text-lg mb-4">
        Block elements start on a new line and can contain other block and inline elements. They are used to structure the main building blocks of a page layout.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Creating Block Structures</h2>
      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            <code>{`<div class="container">
  <header>Header content</header>
  <main>Main content</main>
  <footer>Footer content</footer>
</div>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
