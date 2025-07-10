"use client";

export default function HtmlIntroduction() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">HTML Introduction</h1>

      <h2 className="text-3xl font-semibold mb-4">What is HTML?</h2>
      <p className="text-lg mb-4">
        HTML stands for Hyper Text Markup Language and is the standard markup language for creating web pages. It was first developed by Tim Berners-Lee in 1991 to structure and link documents on the early World Wide Web.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Basic Structure of an HTML Document</h2>
      <p className="text-lg mb-4">
        A basic HTML document starts with the <code className="bg-card/50 px-1 rounded">!DOCTYPE html</code> declaration, followed by the <code className="bg-card/50 px-1 rounded">&lt;html&gt;</code> root element, a <code className="bg-card/50 px-1 rounded">&lt;head&gt;</code> section for meta information, and a <code className="bg-card/50 px-1 rounded">&lt;body&gt;</code> section for visible content.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Getting Started</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Text editor (e.g., Visual Studio Code, Sublime Text, Atom)</li>
        <li>Modern web browser (e.g., Chrome, Firefox, Edge, Safari)</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">First HTML Document Example</h2>
      <div className="bg-[#1E1E1E] rounded-md overflow-hidden mb-6">
        <div className="bg-card p-4 border-b border-fire-darker">
          <h3 className="text-lg font-semibold">Example:</h3>
        </div>
        <div className="p-4 text-white font-mono text-sm">
          <pre className="language-html">
            <code>{`<!DOCTYPE html>
<html>
<head>
  <title>My First HTML Page</title>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>This is my first HTML document.</p>
</body>
</html>`}</code>
          </pre>
        </div>
      </div>

      <p className="text-lg">
        Save this code in a file named <code className="bg-card/50 px-1 rounded">index.html</code> and open it in your browser to see the rendered page.
      </p>
    </div>
  );
}
