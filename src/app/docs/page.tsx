import React from 'react';

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
    <div className="prose prose-invert max-w-none">
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
        {rows.map((row, rowIndex) => (
          <tr key={`row-${rowIndex}`}>
            {row.map((cell, cellIndex) => (
              <td
                key={`cell-${rowIndex}-${cellIndex}`}
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
      <DocsSection id="section-1" title="Introduction" lastUpdated="4/15/2025">
        <p>Welcome to PyroProgramming! This documentation is designed to help you learn about programming.</p>

        <h3 id="item-1-1" className="text-2xl font-semibold text-secondary mt-8 mb-3">About us</h3>
        <p>Helix is a group that mainly focuses on giving users unrestricted access to the internet. By using proxies or bypassing content filters, Helix offers a platform where users can enjoy various games and services directly in their browsers without the need for downloads.</p>

        <h3 id="item-1-2" className="text-2xl font-semibold text-secondary mt-8 mb-3">Our Services</h3>
        <p>Helix has several other projects aimed at improving user experiences. Horizon will be a downloadable site that helps users access online tools easily, inspired by Stripe's clean design.</p>
        
        <h3 id="item-1-3" className="text-2xl font-semibold text-secondary mt-8 mb-3">Features</h3>
        <p>Our services have a variety of features. These include:</p>
        <ul className="list-disc list-inside my-4 space-y-1">
          <li>Unblocked games</li>
          <li>Proxies</li>
          <li>Advanced cloaking</li>
          <li>AI tools</li>
        </ul>
        <Table
          headers={["Benefit", "Explanation"]}
          rows={[
            ["Privacy", "A proxy server hides your IP address, helping to keep your identity and browsing activities private."],
            ["Access Control", "Proxies can help restrict access to specific websites or content, useful in schools or workplaces."],
            ["Unblocking Content", "They allow access to geo-restricted or blocked websites by masking your location."],
            ["Improved Security", "Proxies act as a barrier between your system and the internet, reducing exposure to potential threats."],
            ["Bandwidth Optimization", "By caching frequently accessed resources, proxies reduce bandwidth usage and improve performance."],
            ["Load Balancing", "Incorporating proxies can distribute traffic across multiple servers, improving website availability."],
            ["Monitoring", "Proxies can log user activities for analysis or compliance purposes, helpful for businesses."],
            ["Bypassing ISP Throttling", "Proxies can help bypass restrictions or throttling imposed by internet service providers."]
          ]}
        />
      </DocsSection>

      <DocsSection id="section-2" title="Languages">
        <h3 id="item-2-1" className="text-2xl font-semibold text-secondary mt-8 mb-3">About Computer Languages</h3>
        <h4 className="text-xl font-semibold text-fire-medium mt-6 mb-2">What are Computer Languages?</h4>
        <p>Computer languages are ways to communicate with computers using a set of rules and instructions.</p>
        
        <h4 className="text-xl font-semibold text-fire-medium mt-6 mb-2">Types of Languages</h4>
        <p>There are different types of computer languages, each made for specific tasks, including high-level and low-level languages.</p>
        
        <h4 className="text-xl font-semibold text-fire-medium mt-6 mb-2">What Language Should I Learn?</h4>
        <p>
          Here is an image showing which programming language to learn based on your career goals:
          <img
            src="https://s3.us-east-1.amazonaws.com/fsa2-assets/assets/New-blog/Which-Programming-Language-to-Learn-Based-on-Your-Career-Goals.jpg"
            alt="Chart of programming languages based on career goals"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </p>
      </DocsSection>

      <DocsSection id="section-3" title="Deployment">
        <h3 id="item-3-1" className="text-2xl font-semibold text-secondary mt-8 mb-3">Custom Domains</h3>
        <p>Sometimes we will become lucky enough to deploy with custom domains.</p>
      </DocsSection>

      <DocsSection id="section-4" title="Making your website">
        <h3 id="item-4-1" className="text-2xl font-semibold text-secondary mt-8 mb-3">How to obtain games</h3>
        <ol className="list-decimal list-inside my-4 space-y-2">
          <li>Use GitHub or Unity Play to find open-source games.</li>
          <li>Obtain the game files or use browser source if necessary.</li>
        </ol>
      </DocsSection>

      <DocsSection id="section-5" title="Ext's">
        <p>This shows a collection of different extensions made by contributors for blocking.</p>
      </DocsSection>
      <DocsSection id="section-6" title="ChromeOS Exploits">
        <p>This section contains info on various Chromebook exploits, recovery mode, and developer mode details.</p>
      </DocsSection>
      <DocsSection id="section-9" title="FAQs">
        <p>Frequently asked questions about proxies, adding games, and general support.</p>
      </DocsSection>
    </article>
  );
}
