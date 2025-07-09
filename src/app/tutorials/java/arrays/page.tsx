"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java Arrays</h1>
      <h2 className="text-3xl font-semibold mb-4">Understanding Arrays</h2>
      <p className="text-lg mb-4">
        An array is a container object that holds a fixed number of values of a single type.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Creating and Initializing Arrays</h2>
      <pre className="bg-gray-100 p-4 rounded mb-4">
        <code>
          <span className="text-black bg-orange-500 block p-2 rounded">
            {`int[] numbers = new int[5];`}
          </span>
          <span className="text-black bg-orange-500 block p-2 rounded">
            {`String[] names = {"Alice", "Bob", "Charlie"};`}
          </span>
        </code>
      </pre>
      <h2 className="text-3xl font-semibold mb-4">Accessing Array Elements</h2>
      <p className="text-lg mb-4">
        Access elements using zero-based indexes: <code>numbers[0]</code> for the first element.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Multidimensional Arrays</h2>
      <pre className="bg-gray-100 p-4 rounded mb-6">
        <code>
          <span className="text-black bg-orange-500 block p-2 rounded">
            {`int[][] matrix = { {1, 2}, {3, 4} };`}
          </span>
        </code>
      </pre>
    </div>
  );
}
