import avatar from "./assets/images/image-avatar.webp";
import ilustration from "./assets/images/illustration-article.svg";

export function BlogPreviewCard() {
  return (
    <div className="max-w-80 p-6 sm:max-w-96 flex flex-col items-start gap-6 border border-black rounded-[20px] bg-pureWhite shadow-customSm sm:shadow-customMd">
      <img className="rounded-[10px] bg-yellow" src={ilustration} alt="" />

      <div className="flex flex-col gap-3 font-custom">
        <div className="">Learning</div>
        <div className="">Published 21 Dec 2023</div>
        <h1 className="">HTML & CSS foundations</h1>
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
