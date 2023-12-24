import React from "react";

import { About } from "./About";
import { Categories } from "./Categories";
import { RecentPosts } from "./RecentPosts";

export const RightSidebar: React.FC = () => {
  return (
    <div className="hidden xl:block">
      <div className="sticky top-0 flex flex-col gap-10">
        <About />
        <RecentPosts />
        <Categories />
      </div>
    </div>
  );
};
