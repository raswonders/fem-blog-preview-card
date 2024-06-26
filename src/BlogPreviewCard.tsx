import avatar from "./assets/images/image-avatar.webp";
import ilustration from "./assets/images/illustration-article.svg";
import { useState } from "react";

export function BlogPreviewCard() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`max-w-80 p-6 sm:max-w-96 flex flex-col items-start gap-6 border border-black rounded-[20px] bg-pureWhite ${
        isActive ? "shadow-customMd cursor-pointer" : "shadow-customSm"
      } text-black`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <img className="rounded-[10px] bg-yellow" src={ilustration} alt="" />

      <div className="flex flex-col gap-3 font-custom">
        <div className="flex justify-center gap-2 px-3 py-1 rounded w-fit bg-yellow">
          <span className="text-xs sm:text-[14px] font-extrabold leading-normal">
            Learning
          </span>
        </div>
        <div className="text-xs sm:text-[14px] font-normal leading-normal">
          Published 21 Dec 2023
        </div>
        <h1
          className={`text-[20px] sm:text-2xl leading-normal font-extrabold ${
            isActive ? "text-yellow" : ""
          }`}
        >
          HTML & CSS foundations
        </h1>
        <p className="text-grey text-[14px] sm:text-base font-medium leading-normal">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <img className="max-w-8" src={avatar} alt="User's avatar" />
        <h2 className="text-[14px] font-extrabold leading-normal">
          Greg Hooper
        </h2>
      </div>
    </div>
  );
}
