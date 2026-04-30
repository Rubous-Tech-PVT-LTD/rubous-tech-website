import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import heroImage from "../../assets/hero.png";

export default function KnowledgeHub() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["AI Automation", "Productivity", "SaaS", "Workflow Systems", "Business Growth"];

  const featuredArticle = {
    tag: "Featured",
    category: "Enterprise AI",
    title: "The 2024 Blueprint for Autonomous Enterprise Operations",
    description:
      "How Fortune 500 companies are leveraging generative AI agents to automate up to 70% of repetitive workflows across finance, HR, and customer success.",
    author: "Dr. Julian Vance",
    date: "March 14, 2024",
  };

  return (
    <div className="overflow-hidden bg-[#f8f9ff] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full bg-[#dbe6ff] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1f4ed8]">
            Knowledge Hub
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-800 sm:text-5xl lg:text-6xl">
            Insights on AI Automation &amp; Business Growth
          </h1>

          <p className="mx-auto mt-5 max-w-md text-gray-500">
            Deep dives into automation, AI workflows, and the future of SaaS productivity.
            Orchestrated for forward-thinking enterprises.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="relative w-full max-w-[640px]">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
              <input
                type="text"
                placeholder="Search insights, guides, and trends..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-14 w-full rounded-full border border-white/80 bg-white pl-11 pr-5 text-sm text-[#12213a] shadow-[0_18px_40px_rgba(16,24,40,0.08)] outline-none transition placeholder:text-[#98A2B3] focus:border-[#bfd0ff] focus:ring-4 focus:ring-[#dbe6ff]"
              />
            </div>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 sm:px-5 sm:text-sm ${
                  activeFilter === filter
                    ? "bg-[#1f4ed8] text-white shadow-[0_10px_25px_rgba(31,78,216,0.22)]"
                    : "bg-[#dbe6ff] text-[#667085] hover:bg-[#cfdcff] hover:text-[#12213a]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        <div className="mx-auto mt-12 mb-12 max-w-6xl overflow-hidden rounded-[22px] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] ring-1 ring-slate-100">
          <div className="grid min-h-[520px] md:grid-cols-[1.05fr_0.95fr]">
            <div className="min-h-[320px] overflow-hidden bg-[#050d15]">
              <img
                src={heroImage}
                alt="AI automation dashboard"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex h-full flex-col justify-between px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex rounded-[4px] bg-[#dbe6ff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1f4ed8]">
                    {featuredArticle.tag}
                  </span>
                  <span className="text-xs font-medium text-[#98A2B3] sm:text-sm">
                    {featuredArticle.category}
                  </span>
                </div>

                <h2 className="mt-4 max-w-[16ch] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[#12213a]">
                  {featuredArticle.title}
                </h2>

                <p className="mt-5 max-w-md text-gray-500">
                  {featuredArticle.description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-[#1f2937] ring-2 ring-white">
                    <img
                      src="https://i.pravatar.cc/80?img=12"
                      alt={featuredArticle.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#12213a]">
                      {featuredArticle.author}
                    </div>
                    <div className="text-xs text-[#98A2B3]">{featuredArticle.date}</div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1f4ed8] transition hover:text-[#153cb3]"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}