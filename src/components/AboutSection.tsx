import React from 'react';
import inspirationBook from "@/assets/about-img.jpg";

const AboutSection = () => (
  <section className="py-12 px-4 mx-auto about-section">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-[1400px] w-full mx-auto bg-white dark:bg-card rounded-2xl shadow-lg p-4 md:p-8 animate-slide-up about-section">
      <div className="flex justify-center mb-6 md:mb-0">
          <img
            src={inspirationBook}
            alt="About BookWebsite"
            className="about-img rounded-xl shadow-xl animate-zoom w-full max-w-full md:max-w-[700px] h-[220px] md:h-[400px] object-cover"
          />
      </div>
      <div className="flex flex-col justify-center w-full about-description">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 text-gradient animate-fade-in">About BookWebsite</h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed animate-fade-in">
          Welcome to <span className="font-semibold text-primary">BookWebsite</span>, your ultimate destination for discovering, exploring, and sharing the world of books. Whether you are a passionate reader, a curious explorer, or someone looking for your next great read, our platform is designed to inspire and connect book lovers everywhere.<br /><br />
          Dive into curated recommendations, insightful reviews, and a vibrant community that celebrates the joy of reading. Join us on a journey through stories, knowledge, and imagination—because every book opens a new world.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
