"use client";

export default function JsEvents() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">JS Events</h1>
      <h2 className="text-3xl font-semibold mb-4">What are Events?</h2>
      <p className="text-lg mb-4">Events are actions or occurrences that happen in the browser, like clicks or key presses.</p>

      <h2 className="text-3xl font-semibold mb-4">Event Handling</h2>
      <p className="text-lg mb-4">Add listeners with <code className="bg-card/50 px-1 rounded">element.addEventListener()</code> or inline handlers.</p>

      <h2 className="text-3xl font-semibold mb-4">Examples</h2>
      <div className="bg-[#1E1E1E] rounded-md p-4 mb-6 text-white font-mono text-sm">
        <pre>{`document.getElementById('btn').addEventListener('click', () => {
  alert('Button clicked');
});`}</pre>
      </div>
    </div>
  );
}
