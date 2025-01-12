import React from "react";
import ProjectSection from "./AchievementsSection/page";

const Achievements = () => {
  return (
    <div className="flex items-center h-full justify-between gap-5">
      <p className="text-[5rem] flexx-1">Evenets and Achievements</p>
      <div className="flex-3">
        <ProjectSection />
      </div>
    </div>
  );
};

export default Achievements;
