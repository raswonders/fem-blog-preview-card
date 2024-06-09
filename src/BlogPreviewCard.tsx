import avatar from "./assets/images/image-avatar.webp";
import ilustration from "./assets/images/illustration-article.svg";

export function BlogPreviewCard() {
  return (
    <div className="max-w-80 p-6 sm:max-w-96 flex flex-col items-start gap-6 border border-black rounded-[20px] bg-pureWhite shadow-customSm sm:shadow-customMd text-black">
      <img className="rounded-[10px] bg-yellow" src={ilustration} alt="" />

      <div className="flex flex-col gap-3 font-custom">
        <div className="w-fit flex justify-center gap-2 py-1 px-3 rounded bg-yellow">
          <span className="text-xs sm:text-[14px] font-extrabold leading-normal">
            Learning
          </span>
        </div>
        <div className="text-xs sm:text-[14px] font-normal leading-normal">
          Published 21 Dec 2023
        </div>
        <h1 className="text-[20px] sm:text-2xl leading-normal font-extrabold hover:text-yellow hover:cursor-pointer">
          HTML & CSS foundations
        </h1>
        <p className="">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className="flex">
        <img className="max-w-8" src={avatar} alt="User's avatar" />
        <h2 className="">Greg Hooper</h2>
      </div>
    </div>
  );
}
