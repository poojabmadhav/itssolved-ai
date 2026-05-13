import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const tools = [
    {
      id: 1,
      name: "PennyPincher",
      description: "Privacy-first budgeting. Control your finances without compromising privacy.",
      status: "Live",
      link: "/tools/penny-pincher",
      color: "bg-taupe",
    },
    {
      id: 2,
      name: "Tool 2",
      description: "Coming soon. Something that will change how you work.",
      status: "Coming Soon",
      link: "/tools/tool-2",
      color: "bg-taupe",
    },
    {
      id: 3,
      name: "Tool 3",
      description: "Coming soon. More solutions on the way.",
      status: "Coming Soon",
      link: "/tools/tool-3",
      color: "bg-taupe",
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      {/* Tools Grid */}
      <section id="tools" className="px-4 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-content-primary">Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.link}
              className="group relative overflow-hidden rounded-xl bg-ivory border border-taupe border-opacity-20 hover:border-taupe hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`h-32 ${tool.color}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-content-primary">{tool.name}</h3>
                  <span
                    className={`text-sm font-semibold px-3 py-1 rounded-full ${
                      tool.status === "Live"
                        ? "bg-positive bg-opacity-10 text-positive"
                        : "bg-gray-100 text-content-secondary"
                    }`}
                  >
                    {tool.status}
                  </span>
                </div>
                <p className="text-content-secondary mb-4">{tool.description}</p>
                <div className="flex items-center gap-2 text-secondary font-semibold group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
