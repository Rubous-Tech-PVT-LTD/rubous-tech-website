import React, { useState } from "react";
import CTASection from "../components/blog/CTAsection";
import KnowledgeHub from "../components/blog/KnowledgeHub";
import BrowseByExpertise from "../components/blog/BrowseExpertise";
import TrendingTopics from "../components/blog/TrendingTopics";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div>
      <KnowledgeHub
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <TrendingTopics searchTerm={searchTerm} activeFilter={activeFilter} />
      <BrowseByExpertise />
      <CTASection />
    </div>
  );
};

export default Blog;