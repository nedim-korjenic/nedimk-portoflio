import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  // Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
  Skills,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />{" "}
    </div>
    <div className="relative">
      <WhatsNew />
      <div className="gradient-04 z-0" />
      <GetStarted />
      <div className="relative">
        <div className="gradient-03 z-0" />
      </div>
      <Skills />
    </div>
    {/* <World /> */}
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      {/* <Feedback /> */}
    </div>
    <Footer />
    <a href="#explore">
        <div className={`flex items-center justify-center w-[60px] h-[60px] rounded-[24px]  glassmorphism z-10`} style={{position:'fixed', bottom:'20px', right:'40px'}}>
          <img
            src="/arrow-up.png"
            alt="go-to-top"
            className="w-[80%] h-[80%]  object-contain"
          />
        </div>
        </a>
  </div>
);

export default Page;
