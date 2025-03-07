import React from "react";
import ProjectSection from "./AchievementsSection/page";

const Achievements = () => {
  return (
    <div className="flex lgs:flex-col items-center h-full justify-between gap-5">
      <p className="text-[5rem] px-[6rem] sms:px-[1rem] sms:text-[4rem] xss:text-[3rem] sms:text-center flexx-1">
        Evenets and Achievements
      </p>
      <div className="flex-3">
        <ProjectSection />
      </div>
    </div>
  );
};

export default Achievements;
