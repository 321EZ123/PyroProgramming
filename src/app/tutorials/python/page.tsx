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
          Python is a popular programming language.
        </p>
        <p className="text-lg mb-4">
          Python can be used on a server to create web applications.
        </p>
        <p className="text-lg mb-4">
          Python is a general-purpose programming language, which means it can be used for many things.
        </p>
        <p className="text-lg mb-4">
          This tutorial will teach you Python from basic to advanced.
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
        <h2 className="text-3xl font-bold mb-6">Learning by Examples</h2>
        <p className="text-lg mb-4">
          At PyroProgramming you can study Python by examples and learn by practicing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-fire-darker rounded-md p-4">
            <h3 className="text-xl font-bold mb-2">Example</h3>
            <p className="mb-2">Python Variables:</p>
            <div className="bg-[#1E1E1E] p-3 rounded-md text-white font-mono text-sm mb-2">
              <code>x = 5<br/>y = "Hello, World!"</code>
            </div>
            <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 w-full">
              Try it
            </Button>
          </div>
          <div className="bg-card border border-fire-darker rounded-md p-4">
            <h3 className="text-xl font-bold mb-2">Example</h3>
            <p className="mb-2">Python Lists:</p>
            <div className="bg-[#1E1E1E] p-3 rounded-md text-white font-mono text-sm mb-2">
              <code>fruits = ["apple", "banana", "cherry"]<br/>print(fruits[1])</code>
            </div>
            <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10 w-full">
              Try it
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Why Python?</h2>
        <p className="text-lg mb-4">
          Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).
        </p>
        <p className="text-lg mb-4">
          Python has a simple syntax similar to the English language.
        </p>
        <p className="text-lg mb-4">
          Python has syntax that allows developers to write programs with fewer lines than some other programming languages.
        </p>
        <p className="text-lg mb-4">
          Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.
        </p>
        <p className="text-lg mb-4">
          Python can be treated in a procedural way, an object-oriented way or a functional way.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Python Syntax compared to other programming languages</h2>
        <p className="text-lg mb-4">
          Python was designed for readability, and has some similarities to the English language with influence from mathematics.
        </p>
        <p className="text-lg mb-4">
          Python uses new lines to complete a command, as opposed to other programming languages which often use semicolons or parentheses.
        </p>
        <p className="text-lg mb-4">
          Python relies on indentation, using whitespace, to define scope; such as the scope of loops, functions and classes. Other programming languages often use curly-brackets for this purpose.
        </p>

        <div className="bg-[#1E1E1E] rounded-md overflow-hidden shadow-lg mb-6">
          <div className="bg-card p-4 border-b border-fire-darker">
            <h3 className="text-lg font-semibold">Example:</h3>
          </div>
          <div className="p-4 text-white font-mono text-sm">
            <pre className="language-python">
              <code>{`# Python program to print Fibonacci series
def fibonacci(n):
    # Initialize the first two Fibonacci numbers
    a, b = 0, 1

    # Check if the number of terms is valid
    if n <= 0:
        print("Please enter a positive integer")
    elif n == 1:
        print(a)
    else:
        print("Fibonacci sequence:")
        for i in range(n):
            print(a, end=" ")
            a, b = b, a + b

# Call the function
fibonacci(10)`}</code>
            </pre>
          </div>
          <div className="bg-card p-3 flex justify-center">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-white">
              Try it Yourself
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Python Examples</h2>
        <p className="text-lg mb-4">
          Learn by examples! At PyroProgramming you will find more than 300 Python examples.
        </p>

        <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10">
          <Link href="/tutorials/python/examples">Go to Python Examples</Link>
        </Button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Python Exercises</h2>
        <p className="text-lg mb-4">
          Test yourself with exercises.
        </p>

        <div className="bg-card border border-fire-darker rounded-md p-6 mb-6">
          <h3 className="text-xl font-bold mb-4">Exercise:</h3>
          <p className="mb-4">Insert the missing part of the code below to output "Hello World".</p>

          <div className="bg-[#1E1E1E] p-4 text-white font-mono text-sm rounded mb-4">
            <pre className="language-python">
              <code>{`___("Hello World")`}</code>
            </pre>
          </div>

          <Button className="bg-primary hover:bg-primary/90 text-white">
            Submit Answer »
          </Button>
        </div>

        <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10">
          <Link href="/tutorials/python/exercises">Start Python Exercises</Link>
        </Button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Python Quiz</h2>
        <p className="text-lg mb-4">
          Test your Python skills with our Python Quiz!
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          <Link href="/tutorials/python/quiz">Start Python Quiz</Link>
        </Button>
      </div>

      <div className="bg-card/50 border border-fire-darker p-6 rounded-md mb-8">
        <h2 className="text-3xl font-bold mb-4">Kickstart your career</h2>
        <p className="text-lg mb-4">
          Get certified by completing the Python course
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
            <p className="text-xl mb-4">in just 40 minutes</p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Watch Video
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
