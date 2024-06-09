import avatar from "./assets/images/image-avatar.webp";

function App() {
  return (
    <main className="flex justify-center items-center h-full">
      <div className="max-w-80 p-6 sm:max-w-96  border flex flex-col items-start gap-6">
        <div></div>
        <div className="flex flex-col">
          <div className="">Learning</div>
          <div className="">Published 21 Dec 2023</div>
          <h1 className="">HTML & CSS foundations</h1>
          <p className="">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="flex">
          <img className="max-w-8" src={avatar} alt="User's avatar" />
          <h2 className="">Greg Hooper</h2>
        </div>
      </div>
    </main>
  );
}

export default App;
