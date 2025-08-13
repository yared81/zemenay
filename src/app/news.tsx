import React from 'react';

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Latest <span className="text-primary">News</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with the latest developments and announcements from Zemenay.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
