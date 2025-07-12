"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PythonTutorialHome() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">Python Tutorial</h1>

      <div className="bg-card/50 border border-fire-darker p-6 rounded-md mb-8">
        <h2 className="text-3xl font-bold mb-4">Learn Python</h2>
        <p className="text-lg mb-4">
          Python is a popular programming language used for a variety of applications, from web development to data science.
        </p>
        <p className="text-lg mb-4">
          This tutorial will guide you from the basics to advanced concepts in Python.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white mt-4">
          <Link href="/tutorials/python/intro">Start learning Python now »</Link>
        </Button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Python Example</h2>

        <div className="bg-[#1E1E1E] rounded-md overflow-hidden shadow-lg mb-6">
          <div className="bg-card p-4 border-b border-fire-darker">
            <h3 className="text-lg font-semibold">Example:</h3>
          </div>
          <div className="p-4 text-white font-mono text-sm">
            <pre className="language-python">
              <code>{`print("Hello, World!")

# Python Conditional Example
temperature = 35
if temperature > 30:
    print("It's a hot day!")
    print("Remember to drink water")
elif temperature > 20:
    print("It's a nice day!")
else:
    print("It's a bit cool today")

# Python Function Example
def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9

# Test the function
print(fahrenheit_to_celsius(100))`}</code>
            </pre>
          </div>
          <div className="bg-card p-3 flex justify-center">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-white">
              Try it Yourself
            </Button>
          </div>
        </div>

        <p className="text-lg">
          Click on the "Try it Yourself" button to see how it works.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Why Learn Python?</h2>
        <p className="text-lg mb-4">
          Python is versatile and can be used for web development, data analysis, artificial intelligence, scientific computing, and more.
        </p>
        <p className="text-lg mb-4">
          Its simple syntax makes it an excellent choice for beginners and experienced developers alike.
        </p>
        <p className="text-lg mb-4">
          The Python community is vast and supportive, providing numerous resources to help you learn and grow your skills.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Explore Python Libraries</h2>
        <p className="text-lg mb-4">
          Python has a rich ecosystem of libraries for various applications:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Django:</strong> A high-level web framework for building web applications.</li>
          <li><strong>Pandas:</strong> A library for data manipulation and analysis.</li>
          <li><strong>NumPy:</strong> A fundamental package for scientific computing with Python.</li>
          <li><strong>TensorFlow:</strong> An open-source framework for machine learning and artificial intelligence.</li>
        </ul>
        <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10">
          <Link href="/tutorials/python/libraries">Discover More Libraries</Link>
        </Button>
      </div>

      <div className="bg-card/50 border border-fire-darker p-6 rounded-md mb-8">
        <h2 className="text-3xl font-bold mb-4">Kickstart your career</h2>
        <p className="text-lg mb-4">
          Get certified by completing the Python course.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white mt-2">
          Learn More
        </Button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Video: Python Crash Course</h2>
        <div className="bg-[#1E1E1E] rounded-md overflow-hidden">
          <div className="p-8 text-center text-white">
            <div className="inline-block bg-primary text-white text-3xl font-bold p-4 mb-4">
              Python Crash Course
            </div>
            <p className="text-xl mb-4">in just 75 minutes</p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Link href="https://www.youtube.com/watch?v=VchuKL44s6E">Watch Video</Link>
            </Button>
            <p className="text-sm mt-2">We are not associated with YouTube or the creator.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
