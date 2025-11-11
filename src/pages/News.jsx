import { useState } from 'react';

const NewsPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Sample news data (would typically come from CMS via props or API)
  const newsData = [
    {
      id: 1,
      title: "New Breakthrough in Renewable Energy Technology",
      excerpt: "Scientists have developed a new solar panel technology that could double energy efficiency while reducing costs significantly.",
      content: "A team of researchers from leading universities has announced a breakthrough in solar energy technology. The new photovoltaic cells use a novel material that captures a broader spectrum of sunlight, dramatically increasing energy conversion efficiency. Early tests show these panels could generate up to 45% more electricity than current commercial models while being 30% cheaper to manufacture. This development could accelerate the global transition to renewable energy sources and help countries meet their climate targets. The technology is expected to reach the market within two years after further testing and scaling.",
      image: "/images/news-01.jpg",
      date: "November 03, 2025",
      category: "Technology"
    },
    {
      id: 2,
      title: "Global Markets Show Strong Recovery Signs",
      excerpt: "Financial markets worldwide are showing positive trends as economic indicators point to sustained recovery.",
      content: "Global financial markets have demonstrated remarkable resilience in the face of recent economic challenges, with major indices posting consistent gains over the past quarter. Analysts attribute this positive trend to several factors, including stabilizing inflation rates, robust consumer spending, and strategic government interventions. The technology sector has led the recovery, with AI and renewable energy companies showing particularly strong performance. Economists are cautiously optimistic about continued growth, though they warn of potential volatility due to geopolitical tensions and supply chain uncertainties.",
      image: "/images/news-02.jpg",
      date: "November 10, 2025",
      category: "Business"
    },
    {
      id: 3,
      title: "Major Sports League Announces Expansion Teams",
      excerpt: "The premier sports league has confirmed the addition of two new franchises starting next season.",
      content: "In an exciting development for sports fans, the league commissioner officially announced the addition of two expansion teams that will begin play in the upcoming season. The new franchises, based in rapidly growing metropolitan areas, represent the league's strategic effort to tap into new markets and broaden its fan base. Team ownership groups include prominent business leaders and former athletes who have committed significant resources to building competitive rosters and state-of-the-art facilities.",
      image: "/images/news-03.webp",
      date: "November 11, 2025",
      category: "Sports"
    },
    {
      id: 4,
      title: "Breakthrough Medical Treatment Shows Promise",
      excerpt: "Clinical trials for a new therapy have shown remarkable results in treating a previously incurable condition.",
      content: "Medical researchers have reported groundbreaking results from Phase 3 clinical trials of a novel treatment for a chronic autoimmune condition. The therapy, which uses a unique approach to modulate the immune system, achieved remission in 78% of patients who had not responded to existing treatments. These results far exceed those of any previous intervention for this condition. The treatment's developers are now seeking regulatory approval, with a decision expected within six months.",
      image: "/images/news-04.avif",
      date: "November 04, 2025",
      category: "Health"
    },
    {
      id: 5,
      title: "Tech Giant Unveils Next-Generation Devices",
      excerpt: "The leading technology company has announced its latest product lineup featuring innovative AI capabilities.",
      content: "At its annual developer conference, the tech giant unveiled a comprehensive suite of new devices and software updates that integrate advanced artificial intelligence throughout the user experience. The flagship product features a revolutionary neural processing unit that enables real-time language translation, enhanced computational photography, and predictive task management. Company executives demonstrated how the AI system learns user preferences over time to automate routine tasks and provide personalized recommendations.",
      image: "/images/news-05.jpg",
      date: "November 09, 2025",
      category: "Technology"
    },
    {
      id: 6,
      title: "Company Announces Major Expansion and 200+ New Job Opportunities",
      excerpt: "Significant growth initiative creates over 200 new positions across multiple departments with remote work options available.",
      content: "In an exciting development for job seekers and the local economy, our company has announced a major expansion plan that will create over 200 new positions in the coming months. The hiring initiative spans across technology, marketing, customer success, and operations departments, with many roles offering flexible remote work options. The expansion is driven by increased market demand and our commitment to innovation in the digital space. We're particularly focused on bringing in diverse talent and providing comprehensive training programs for career growth. Applications for the first wave of 75 positions will open next week, featuring competitive benefits packages and professional development opportunities.",
      image: "/images/news-06.jpeg",
      date: "November 13, 2025",
      category: "Careers"
    }
  ];

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackClick = () => {
    setSelectedArticle(null);
  };

  const handleShare = (platform) => {
    if (selectedArticle) {
      const text = encodeURIComponent(selectedArticle.title);
      const url = encodeURIComponent(window.location.href);
      
      const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
      };

      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="news-page">
      {/* Page Header */}
      <div className="transition-effect">
         
      <section className="page-header">
        <div className="container">
          <h1>Latest News & Updates</h1>
          <p>Stay informed with our latest articles and announcements!</p>
        </div>
      </section>
      </div>

      <div className="container-01">
        {/* Article Detail View */}
        {selectedArticle && (
          <ArticleDetail 
            article={selectedArticle}
            onBack={handleBackClick}
            onShare={handleShare}
          />
        )}

        {/* News Grid */}
        {!selectedArticle && (
          <div className="news-grid">
            {newsData.map(article => (
              <NewsCard
                key={article.id}
                article={article}
                onClick={() => handleArticleClick(article)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// News Card Component
const NewsCard = ({ article, onClick }) => {
  return (
    <div className="news-card" onClick={onClick}>
      <img src={article.image} alt={article.title} className="card-image" />
      <div className="card-content">
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <div className="card-meta">
          <span><i className="far fa-calendar-alt"></i> {article.date}</span>
          <span>{article.category}</span>
        </div>
      </div>
    </div>
  );
};

// Article Detail Component
const ArticleDetail = ({ article, onBack, onShare }) => {
  return (
    <div className="article-detail">
      <div className="article-header">
        <h2>{article.title}</h2>
        <div className="article-meta">
          <span><i className="far fa-calendar-alt"></i> {article.date}</span>
          <span><i className="far fa-folder"></i> {article.category}</span>
        </div>
      </div>
      
      <img src={article.image} alt={article.title} className="article-image" />
      
      <div className="article-content">
        <p>{article.content}</p>
      </div>
      
      <div className="share-buttons">
        <button 
          className="share-btn twitter"
          onClick={() => onShare('twitter')}
        >
          <i className="fab fa-twitter"></i> Share on Twitter
        </button>
        <button 
          className="share-btn linkedin"
          onClick={() => onShare('linkedin')}
        >
          <i className="fab fa-linkedin-in"></i> Share on LinkedIn
        </button>
      </div>
      
      <button className="back-btn" onClick={onBack}>
        <i className="fas fa-arrow-left"></i> Back to News
      </button>
    </div>
  );
};

export default NewsPage;