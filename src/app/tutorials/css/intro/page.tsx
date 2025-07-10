"use client";

export default function CssIntroduction() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Introduction</h1>

      <h2 className="text-3xl font-semibold mb-4">Overview of CSS</h2>
      <p className="text-lg mb-4">
        CSS (Cascading Style Sheets) is a stylesheet language used to define the presentation of HTML documents.
      </p>
      <p className="text-lg mb-4">
        It allows you to separate content (HTML) from design, specifying colors, layouts, fonts, and more.
      </p>
      <p className="text-lg mb-4">
        CSS is essential in web design for creating visually appealing and responsive websites.
      </p>

      <h2 className="text-3xl font-semibold mb-4">How CSS Works</h2>
      <p className="text-lg mb-4">
        CSS consists of rules and declarations. A rule targets HTML elements using selectors.
      </p>
      <p className="text-lg mb-4">
        Each declaration defines a property and a value, for example <code className="bg-card/50 px-1 rounded">color: blue;</code>.
      </p>
      <p className="text-lg mb-4">
        Browsers parse CSS and apply styles to the matching elements in the HTML document.
      </p>
    </div>
  );
}
