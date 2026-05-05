import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2, ArrowRight } from 'lucide-react';

const BlogArticle = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`/api/blogs?slug=${slug}`);
        const data = await response.json();
        
        if (data.success) {
          setArticle(data.data);
        } else {
          setError('Article not found');
        }
      } catch (err) {
        setError('Error fetching article');
        console.error('Error fetching article:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  useEffect(() => {
    const fetchRelatedArticles = async () => {
      if (!article) return;
      
      try {
        setRelatedLoading(true);
        const response = await fetch(`/api/blogs?slug=${slug}&related=true`);
        const data = await response.json();
        
        if (data.success) {
          setRelatedArticles(data.data);
        }
      } catch (err) {
        console.error('Error fetching related articles:', err);
      } finally {
        setRelatedLoading(false);
      }
    };

    if (article) {
      fetchRelatedArticles();
    }
  }, [article, slug]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };


  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Blog */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Featured Image */}
          <div className="h-64 md:h-96 bg-gray-200">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 md:p-12">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{article.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              {/* Share Button */}
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {article.title}
              </h1>
              
              <div className="text-gray-600 text-lg mb-8">
                {article.description}
              </div>

              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-code:text-blue-600 prose-pre:bg-gray-100 prose-blockquote:border-l-blue-600 prose-blockquote:text-gray-600 prose-ul:text-gray-700 prose-ol:text-gray-700"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Article Actions */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
              {/* Article Tags */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600">Tags:</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {article.tag}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-4">
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{article.author.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Author and industry expert sharing insights on {article.category.toLowerCase()} and {article.tag.toLowerCase()}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedLoading ? (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading related articles...</p>
              </div>
            </div>
          </div>
        ) : relatedArticles.length > 0 ? (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((relatedArticle) => (
                <article key={relatedArticle.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gray-200">
                    <img 
                      src={relatedArticle.imageUrl} 
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {relatedArticle.tag}
                      </span>
                      <span className="text-xs text-gray-500">{relatedArticle.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedArticle.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img 
                          src={relatedArticle.author.avatar} 
                          alt={relatedArticle.author.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-xs text-gray-600">{relatedArticle.author.name}</span>
                      </div>
                      <Link 
                        to={`/blog/${relatedArticle.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BlogArticle;
