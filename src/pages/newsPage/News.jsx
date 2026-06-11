import React, { useState } from 'react';
import NewsHero from '../../component/insights/news/NewsHero';
import NewsGrid from '../../component/insights/news/NewsGrid';

function News() {
  const [showHero, setShowHero] = useState(true);

  return (
    <div>
      {showHero && <NewsHero />}
      <NewsGrid
        onDetailOpen={() => setShowHero(false)}
        onDetailClose={() => setShowHero(true)}
      />
    </div>
  );
}

export default News;