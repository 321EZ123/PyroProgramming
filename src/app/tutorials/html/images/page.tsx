"use client";

export default function HtmlImages() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Images</h1>

      <h2 className="text-3xl font-semibold mb-4">Embedding Images</h2>
      <p className="text-lg mb-4">
        Use the <code className="bg-card/50 px-1 rounded">&lt;img&gt;</code> tag with the <code className="bg-card/50 px-1 rounded">src</code> attribute to embed images.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Image Attributes</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code className="bg-card/50 px-1 rounded">src</code>: Path or URL to the image</li>
        <li><code className="bg-card/50 px-1 rounded">alt</code>: Alternative text for accessibility</li>
        <li><code className="bg-card/50 px-1 rounded">title</code>: Tooltip text on hover</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Best Practices for Images</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Always include <code className="bg-card/50 px-1 rounded">alt</code> text.</li>
        <li>Optimize images for web performance (compress and resize).</li>
        <li>Use responsive images with <code className="bg-card/50 px-1 rounded">srcset</code> when needed.</li>
      </ul>

      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="p-4 text-white font-mono text-sm">
          <pre>
            <code>{`<img src="image.jpg" alt="A descriptive text" title="Image title">
<img src="banner.png" alt="Banner image">`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
