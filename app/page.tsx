import { AboutMe } from "@/components/about-me";
import { Hero } from "@/components/hero";
import { Posts } from "@/components/posts";
import { Footer } from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-the-top";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <hr
        className="w-[15%] mx-auto m-[20px] dark:border-[#fff] border-dotted border-t-[7px]"
        id="blog"
      />
      <Posts />
      <hr
        className="w-[15%] mx-auto m-[20px] dark:border-[#fff] border-dotted border-t-[7px]"
        id="about"
      />
      <AboutMe />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
