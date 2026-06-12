import React, { useState } from 'react';
import BlogHeader from '../../component/insights/blog/BlogHeader';
import BlogGrid from '../../component/insights/blog/BlogGrid';

function Blog() {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <div>
      {showHeader && <BlogHeader />}
      <BlogGrid
        onDetailOpen={() => setShowHeader(false)}
        onDetailClose={() => setShowHeader(true)}
      />
    </div>
  );
}

export default Blog;