import TiltCard from "./hoverable-card";

export function AboutMe() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="items-center justify-center p-10 text-left gap-3">
          <h1 className="text-3xl font-bold">About Me!</h1>
          <p className="text-md font-mono mt-2">
            Hi, if you couldn't tell already - I'm Neil. I am a passionate
            website + software developer with around 5 years of programming
            experience. Here you can learn a bit more about me!
          </p>
          <img src="/" />
        </div>
        <div className="flex items-center justify-center">
          <TiltCard />
        </div>
      </div>
    </section>
  );
}
