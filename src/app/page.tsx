import type React from 'react';
import Link from 'next/link';

const DocsSection: React.FC<{
  id: string;
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}> = ({ id, title, lastUpdated, children }) => (
  <section id={id} className="mb-16 scroll-mt-20">
    <div className="flex justify-between items-center mb-4 pb-2 border-b border-fire-darker">
      <h2 className="text-4xl font-bold text-primary">{title}</h2>
      {lastUpdated && (
        <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
      )}
    </div>
    <div className="prose prose-invert max-w-none prose-headings:text-secondary prose-a:text-accent hover:prose-a:text-fire-bright prose-strong:text-fire-medium prose-blockquote:border-fire-medium prose-code:text-fire-yellow prose-code:bg-card prose-code:p-1 prose-code:rounded-sm">
      {children}
    </div>
  </section>
);

const Table: React.FC<{
  headers: string[];
  rows: string[][];
}> = ({ headers, rows }) => (
  <div className="overflow-x-auto my-6">
    <table className="min-w-full divide-y divide-fire-darker border border-fire-darker rounded-md">
      <thead className="bg-card">
        <tr>
          {headers.map((header) => (
            <th
              key={header}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-background divide-y divide-fire-darker">
        {rows.map((row) => (
          <tr key={row[0]}>
            {row.map((cell, cellIndex) => (
              <td
                key={cell}
                className="px-6 py-4 whitespace-nowrap text-sm text-foreground"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function DocsPage() {
  return (
    <article>
      <DocsSection id="section-1" title="Introduction" lastUpdated="April 15, 2025">
        <p className="mb-4">Welcome to PyroProgramming! We're here to help you learn programming in an easy way. Our guides are simple and straightforward. Whether you're just starting out or want to learn something new, we've got you covered.</p>

        <h3 id="item-1-1" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">About Us</h3>
        <p className="mb-4">We believe learning to code should be fun and not scary. Our team creates tutorials that anyone can follow. We focus on real projects you can actually build and use.</p>

        <h3 id="item-1-2" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Our Services</h3>
        <p className="mb-4">Here's what we offer to help you succeed:</p>
        <ul className="list-disc list-inside my-4 space-y-2">
          <li>Step-by-step coding tutorials that are easy to follow</li>
          <li>Live help sessions where you can ask questions</li>
          <li>Free code examples you can use in your projects</li>
          <li>A friendly community to learn with others</li>
        </ul>

        <h3 id="item-1-3" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Key Features</h3>
        <p className="mb-4">What makes our platform special:</p>
        <Table
          headers={["Feature", "Description"]}
          rows={[
            ["Easy Tutorials", "Simple guides that break down complex topics into small steps."],
            ["Fresh Content", "We update our guides regularly to match current trends."],
            ["Real Examples", "Working code you can copy and modify for your own projects."],
            ["Practical Projects", "Build actual websites and apps, not just toy examples."]
          ]}
        />
      </DocsSection>

      <DocsSection id="section-2" title="Programming Languages">
        <p className="mb-4">Different programming languages are good for different things. Some are great for websites, others for mobile apps or data analysis. Here we'll show you the most popular ones and when to use them.</p>

        <h3 id="item-2-1" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">About Computer Languages</h3>
        <p className="mb-4">Think of programming languages like tools in a toolbox. You use a hammer for nails and a screwdriver for screws. Each language has its strengths and best uses.</p>

        <h3 id="item-2-3" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Popular Languages</h3>
        <ul className="list-disc list-inside my-4 space-y-2">
          <li><strong>Python:</strong> Great for beginners. Used for websites, data science, and automation.</li>
          <li><strong>JavaScript:</strong> Powers all modern websites. Essential for web development.</li>
          <li><strong>HTML/CSS:</strong> The building blocks of web pages. HTML for structure, CSS for style.</li>
          <li><strong>Java:</strong> Popular for big business apps and Android mobile apps.</li>
        </ul>

        <h3 id="item-2-3" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Tutorials</h3>
        <p className="mb-4">Start learning with these free resources:</p>
        <ul className="list-disc list-inside my-4 space-y-2">
          <li><a href="https://docs.python.org/3/" className="text-accent hover:text-fire-bright" target="_blank" rel="noopener noreferrer">Python Official Docs</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="text-accent hover:text-fire-bright" target="_blank" rel="noopener noreferrer">JavaScript Guide</a></li>
          <li><a href="https://www.w3schools.com/" className="text-accent hover:text-fire-bright" target="_blank" rel="noopener noreferrer">W3Schools (HTML/CSS)</a></li>
        </ul>

        <p className="mb-4">For a more interactive learning experience, be sure to check out our <Link href="/tutorials" className="text-accent hover:text-fire-bright">Language Tutorials</Link> page, which provides code examples and hands-on exercises.</p>
      </DocsSection>

      <DocsSection id="section-3" title="Deployment">
        <p className="mb-4">Once you build your website, you need to put it online so others can see it. This is called deployment. Many services let you do this for free, which is perfect when you're learning.</p>

        <h3 id="item-3-1" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Custom Domains</h3>
        <p className="mb-4">A custom domain is your own website name like "mysite.com" instead of "mysite.netlify.app". You have to buy these from companies like Namecheap. They usually cost around $10-15 per year.</p>

        <h3 id="item-3-2" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Fastly</h3>
        <p className="mb-4">Fastly is a content delivery network that makes websites load faster worldwide. It's more advanced and typically used by bigger companies.</p>

        <h3 id="item-3-3" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Back4App (b4a.run)</h3>
        <p className="mb-4">Back4App lets you run more complex apps that need a server. You'll need to create a Dockerfile, which tells the service how to run your app. It has a free tier that's good for testing.</p>

        <h3 id="item-3-4" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Vercel (vercel.app)</h3>
        <p className="mb-4">Vercel is super easy to use. Just connect your GitHub account and it automatically deploys your website whenever you make changes. Perfect for static sites and React apps.</p>

        <h3 id="item-3-5" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Netlify (netlify.app)</h3>
        <p className="mb-4">Similar to Vercel, Netlify makes deployment simple. Drag and drop your files or connect to GitHub. Great for beginners and has useful features like form handling.</p>

        <h3 id="item-3-6" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Railway (railway.app)</h3>
        <p className="mb-4">Railway gives you free credits each month to run your apps. Good for both simple websites and complex apps with databases. Credits refresh monthly but can run out if you use too much.</p>

        <h3 id="item-3-7" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Koyeb (koyeb.app)</h3>
        <p className="mb-4">Koyeb lets you run one free service at a time. Great for testing your apps before deciding if you want to pay for more services.</p>
      </DocsSection>

      <DocsSection id="section-4" title="Creating a Website">
        <p className="mb-4">Building your own website is easier than you think. You can start simple and add features as you learn. Here's everything you need to know to get started.</p>

        <h3 id="item-4-1" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">How to obtain games</h3>
        <p className="mb-4">If you want to add games to your site, look for open-source games on GitHub. Always check the license to make sure you can use them legally.</p>
        <ol className="list-decimal list-inside my-4 space-y-2">
          <li>Search GitHub for games with open licenses</li>
          <li>Download the game files or copy the code</li>
          <li>Add them to your website project</li>
        </ol>

        <h3 id="item-4-2" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">What to learn</h3>
        <p className="mb-4">Start with these three essential skills: HTML (structure), CSS (styling), and JavaScript (interactivity). Use free resources like Codecademy, YouTube tutorials, or ask AI assistants for help.</p>

        <h3 id="item-4-3" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">How to deploy your app</h3>
        <p className="mb-4">Pick a free hosting service like Netlify, GitHub Pages, or Vercel. Each has different strengths, so try a few to see which you like best.</p>

        <h3 id="item-4-4" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Legal</h3>
        <p className="mb-4">Always check licenses before using other people's code or games. Most open-source projects tell you exactly how you can use them.</p>

        <h3 id="item-4-5" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Potential Monetization</h3>
        <p className="mb-4">Once your site gets traffic, you can make money through ads, donations, or sponsorships. Start small and focus on building a good site first.</p>
      </DocsSection>

      <DocsSection id="section-5" title="Exploits">
        <p className="mb-4">This section contains community-shared tools and methods for getting around web filters and restrictions. We don't create or endorse these tools. They're shared for educational purposes only.</p>
        <p className="mb-4">For a broader collection of exploits and tools, see the <a href="https://github.com/wea-f/ByePassHub/tree/main/Exploits" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-fire-bright">ByePassHub Exploits</a> repository.</p>

        <h3 id="item-5-1" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Browser Extensions</h3>
        <p className="mb-4">These are small add-ons for your browser that can change how websites work. Some can hide your browsing or route traffic through different servers to bypass blocks.</p>

        <h3 id="item-5-2" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Extension Blockers</h3>
        <p className="mb-4">Tools that stop other browser extensions from running. They can disable filtering software by preventing it from loading or working properly.</p>

        <h3 id="item-5-3" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">ChromeOS Methods</h3>
        <p className="mb-4">Techniques for Chromebook devices that let you run custom software or access developer features. These often involve special modes like developer mode or recovery mode.</p>

        <p className="mb-4 p-4 bg-card border border-fire-medium rounded-md">
          <strong>Important:</strong> These tools are shared by the community for educational purposes. We do not recommend using them in school or work environments where they may violate policies.
        </p>
      </DocsSection>

      <DocsSection id="section-6" title="FAQs">
        <p className="mb-4">Here are answers to the most common questions we get. If you don't find what you're looking for, feel free to reach out on our Discord or GitHub.</p>

        <h3 className="text-xl font-semibold text-secondary mt-6 mb-2">How do I start learning programming?</h3>
        <p className="mb-4">Start with HTML and CSS to build simple web pages. Then learn JavaScript to make them interactive. Practice by building small projects.</p>

        <h3 className="text-xl font-semibold text-secondary mt-6 mb-2">Which programming language should I learn first?</h3>
        <p className="mb-4">For web development, start with HTML/CSS/JavaScript. For general programming, Python is beginner-friendly and widely used.</p>

        <h3 className="text-xl font-semibold text-secondary mt-6 mb-2">How long does it take to build a website?</h3>
        <p className="mb-4">A simple website can be built in a few hours. A more complex site with features might take weeks or months, depending on your experience.</p>

        <h3 className="text-xl font-semibold text-secondary mt-6 mb-2">Do I need to pay for hosting?</h3>
        <p className="mb-4">Not necessarily. Many services offer free hosting for small projects. You only need to pay when you need more features or traffic.</p>

        <h3 className="text-xl font-semibold text-secondary mt-6 mb-2">Can I use the code examples in my projects?</h3>
        <p className="mb-4">Yes! Our code examples are free to use. Just check any third-party libraries for their specific licenses.</p>
      </DocsSection>
    </article>
  );
}
