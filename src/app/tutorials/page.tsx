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

      {/* Code Editor Section */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-4">Code Editor</h2>
          <p className="text-lg mb-8">With our online code editor, you can edit code and view the result in your browser</p>

          <div className="bg-card rounded-md overflow-hidden shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center bg-gray-900 px-4 py-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 flex-1 text-white text-sm font-mono">pyroprogramming.com/tryit</div>
            </div>

            <div className="flex">
              <div className="w-1/2 bg-[#1E1E1E] p-4 text-white font-mono text-left border-r border-gray-700">
                <pre><code>{`<!DOCTYPE html>
<html>
<body>

<h1 style="color: #ff4500;">Hello World!</h1>

<p>This is a paragraph.</p>

</body>
</html>`}</code></pre>
              </div>
              <div className="w-1/2 p-4 text-left">
                <h1 className="text-2xl font-bold text-primary mb-4">Hello World!</h1>
                <p>This is a paragraph.</p>
              </div>
            </div>

            <div className="bg-gray-900 p-3 flex justify-center space-x-4">
              <Button variant="default" className="bg-primary hover:bg-primary/90 text-white">
                Try Frontend Editor (HTML/CSS/JS)
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Try Backend Editor (Python/PHP/Java/C...)
              </Button>
            </div>
          </div>
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
