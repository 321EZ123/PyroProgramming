"use client";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Java Get Started</h1>
      <h2 className="text-3xl font-semibold mb-4">Installation</h2>
      <h3 className="text-2xl font-medium mb-2">How to install JDK</h3>
      <p className="text-lg mb-4">Download the JDK from Oracle's website or use your package manager (e.g., apt, Homebrew). Follow the installer instructions to complete installation.</p>
      <p className="text-lg mb-6">After installation, verify by running <code>java -version</code> in your terminal to ensure the correct version is active.</p>
      <h3 className="text-2xl font-medium mb-2">Setting up Java environment variables</h3>
      <p className="text-lg mb-6">Set JAVA_HOME to the JDK installation path and add the JDK bin directory to your PATH environment variable.</p>
      <p className="text-lg mb-6">On Windows, set environment variables via System Settings; on Unix-based systems, export in your shell profile to make changes persistent.</p>
      <h2 className="text-3xl font-semibold mb-4">IDE Setup</h2>
      <h3 className="text-2xl font-medium mb-2">Recommended IDEs</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Eclipse</li>
        <li>IntelliJ IDEA</li>
        <li>NetBeans</li>
      </ul>
      <h3 className="text-2xl font-medium mb-2">Basic configuration tips</h3>
      <p className="text-lg mb-4">Install Java plugins or set the project SDK to your JDK path. Enable auto-build and configure code style formatting.</p>
      <p className="text-lg mb-4">Each IDE offers unique features like code completion, debugging tools, and project templates—choose the one that aligns with your workflow.</p>
      <p className="text-lg mb-6">Customize your IDE by installing linters and formatter plugins to maintain consistent code style across projects.</p>
      <p className="text-lg mb-6">Now that your environment is set up, proceed to the next chapter to write and run your first Java program!</p>
    </div>
  );
}
