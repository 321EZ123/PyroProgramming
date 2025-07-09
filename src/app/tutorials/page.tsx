import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface TutorialSectionProps {
  title: string;
  description: string;
  bgClass: string;
  code?: string;
  language?: string;
  children?: React.ReactNode;
}

const TutorialSection: React.FC<TutorialSectionProps> = ({
  title,
  description,
  bgClass,
  code,
  language,
  children
}) => {
  return (
    <section className={`w-full py-16 ${bgClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-6xl font-bold mb-4">{title}</h2>
          <p className="text-lg mb-6">{description}</p>
          <p className="text-md mb-4">
            {title} is essential for web development. It provides the structure and layout for your web pages, allowing you to create engaging and interactive content. Understanding {title} will help you build a solid foundation in web technologies.
          </p>
          <p className="text-md mb-4">
            Here are some key concepts and features to explore:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Basic syntax and structure</li>
            <li>Elements and tags</li>
            <li>Attributes and their usage</li>
            <li>Best practices for writing clean and semantic {title}</li>
          </ul>
          <div className="space-y-4">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-white px-6 py-5 text-base">
              <Link href={`/tutorials/${title.toLowerCase()}`}>Learn {title}</Link>
            </Button>
          </div>
        </div>
        {code && (
          <div className="flex-1">
            <div className="rounded-md overflow-hidden shadow-lg">
              <div className="bg-card p-4 border-b border-fire-darker">
                <h3 className="text-lg font-semibold">{title} Example:</h3>
              </div>
              <div className="bg-[#1E1E1E] p-4 text-white font-mono text-sm overflow-x-auto">
                <pre><code>{code}</code></pre>
              </div>
              <div className="bg-card p-3 flex justify-center">
                <Button variant="default" className="bg-primary hover:bg-primary/90 text-white">
                  Try it Yourself
                </Button>
              </div>
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-24 bg-background border-b border-fire-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-7xl font-bold mb-6 text-primary">Learn to Code</h1>
          <p className="text-xl mb-8 text-foreground">With PyroProgramming's comprehensive language tutorials</p>

          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search our tutorials, e.g. HTML"
              className="w-full p-4 pr-12 rounded-md bg-card border border-fire-darker text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="absolute right-1 top-1 bottom-1 bg-primary hover:bg-primary/90 text-white px-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
            </Button>
          </div>

          <div className="mt-6">
            <Link href="/docs#section-2" className="text-lg text-primary hover:text-primary/80 underline">
              Not Sure Where To Begin?
            </Link>
          </div>
        </div>
      </section>

      {/* HTML Section */}
      <TutorialSection
        title="HTML"
        description="The language for building web pages"
        bgClass="bg-background"
        code={`<!DOCTYPE html>
<html>
<head>
  <title>HTML Tutorial</title>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}
      />

      {/* CSS Section */}
      <TutorialSection
        title="CSS"
        description="The language for styling web pages"
        bgClass="bg-card"
        code={`body {
  background-color: #f2f2f2;
}

h1 {
  color: #ff4500;
  text-align: center;
}

p {
  font-family: verdana;
}`}
      />

      {/* JavaScript Section */}
      <TutorialSection
        title="JavaScript"
        description="The language for programming web pages"
        bgClass="bg-background"
        code={`function myFunction() {
  let x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "#ff4500";
}`}
      />

      {/* Python Section */}
      <TutorialSection
        title="Python"
        description="A popular programming language"
        bgClass="bg-card"
        code={`if 5 > 2:
  print("Five is greater than two!")`}
      />

      {/* Java Section */}
      <TutorialSection
        title="Java"
        description="A powerful, object-oriented programming language"
        bgClass="bg-background"
        code={`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
      />

      {/* IDE Guide Section */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-4">Getting Started with Visual Studio Code</h2>
          <p className="text-lg mb-8">
            Visual Studio Code (VS Code) is a free, open-source code editor that supports a variety of programming languages and is highly customizable.
          </p>

          <h3 className="text-3xl font-semibold mb-4">Installation</h3>
          <p className="text-md mb-4">
            To install VS Code, follow these steps:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>Visit the <a href="https://code.visualstudio.com/" className="text-primary underline">Visual Studio Code website</a>.</li>
            <li>Download the version suitable for your operating system (Windows, macOS, or Linux).</li>
            <li>Run the installer and follow the setup instructions.</li>
          </ol>

          <h3 className="text-3xl font-semibold mb-4">Basic Features</h3>
          <p className="text-md mb-4">
            Some of the key features of VS Code include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Intelligent code completion (IntelliSense)</li>
            <li>Built-in Git commands</li>
            <li>Debugging support</li>
            <li>Extensions for additional functionality (e.g., themes, language support)</li>
          </ul>

          <h3 className="text-3xl font-semibold mb-4">Getting Help</h3>
          <p className="text-md mb-4">
            You can access the integrated documentation and tutorials directly from VS Code by pressing <code>Ctrl + K</code> followed by <code>Ctrl + H</code> (Windows/Linux) or <code>Cmd + K</code> followed by <code>Cmd + H</code> (macOS).
          </p>

          <p className="text-md mb-4">
            For more resources, check out the official <a href="https://code.visualstudio.com/docs" className="text-primary underline">VS Code documentation</a>.
          </p>
        </div>
      </section>

      {/* Exercises and Quizzes */}
      <section className="w-full py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-4">Exercises and Quizzes</h2>
          <p className="text-lg mb-8">Test your skills!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-white p-8 text-xl h-auto">
              Exercises
            </Button>
            <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 p-8 text-xl h-auto">
              Quizzes
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
