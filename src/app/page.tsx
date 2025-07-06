import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { BookOpen, Network, Cloud, Code, Puzzle, ShieldAlert, CircleHelp } from 'lucide-react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  ariaLabel?: string;
}

const InfoCard = ({ icon, title, description, link, ariaLabel }: CardProps) => (
  <div className="bg-card p-6 rounded-lg shadow-lg border border-fire-medium hover:shadow-primary/50 transition-shadow duration-300 flex flex-col">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-primary/10 rounded-md mr-3 text-primary">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-primary">{title}</h3>
    </div>
    <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
    <Button variant="secondary" asChild className="mt-auto bg-fire-medium hover:bg-fire-bright text-secondary-foreground">
      <Link href={link} aria-label={ariaLabel || title}>Read More</Link>
    </Button>
  </div>
);

const cardData: CardProps[] = [
  {
    icon: <BookOpen size={24} />,
    title: "Introduction",
    description: "This will introduce you to how you will utilize the PyroProgramming Docs. This will show you how to potentially add to these docs or request changes.",
    link: "/docs#section-1",
    ariaLabel: "Card to redirect to section 1, Introduction"
  },
  {
    icon: <Network size={24} />,
    title: "Languages",
    description: "This section will introduce you to various computer languages, each accompanied by tutorials to help you get started.",
    link: "/docs#section-2",
    ariaLabel: "Card to redirect to section 2, Languages"
  },
  {
    icon: <Cloud size={24} />,
    title: "Deployment",
    description: "This part shows how we deploy our websites, as well as what services we use for deployment and how to use each platform.",
    link: "/docs#section-3",
    ariaLabel: "Card to redirect to section 3, Deployment"
  },
  {
    icon: <Code size={24} />,
    title: "Creating a Website",
    description: "This shows how you would make your own website, how to get games, add a proxy, and how to potentially get monetized.",
    link: "/docs#section-4",
    ariaLabel: "Card to redirect to section 4, Making your website"
  },
  {
    icon: <ShieldAlert size={24} />,
    title: "Exploits",
    description: "Community tools and tricks for bypassing filters and restrictions (not endorsed).",
    link: "/docs#section-5",
    ariaLabel: "Card to redirect to section 5, Exploits"
  },
  {
    icon: <CircleHelp size={24} />,
    title: "FAQs",
    description: "This is for frequently asked questions. If you have a question that is not answered here please feel free to reach out to us on our socials or on GitHub.",
    link: "/docs#section-6",
    ariaLabel: "Card to redirect to section 6, FAQs"
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="py-16 md:py-24 text-center bg-gradient-to-br from-fire-dark via-background to-fire-darker rounded-xl shadow-2xl border border-fire-medium mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to <span className="text-primary">PyroProgramming</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          Your ultimate guide to the world of programming, now forged in fire. Explore documentation, tutorials, and insights.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-fire-bright text-primary-foreground">
            <Link href="/docs">
              Explore Docs
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground">
            <a href="https://discord.gg/Gv4rVt2SJp" target="_blank" rel="noopener noreferrer">
              Join our Discord
            </a>
          </Button>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Need Help?</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join our discord if you need help with anything related to the content on this site. If you want to learn about programming, scroll down and explore the docs.
        </p>
        <Button asChild size="lg" className="bg-secondary hover:bg-fire-bright text-secondary-foreground">
          <a href="https://discord.gg/Gv4rVt2SJp/" target="_blank" rel="noopener noreferrer">
            Join our Discord! 🔥
          </a>
        </Button>
      </section>

      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
          Documentation Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <InfoCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              link={card.link}
              ariaLabel={card.ariaLabel}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
