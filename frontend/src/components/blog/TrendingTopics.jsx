import { ArrowRight, ArrowLeftRight, Bot, Shield, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function TrendingTopics({ searchTerm = "", activeFilter = "All" }) {
  const [articles, setArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [showingAll, setShowingAll] = useState(false);
  const [totalArticles, setTotalArticles] = useState(0);

  const topics = [
    { label: "Scale", name: "SaaS Growth", icon: TrendingUp },
    { label: "Flow", name: "CRM Sync", icon: ArrowLeftRight },
    { label: "Bot", name: "Auto-Reply", icon: Bot },
    { label: "Data", name: "LLM Security", icon: Shield },
  ];

  // Fetch initial 3 articles
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/blogs');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          setArticles(data.data);
          setTotalArticles(data.total);
        } else {
          setError('Failed to fetch articles');
        }
      } catch (err) {
        setError('Error fetching articles');
        console.error('Error fetching articles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Load all articles
  const loadAllArticles = async () => {
    if (loadingMore || showingAll) return;
    
    try {
      setLoadingMore(true);
      const response = await fetch('/api/blogs?all=true');
      const data = await response.json();
      
      if (data.success) {
        setAllArticles(data.data);
        setShowingAll(true);
      } else {
        setError('Failed to load all articles');
      }
    } catch (err) {
      setError('Error loading all articles');
      console.error('Error loading all articles:', err);
    } finally {
      setLoadingMore(false);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    });
  };

  // Display articles (initial 3 or all), then apply search and category filters
  const baseArticles = showingAll ? allArticles : articles;
  const displayArticles = baseArticles.filter((article) => {
    const matchesFilter = activeFilter === "All" || article.category === activeFilter;
    const lowerSearch = searchTerm.toLowerCase();
    const matchesSearch =
      !lowerSearch ||
      article.title.toLowerCase().includes(lowerSearch) ||
      article.description.toLowerCase().includes(lowerSearch) ||
      article.category.toLowerCase().includes(lowerSearch) ||
      article.tag.toLowerCase().includes(lowerSearch);
    return matchesFilter && matchesSearch;
  });

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

        {/* Loading State */}
        {loading && (
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-[205px] bg-gray-200 rounded-t-[18px]" />
                <div className="bg-white p-5 rounded-b-[18px] shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                  <div className="h-4 bg-gray-200 rounded w-20 mb-3" />
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-5/6 mb-4" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 bg-gray-200 rounded-full" />
                      <div>
                        <div className="h-4 bg-gray-200 rounded w-20 mb-1" />
                        <div className="h-3 bg-gray-200 rounded w-16" />
                      </div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="mt-10 text-center">
            <div className="text-red-500 mb-4">{error}</div>
            <button 
              onClick={() => window.location.reload()}
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Articles Grid */}
        {!loading && !error && (
          <>
            {displayArticles.length === 0 ? (
              <div className="mt-10 text-center py-12">
                <div className="text-gray-500 text-lg mb-4">No articles available at the moment.</div>
                <div className="text-gray-400 text-sm">Please check back later for new content.</div>
              </div>
            ) : (
              <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {displayArticles.map((article) => (
                  <article
                    key={article._id || article.id}
                    className="overflow-hidden rounded-[18px] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] ring-1 ring-[#e4eaf7]"
                  >
                    <div className="relative h-[205px] overflow-hidden">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="h-full w-full object-cover"
                      />
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
                            src={article.author.avatar}
                            alt={article.author.name}
                            className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
                          />
                          <div>
                            <div className="text-sm font-semibold text-[#12213a]">
                              {article.author.name}
                            </div>
                            <div className="text-xs text-[#98A2B3]">{formatDate(article.publishedAt)}</div>
                          </div>
                        </div>

                        <a href={`/blog/${article.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1f4ed8] transition hover:text-[#153cb3]">
                          Read More
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}

        {/* Load More Button */}
        {!loading && !error && !showingAll && totalArticles > 3 && (
          <div className="mt-8 flex justify-center">
            <button 
              onClick={loadAllArticles}
              disabled={loadingMore}
              className="rounded-lg bg-[#dbe6ff] px-6 py-3 text-sm font-semibold text-[#1f4ed8] shadow-[0_8px_20px_rgba(31,78,216,0.12)] transition hover:bg-[#cfdcff] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loadingMore ? 'Loading...' : 'Load More Articles'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}