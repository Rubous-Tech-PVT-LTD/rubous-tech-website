import { ArrowRight, ArrowLeftRight, Bot, Shield, TrendingUp } from "lucide-react";

export default function TrendingTopics() {
  const topics = [
    { label: "Scale", name: "SaaS Growth", icon: TrendingUp },
    { label: "Flow", name: "CRM Sync", icon: ArrowLeftRight },
    { label: "Bot", name: "Auto-Reply", icon: Bot },
    { label: "Data", name: "LLM Security", icon: Shield },
  ];

  const articles = [
    {
      tag: "SaaS",
      category: "Automation",
      title: "Reducing SaaS Churn with Predictive AI Models",
      description:
        "Discover how machine learning can identify at-risk customers before they hit the cancel button.",
      author: "Sarah Chen",
      date: "Mar 10",
      readTime: "8 min read",
      imageClass:
        "bg-[radial-gradient(circle_at_50%_45%,rgba(55,210,255,0.52)_0%,rgba(13,146,205,0.28)_16%,rgba(10,42,61,0.82)_42%,rgba(6,18,28,1)_72%)]",
      artClass:
        "bg-[linear-gradient(180deg,rgba(40,210,255,0.15)_0%,rgba(40,210,255,0)_100%)]",
      avatar: "https://i.pravatar.cc/80?img=32",
    },
    {
      tag: "Workflow",
      category: "Productivity",
      title: "Mastering WhatsApp API for Global Support",
      description:
        "Integrate your CRM directly into customer conversations for a seamless support experience.",
      author: "Marcus Thorne",
      date: "Mar 08",
      readTime: "12 min read",
      imageClass:
        "bg-[radial-gradient(circle_at_50%_35%,rgba(46,255,255,0.25)_0%,rgba(10,124,137,0.34)_16%,rgba(6,62,70,0.85)_46%,rgba(3,22,27,1)_78%)]",
      artClass:
        "bg-[linear-gradient(180deg,rgba(7,209,230,0.16)_0%,rgba(7,209,230,0)_100%)]",
      avatar: "https://i.pravatar.cc/80?img=56",
    },
    {
      tag: "Security",
      category: "Compliance",
      title: "The Ethics of Automated Decision Making",
      description:
        "Ensuring transparency and fairness in AI-driven HR and recruitment processes.",
      author: "Elena Rodriguez",
      date: "Mar 05",
      readTime: "6 min read",
      imageClass:
        "bg-[linear-gradient(180deg,rgba(15,80,15,0.15)_0%,rgba(0,120,0,0.72)_10%,rgba(0,44,0,0.96)_44%,rgba(0,16,0,1)_100%)]",
      artClass:
        "bg-[repeating-linear-gradient(90deg,rgba(36,217,42,0.7)_0,rgba(36,217,42,0.7)_1px,transparent_1px,transparent_7px)] opacity-55",
      avatar: "https://i.pravatar.cc/80?img=47",
    },
  ];

  return (
    <section className="bg-[#f7f9ff] py-12 sm:py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-2 text-[#12213a]">
          <TrendingUp className="h-4 w-4 -rotate-12 text-[#1f4ed8]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-800">
            Trending Topics
          </h2>
        </div>

        <p className="mt-5 max-w-md text-gray-500">
          Latest insights and deep-dives into automation, SaaS, and digital transformation.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <button
                key={topic.name}
                className="group flex items-start justify-between rounded-xl bg-[#eaf1ff] px-4 py-4 text-left shadow-[0_1px_0_rgba(15,23,42,0.02)] transition hover:-translate-y-0.5 hover:bg-[#e4edff] hover:shadow-[0_12px_30px_rgba(31,78,216,0.08)]"
              >
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4f77d6]">
                    {topic.label}
                  </div>
                  <div className="mt-1 text-base font-bold tracking-[-0.02em] text-[#12213a]">
                    {topic.name}
                  </div>
                </div>

                <div className="flex h-7 w-7 items-center justify-center rounded-full text-[#9fb4eb] transition group-hover:text-[#6a8fe8]">
                  <Icon className="h-5 w-5" />
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="overflow-hidden rounded-[18px] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] ring-1 ring-[#e4eaf7]"
            >
              <div className={`relative h-[205px] overflow-hidden ${article.imageClass}`}>
                <div className={`absolute inset-0 ${article.artClass}`} />
                <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#4f77d6] shadow-sm">
                  {article.tag}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-xl" />
              </div>

              <div className="px-5 pb-5 pt-4 sm:px-5">
                <div className="text-xs font-semibold text-[#98A2B3]">
                  {article.readTime} • {article.category}
                </div>

                <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.03em] text-[#12213a]">
                  {article.title}
                </h3>

                <p className="mt-5 min-h-[48px] max-w-md text-gray-500">
                  {article.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 pt-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={article.avatar}
                      alt={article.author}
                      className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
                    />
                    <div>
                      <div className="text-sm font-semibold text-[#12213a]">
                        {article.author}
                      </div>
                      <div className="text-xs text-[#98A2B3]">{article.date}</div>
                    </div>
                  </div>

                  <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1f4ed8] transition hover:text-[#153cb3]">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="rounded-lg bg-[#dbe6ff] px-6 py-3 text-sm font-semibold text-[#1f4ed8] shadow-[0_8px_20px_rgba(31,78,216,0.12)] transition hover:bg-[#cfdcff]">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
}