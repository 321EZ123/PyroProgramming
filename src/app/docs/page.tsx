import type React from 'react';

const DocsSection: React.FC<{ id: string; title: string; lastUpdated?: string; children: React.ReactNode }> = ({ id, title, lastUpdated, children }) => (
  <section id={id} className="mb-16 scroll-mt-20">
    <div className="flex justify-between items-center mb-4 pb-2 border-b border-fire-darker">
      <h2 className="text-4xl font-bold text-primary">{title}</h2>
      {lastUpdated && <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>}
    </div>
    <div className="prose prose-invert max-w-none prose-headings:text-secondary prose-a:text-accent hover:prose-a:text-fire-bright prose-strong:text-fire-medium prose-blockquote:border-fire-medium prose-code:text-fire-yellow prose-code:bg-card prose-code:p-1 prose-code:rounded-sm">
      {children}
    </div>
  </section>
);

const Table: React.FC<{ headers: string[]; rows: string[][] }> = ({ headers, rows }) => (
  <div className="overflow-x-auto my-6">
    <table className="min-w-full divide-y divide-fire-darker border border-fire-darker rounded-md">
      <thead className="bg-card">
        <tr>
          {headers.map((header) => (
            <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-background divide-y divide-fire-darker">
        {rows.map((row, rowIndex) => (
          <tr key={`row-${rowIndex}`}>
            {row.map((cell, cellIndex) => (
              <td key={`cell-${rowIndex}-${cellIndex}`} className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
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

        <h3 id="item-1-1" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">About us</h3>
        <p>Helix is a group that mainly focuses giving users unrestricted access to the internet, By using proxies or bypassing content filters, Helix offers a platform where users can enjoy various games and services directly in their browsers without the need for downloads. Our websites are particularly popular among students and employees looking for a way to access the web unrestricted. They feature a mix of casual, action, and puzzle games, with a simple, easy-to-navigate interface.</p>

        <h3 id="item-1-2" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Our Services</h3>
        <p>Helix has several other projects aimed at improving user experiences. Horizon will be a downloadable site that helps users access online tools easily, inspired by Stripe's clean design. Hyperion will provide important information in a simple, single HTML file for quick access. Cypher is designed to be a gaming site with manually ported games, focusing on an easy user experience and using UI elements from Tricks Side Nav and Linear Rebuild. There are also some undecided projects like Sentinel, a platform for streaming and reviewing films, CalamityOS, which will look like an operating system with gaming features, and Meteor, a forum where users can discuss different topics.</p>
        <p>For more information, join <a href="https://discord.gg/Gv4rVt2SJp" target="_blank" rel="noopener noreferrer">our discord4</a></p>
       
        <h3 id="item-1-3" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Features</h3>
        <p>Our services have a variety of features. These include:</p>
        <ul className="list-disc list-inside my-4 space-y-1">
          <li>Unblocked games</li>
          <li>Proxies</li>
          <li>Advanced cloaking</li>
          <li>AI tools</li>
        </ul>
        <p>Using these services allows you to access the web without restrictions and enjoy a wide range of games and content. Here are some benefits to a proxy:</p>
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
        <h3 id="item-2-1" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">About Computer Languages</h3>
        <h4 className="text-xl font-semibold text-fire-medium mt-6 mb-2 scroll-mt-20">What are Computer Languages?</h4>
        <p>Computer languages are ways to communicate with computers using a set of rules and instructions. They help programmers create software, run scripts, and process data. There are many types of computer languages, such as high-level languages like Python and Java, which are easier to use, and low-level languages like Assembly and C, which give more control over hardware. Each language has its own structure and meaning, designed for different tasks, helping developers build and work with technology effectively.</p>
        <h4 className="text-xl font-semibold text-fire-medium mt-6 mb-2 scroll-mt-20">Types of Languages</h4>
        <p>There are different types of computer languages, each made for specific tasks. High-level languages, like Python and Java, are easy to use and help programmers write code more simply. Scripting languages, such as JavaScript and Ruby, are often used to automate tasks and improve websites. Low-level languages, like C and Assembly, give more control over computer hardware and are used for system programming. Markup languages, like HTML and XML, help organize and format text, especially for web pages. Finally, domain-specific languages, like SQL for managing databases, are designed for specific jobs, making them very useful in those areas.</p>
        
        <h4 className="text-xl font-semibold text-fire-medium mt-6 mb-2 scroll-mt-20">What Language Should I Learn?</h4>
        <p>
    Here is an image showing which programming language to learn based on your career goals:
    <img src="https://s3.us-east-1.amazonaws.com/fsa2-assets/assets/New-blog/Which-Programming-Language-to-Learn-Based-on-Your-Career-Goals.jpg" alt="Which Programming Language to Learn" style="max-width: 100%; height: auto;">
</p>
        <h3 id="item-2-3" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Tutorials</h3>
        <p>Insert link to language tutorials page here</p>
      </DocsSection>

      <DocsSection id="section-3" title="Deployment">
        <h3 id="item-3-1" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Custom Domains</h3>
        <p>Sometimes we will become lucky enough to deploy with custom domains. Custom domains can be deployed with most services as long as you have the necessary DNS records. The only problem with custom domains is that they can be expensive. It is also possible to "bring your own domain" (BYOD) for PeteZah. This allows you to buy your own domain and configure it with Fastly to redirect to PeteZah.</p>
        <ol className="list-decimal list-inside my-4 space-y-2">
          <li>Buy a domain from a provider like <a href="https://www.namecheap.com/" target="_blank" rel="noopener noreferrer">Namecheap</a>.</li>
          <li>Follow Fastly configuration: clone a version, add your domain, configure TLS, and update DNS records.</li>
          <li>Wait for propagation.</li>
        </ol>
        <h3 id="item-3-2" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Fastly</h3>
        <p>Fastly allows you to have a website that will imitate a different website. You can create services, set domains, and point to PeteZahGames.com.</p>
        <h3 id="item-3-3" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Firebase (web.app)</h3>
        <p>Firebase hosting is unblocked for Lightspeed. Use the Firebase console to create a project, enable hosting, and deploy with <code>firebase deploy</code>.</p>
        <h3 id="item-3-4" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Cloudflare (pages.dev)</h3>
        <p>Cloudflare Pages offers static hosting. Connect your GitHub repo, configure build command <code>npm run build</code>, and deploy.</p>
      </DocsSection>

      <DocsSection id="section-4" title="Making your website">
        <h3 id="item-4-1" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">How to obtain games</h3>
        <ol className="list-decimal list-inside my-4 space-y-2">
          <li>Use GitHub or Unity Play to find open-source games and check their licenses.</li>
          <li>Obtain the game files or use browser source if necessary.</li>
        </ol>
        <h3 id="item-4-2" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">What to learn</h3>
        <p>Key essentials: JavaScript, HTML, CSS. Use resources like Codecademy, YouTube, or AI assistance.</p>
        <h3 id="item-4-3" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">How to deploy your app</h3>
        <p>Free options include Netlify, Cloudflare, Firebase, GitHub Pages, Replit, Glitch, etc. Each has pros and cons.</p>
        <h3 id="item-4-4" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Legal</h3>
        <p>Always review game licenses to ensure compliance.</p>
        <h3 id="item-4-5" className="text-2xl font-semibold text-secondary mt-8 mb-3 scroll-mt-20">Potential Monetization</h3>
        <p>Monetize via ads, donations, or sponsorships.</p>
      </DocsSection>

      <DocsSection id="section-5" title="Ext's">
        <p>This shows a collection of different extensions made by contributors for blocking. Visit each GitHub repository for details.</p>
      </DocsSection>
      <DocsSection id="section-6" title="ChromeOS Exploits">
        <p>This section contains info on various Chromebook exploits, recovery mode, and developer mode details.</p>
      </DocsSection>
      <DocsSection id="section-8" title="Extension Blockers">
        <p>Alternate methods to block extensions long-term, requiring advanced steps.</p>
      </DocsSection>
      <DocsSection id="section-9" title="FAQs">
        <p>Frequently asked questions about proxies, adding games, and general support.</p>
      </DocsSection>
    </article>
  );
}
