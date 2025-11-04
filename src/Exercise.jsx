import React from "react";
import PostCard from "./PostCard"; 
import { posts } from "./PostsData";

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-100 p-25">
      <h1 className="text-3xl font-bold text-center text-special-red-2 mb-6">
        Post Cards
      </h1>
      <div className="grid 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-5   
                    gap-4          
                    max-w-full      
                    mx-auto">
        
        {posts.map(post => (
          <PostCard 
            key={post.id} 
            title={post.title} 
            body={post.body} 
          />
        ))}
      </div>
    </div>
  );
}

export default Exercise;