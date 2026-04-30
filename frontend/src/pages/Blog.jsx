import React from "react";
import CTASection from "../components/blog/CTAsection";
import KnowledgeHub from "../components/blog/KnowledgeHub";
import BrowseByExpertise from "../components/blog/BrowseExpertise";
import TrendingTopics from "../components/blog/TrendingTopics";
const Blog=()=>{
    return(
        <div>
            
            <KnowledgeHub />
            <TrendingTopics />
              <BrowseByExpertise />
            <CTASection />
        </div>
    )
}

export default Blog;