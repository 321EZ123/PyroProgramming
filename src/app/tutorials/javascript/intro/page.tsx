"use client";

export default function JsIntroduction() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Introduction</h1>
      <h2 className="text-3xl font-semibold mb-4">Overview of JavaScript</h2>
      <h3 className="text-2xl font-medium mb-2">What is JavaScript?</h3>
      <p className="text-lg mb-4">JavaScript is a versatile, high-level programming language primarily used to create interactive and dynamic content on web pages.</p>

      <h3 className="text-2xl font-medium mb-2">History and Evolution</h3>
      <p className="text-lg mb-4">Initially developed by Brendan Eich at Netscape in 1995, JavaScript has evolved through ECMAScript editions (ES1 to ES2023), adding features like arrow functions, classes, modules, and async/await.</p>

      <h3 className="text-2xl font-medium mb-2">Importance in Web Development</h3>
      <p className="text-lg mb-4">JavaScript powers the behavior of web pages, enabling dynamic updates, form validation, animations, and handling user interactions.</p>

      <h2 className="text-3xl font-semibold mb-4">Use Cases</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Client-side scripting for interactive user interfaces</li>
        <li>Server-side development with Node.js</li>
        <li>Mobile and desktop applications via frameworks like React Native and Electron</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Client-side vs Server-side</h2>
      <p className="text-lg mb-4">In the browser, JavaScript manipulates the DOM and handles events. On the server, Node.js runs JavaScript to handle HTTP requests, access databases, and perform backend logic.</p>

      <h2 className="text-3xl font-semibold mb-4">Popular Frameworks and Libraries</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>React: For building component-based UIs</li>
        <li>Node.js: JavaScript runtime for backend</li>
        <li>Vue.js, Angular, Svelte: Alternative front-end frameworks</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Getting Started</h2>
      <h3 className="text-2xl font-medium mb-2">Setting Up a Development Environment</h3>
      <p className="text-lg mb-4">Install Node.js and npm or yarn. Use npm init or yarn init to create a project, and include a script to bundle/transpile (e.g., using webpack or Vite).</p>

      <h3 className="text-2xl font-medium mb-2">Tools and Editors</h3>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>VSCode: Popular code editor with JavaScript support</li>
        <li>Browser DevTools: Inspect elements, debug, and profile code</li>
        <li>Linters and formatters: ESLint, Prettier</li>
      </ul>
    </div>
  );
}
