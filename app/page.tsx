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
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Tools Grid */}
      <section id="tools" className="px-4 py-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool) =>
            tool.id === 1 ? (
              <a
                href="https://penny-pincher-eight.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl bg-white border border-[#E5E7EB] hover:border-[#F97316] hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="border-l-4 border-[#F97316] px-6 py-4 flex items-center justify-between bg-white">
                  <h3 className="text-2xl font-bold text-[#111827]">{tool.name}</h3>
                  <div className="text-4xl">💰</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[#111827] mb-6 flex-1">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#F97316] font-semibold group-hover:translate-x-1 transition-transform">
                      Open in New Window <ExternalLink className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap bg-[#10B981] text-white">
                      {tool.status}
                    </span>
                  </div>
                </div>
              </a>
            ) : (
              <Link
                key={tool.id}
                href={tool.link}
                className="group relative overflow-hidden rounded-xl bg-white border border-[#E5E7EB] hover:border-[#F97316] hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="border-l-4 border-[#9CA3AF] px-6 py-4 flex items-center justify-between bg-white">
                  <h3 className="text-2xl font-bold text-[#111827]">{tool.name}</h3>
                  <div className="text-4xl">{tool.id === 2 ? "🔮" : "🎯"}</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[#111827] mb-6 flex-1">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#6B7280] font-semibold group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap bg-[#E5E7EB] text-[#6B7280]">
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
