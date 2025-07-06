"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SqlTutorialHome() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-primary">SQL Tutorial</h1>

      <div className="bg-card/50 border border-fire-darker p-6 rounded-md mb-8">
        <h2 className="text-3xl font-bold mb-4">Learn SQL</h2>
        <p className="text-lg mb-4">
          SQL is a standard language for storing, manipulating, and retrieving data in databases.
        </p>
        <p className="text-lg mb-4">
          Our SQL tutorial will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white mt-4">
          <Link href="/tutorials/sql/intro">Start learning SQL now »</Link>
        </Button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Examples in Each Chapter</h2>
        <p className="text-lg mb-4">
          With our online SQL editor, you can edit the SQL statements, and click on a button to view the result.
        </p>

        <div className="bg-[#1E1E1E] rounded-md overflow-hidden shadow-lg mb-6">
          <div className="bg-card p-4 border-b border-fire-darker">
            <h3 className="text-lg font-semibold">Example:</h3>
          </div>
          <div className="p-4 text-white font-mono text-sm">
            <pre className="language-sql">
              <code>{`SELECT * FROM Customers
WHERE Country='Mexico';`}</code>
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
        <h2 className="text-3xl font-bold mb-6">SQL is a Standard - BUT...</h2>
        <p className="text-lg mb-4">
          Although SQL is an ANSI/ISO standard, there are different versions of the SQL language.
        </p>
        <p className="text-lg mb-4">
          However, to be compliant with the ANSI standard, they all support at least the major commands (such as SELECT, UPDATE, DELETE, INSERT, WHERE) in a similar manner.
        </p>
        <div className="bg-card/50 p-4 rounded-md border border-fire-darker mb-4">
          <p className="mb-0"><strong>Note:</strong> Most of the SQL database programs also have their own proprietary extensions in addition to the SQL standard!</p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Using SQL in Your Web Site</h2>
        <p className="text-lg mb-4">
          To build a web site that shows data from a database, you will need:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-lg">
          <li>An RDBMS database program (i.e. MS Access, SQL Server, MySQL)</li>
          <li>To use a server-side scripting language, like PHP or ASP</li>
          <li>To use SQL to get the data you want</li>
          <li>To use HTML / CSS to style the page</li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">RDBMS</h2>
        <p className="text-lg mb-4">
          RDBMS stands for Relational Database Management System.
        </p>
        <p className="text-lg mb-4">
          RDBMS is the basis for SQL, and for all modern database systems such as MS SQL Server, IBM DB2, Oracle, MySQL, and Microsoft Access.
        </p>
        <p className="text-lg mb-4">
          The data in RDBMS is stored in database objects called tables. A table is a collection of related data entries and it consists of columns and rows.
        </p>

        <div className="bg-card border border-fire-darker rounded-md overflow-hidden mb-6">
          <div className="p-4">
            <h3 className="text-xl font-bold mb-4">Example</h3>
            <p className="mb-4">Look at a selection from the "Customers" table:</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-card">
                  <th className="border border-fire-darker p-2 text-left">CustomerID</th>
                  <th className="border border-fire-darker p-2 text-left">CustomerName</th>
                  <th className="border border-fire-darker p-2 text-left">ContactName</th>
                  <th className="border border-fire-darker p-2 text-left">Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-fire-darker p-2">1</td>
                  <td className="border border-fire-darker p-2">Alfreds Futterkiste</td>
                  <td className="border border-fire-darker p-2">Maria Anders</td>
                  <td className="border border-fire-darker p-2">Germany</td>
                </tr>
                <tr className="bg-card/50">
                  <td className="border border-fire-darker p-2">2</td>
                  <td className="border border-fire-darker p-2">Ana Trujillo Emparedados y helados</td>
                  <td className="border border-fire-darker p-2">Ana Trujillo</td>
                  <td className="border border-fire-darker p-2">Mexico</td>
                </tr>
                <tr>
                  <td className="border border-fire-darker p-2">3</td>
                  <td className="border border-fire-darker p-2">Antonio Moreno Taquería</td>
                  <td className="border border-fire-darker p-2">Antonio Moreno</td>
                  <td className="border border-fire-darker p-2">Mexico</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-lg mb-4">
          Every table is broken up into smaller entities called fields. The fields in the Customers table consist of CustomerID, CustomerName, ContactName, Address, City, PostalCode and Country. A field is a column in a table that is designed to maintain specific information about every record in the table.
        </p>
        <p className="text-lg mb-4">
          A record, also called a row, is each individual entry that exists in a table. For example, there are 3 records in the above Customers table. A record is a horizontal entity in a table.
        </p>
        <p className="text-lg mb-4">
          A column is a vertical entity in a table that contains all information associated with a specific field in a table.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">SQL Examples</h2>
        <p className="text-lg mb-4">
          In this tutorial, we will use the well-known Northwind sample database (included in MS Access and MS SQL Server).
        </p>
        <p className="text-lg mb-4">
          Below is a selection from the "Customers" table:
        </p>

        <div className="bg-card border border-fire-darker rounded-md overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-card">
                  <th className="border border-fire-darker p-2 text-left">CustomerID</th>
                  <th className="border border-fire-darker p-2 text-left">CustomerName</th>
                  <th className="border border-fire-darker p-2 text-left">ContactName</th>
                  <th className="border border-fire-darker p-2 text-left">Address</th>
                  <th className="border border-fire-darker p-2 text-left">City</th>
                  <th className="border border-fire-darker p-2 text-left">PostalCode</th>
                  <th className="border border-fire-darker p-2 text-left">Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-fire-darker p-2">1</td>
                  <td className="border border-fire-darker p-2">Alfreds Futterkiste</td>
                  <td className="border border-fire-darker p-2">Maria Anders</td>
                  <td className="border border-fire-darker p-2">Obere Str. 57</td>
                  <td className="border border-fire-darker p-2">Berlin</td>
                  <td className="border border-fire-darker p-2">12209</td>
                  <td className="border border-fire-darker p-2">Germany</td>
                </tr>
                <tr className="bg-card/50">
                  <td className="border border-fire-darker p-2">2</td>
                  <td className="border border-fire-darker p-2">Ana Trujillo Emparedados y helados</td>
                  <td className="border border-fire-darker p-2">Ana Trujillo</td>
                  <td className="border border-fire-darker p-2">Avda. de la Constitución 2222</td>
                  <td className="border border-fire-darker p-2">México D.F.</td>
                  <td className="border border-fire-darker p-2">05021</td>
                  <td className="border border-fire-darker p-2">Mexico</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10">
          <Link href="/tutorials/sql/examples">Go to SQL Examples</Link>
        </Button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">SQL Exercises</h2>
        <p className="text-lg mb-4">
          Test yourself with exercises.
        </p>

        <div className="bg-card border border-fire-darker rounded-md p-6 mb-6">
          <h3 className="text-xl font-bold mb-4">Exercise:</h3>
          <p className="mb-4">Insert the missing statement to get all the columns from the Customers table.</p>

          <div className="bg-[#1E1E1E] p-4 text-white font-mono text-sm rounded mb-4">
            <pre className="language-sql">
              <code>{`SELECT ___ FROM Customers;`}</code>
            </pre>
          </div>

          <Button className="bg-primary hover:bg-primary/90 text-white">
            Submit Answer »
          </Button>
        </div>

        <Button variant="outline" className="border-fire-darker hover:bg-fire-darker/10">
          <Link href="/tutorials/sql/exercises">Start SQL Exercises</Link>
        </Button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">SQL Quiz</h2>
        <p className="text-lg mb-4">
          Test your SQL skills with our SQL Quiz!
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          <Link href="/tutorials/sql/quiz">Start SQL Quiz</Link>
        </Button>
      </div>

      <div className="bg-card/50 border border-fire-darker p-6 rounded-md mb-8">
        <h2 className="text-3xl font-bold mb-4">Kickstart your career</h2>
        <p className="text-lg mb-4">
          Get certified by completing the SQL course
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white mt-2">
          Learn More
        </Button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Video: SQL Crash Course</h2>
        <div className="bg-[#1E1E1E] rounded-md overflow-hidden">
          <div className="p-8 text-center text-white">
            <div className="inline-block bg-primary text-white text-3xl font-bold p-4 mb-4">
              SQL Crash Course
            </div>
            <p className="text-xl mb-4">in just 30 minutes</p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Watch Video
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
