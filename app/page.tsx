import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Home() {
  const tools = [
    {
      id: 1,
      name: "PennyPincher",
      description: "Track where your pennies roll while your data stays on your device.",
      status: "Live",
      link: "/tools/penny-pincher",
      color: "bg-[#6C6661]",
    },
    {
      id: 2,
      name: "Tool 2",
      description: "Coming soon. Something that will change how you work.",
      status: "Coming Soon",
      link: "/tools/tool-2",
      color: "bg-[#6C6661]",
    },
    {
      id: 3,
      name: "Tool 3",
      description: "Coming soon. More solutions on the way.",
      status: "Coming Soon",
      link: "/tools/tool-3",
      color: "bg-[#6C6661]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#B9A89B]">
      {/* Tools Grid */}
      <section id="tools" className="px-4 py-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool) =>
            tool.id === 1 ? (
              <a
                href="https://penny-pincher-app.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl bg-[#EFEBE4] border border-[#6C6661] border-opacity-20 hover:border-[#6C6661] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col block"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-content-primary mb-2">{tool.name}</h3>
                    </div>
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-3xl flex-shrink-0 ${tool.color}`}>
                      {tool.id === 1 ? "🏦" : tool.id === 2 ? "🔮" : "🎯"}
                    </div>
                  </div>
                  <p className="text-content-secondary mb-6 flex-1">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-secondary font-semibold group-hover:translate-x-1 transition-transform">
                      Open in New Window <ExternalLink className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${
                        tool.status === "Live"
                          ? "bg-positive bg-opacity-10 text-positive"
                          : "bg-gray-200 text-content-secondary"
                      }`}
                    >
                      {tool.status}
                    </span>
                  </div>
                </div>
              </a>
            ) : (
              <Link
                key={tool.id}
                href={tool.link}
                className="group relative overflow-hidden rounded-xl bg-[#EFEBE4] border border-[#6C6661] border-opacity-20 hover:border-[#6C6661] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-content-primary mb-2">{tool.name}</h3>
                    </div>
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-3xl flex-shrink-0 ${tool.color}`}>
                      {tool.id === 1 ? "🏦" : tool.id === 2 ? "🔮" : "🎯"}
                    </div>
                  </div>
                  <p className="text-content-secondary mb-6 flex-1">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-secondary font-semibold group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${
                        tool.status === "Live"
                          ? "bg-positive bg-opacity-10 text-positive"
                          : "bg-gray-200 text-content-secondary"
                      }`}
                    >
                      {tool.status}
                    </span>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </section>
    </div>
  );
}
