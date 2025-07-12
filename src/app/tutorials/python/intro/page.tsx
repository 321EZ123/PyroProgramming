"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python Intro</h1>
      <h2 className="text-3xl font-semibold mb-4">Overview of Python</h2>
      <p className="text-lg mb-4">Python is a high-level, interpreted programming language known for its readability and versatility.</p>
      <h3 className="text-2xl font-semibold mb-2">What is Python?</h3>
      <p className="text-lg mb-4">Python is a general-purpose language that emphasizes code readability and simplicity, using indentation to define code blocks.</p>
      <h3 className="text-2xl font-semibold mb-2">History and Evolution</h3>
      <p className="text-lg mb-4">Created by Guido van Rossum and first released in 1991, Python has evolved through versions such as 2.x and 3.x, adding features like type hints and improved performance.</p>
      <h3 className="text-2xl font-semibold mb-2">Key Features</h3>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Readability: Clear syntax resembling English.</li>
        <li>Versatility: Suitable for web, data science, automation, and more.</li>
        <li>Extensive Standard Library: Includes modules for many tasks.</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Use Cases</h2>
      <p className="text-lg mb-4">Python is widely used in:</p>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Web development (e.g., Django, Flask).</li>
        <li>Data science and machine learning (e.g., pandas, scikit-learn).</li>
        <li>Automation and scripting.</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Getting Started</h2>
      <h3 className="text-2xl font-semibold mb-2">Installing Python</h3>
      <p className="text-lg mb-4">Download Python from the official website (<a href="https://python.org" className="text-primary underline">python.org</a>) and follow the installer for your OS.</p>
      <h3 className="text-2xl font-semibold mb-2">Setting up a Development Environment</h3>
      <p className="text-lg mb-4">Choose an IDE or editor such as VSCode, PyCharm, or Sublime Text and ensure the Python extension is installed for syntax highlighting and linting.</p>
    </div>
  );
}
