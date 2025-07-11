"use client";

import React from 'react';

const CssSelectors: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">CSS Selectors</h1>

      <h2 className="text-3xl font-semibold mb-4">What are Selectors?</h2>
      <p className="text-lg mb-4">
        Selectors are patterns used to select the HTML elements you want to style.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Types of Selectors</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Element:</strong> selects all elements of a given type, e.g., <code className="bg-card/50 px-1 rounded">p</code>
        </li>
        <li>
          <strong>Class:</strong> selects elements with a specific class, e.g., <code className="bg-card/50 px-1 rounded">.example</code>
        </li>
        <li>
          <strong>ID:</strong> selects a unique element by ID, e.g., <code className="bg-card/50 px-1 rounded">#header</code>
        </li>
        <li>
          <strong>Attribute:</strong> selects elements with a specific attribute, e.g., <code className="bg-card/50 px-1 rounded">input[type="text"]</code>
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Combinators</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Descendant:</strong> selects elements inside another, e.g., <code className="bg-card/50 px-1 rounded">div p</code>
        </li>
        <li>
          <strong>Child:</strong> selects direct children, e.g., <code className="bg-card/50 px-1 rounded">ul &gt; li</code>
        </li>
        <li>
          <strong>Adjacent sibling:</strong> selects an element directly after another, e.g., <code className="bg-card/50 px-1 rounded">h1 + p</code>
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6">
        <pre className="text-white font-mono text-sm">
          <code>{`/* Element selector */
p { color: green; }

/* Class selector */
.example { font-weight: bold; }

/* ID selector */
#header { background: #333; }

/* Descendant selector */
div p { margin: 10px; }`}</code>
        </pre>
      </div>
    </div>
  );
};

export default CssSelectors;
