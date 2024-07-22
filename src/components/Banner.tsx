import React from "react";
import ChevronRight from "@/assets/icons/chevron_black.svg";

const Banner = () => {
  return (
    <div className="h-banner-height fixed left-0 top-0 z-30 flex w-full items-center justify-center gap-2 bg-[linear-gradient(to_right,#FEECFF,#FECAFF_12%,#FEB5FF_27%,#FFDBE7_40%,#FFF4D6_49%,#F3FCD7_59%,#D2F5EE_71%,#C3EFFF_84%,#FBEFFF)] text-sm sm:relative">
      <p className="hidden sm:inline">
        This page is included in a free SaaS Website Kit.
      </p>
      <div className="flex items-center gap-2 text-black underline underline-offset-4">
        <a href="#">View the complete Kit</a>
        <ChevronRight />
      </div>
    </div>
  );
};

export default Banner;
