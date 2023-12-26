// pages/Home.tsx

import Advertisement from "@/components/Advertisement/Advertisement";
import HeroSection from "@/components/HomePage/HeroSection";
import TrendingPost from "@/components/HomePage/TrendingPost";
import React from "react";
import WeeklyPost from "@/components/HomePage/WeeklyPost";
import EditorPage from "@/components/HomePage/Editor";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrendingPost />
      <EditorPage />
      <WeeklyPost />
      <Advertisement />
    </div>
  );
};

export default Home;
