import { Link } from "react-router-dom";
import PlaceholderImage from "../../images/placeholder.png";
import toogleImage from "../../images/menu.jpg";
import { useState } from "react";
import '../../app.css'
const Header = ({ show, setShow }) => (
  <div>
    {/* lareg screen  */}
    <header className="hidden  md:hidden  lg:block xl:block 2xl:flex flex-col items-start px-5 w-full max-md:pl-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between  w-full font-semibold max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-1 self-start mt-1.5 text-xl leading-7 text-sky-600 whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc1d9a835bcf9559aa357fd6beb16359f6b04a378021ed3317b85d20d742d212?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
            alt="CareerGuide Logo"
            className="shrink-0 self-start w-4 aspect-square"
          />
          <div className="flex-auto">CareerGuide</div>
        </div>
        <nav className="flex gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 self-start mt-1 text-sm capitalize text-stone-500 pt-2">
            <a href="#" className="text-sky-600 no-underline">
              Home
            </a>
            <a href="#" className="no-underline">
              Contact Us
            </a>
            <a href="#" className="no-underline">
              About Us
            </a>
          </div>
          <div className="flex gap-5 text-xs leading-7">
            <Link to="/signin">
              <button className="justify-center px-4 py-1 text-sky-600 rounded-md border border-sky-600 border-solid">
                Sign in
              </button>
            </Link>
            <Link to="/signup">
              <button className="justify-center px-4 py-1 text-white bg-sky-600 rounded-md">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
    {/* small screen */}
    <header className="flex-col items-start px-5 w-full max-md:pl-5 max-md:max-w-full block  lg:hidden xl:hidden 2xl:hidden">
      <div className="w-full font-semibold max-md:flex-wrap max-md:max-w-full">
        <div className="flex justify-between gap-1  mt-1.5 text-xl leading-7 text-sky-600 whitespace-nowrap w-full">
          <div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc1d9a835bcf9559aa357fd6beb16359f6b04a378021ed3317b85d20d742d212?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
              alt="CareerGuide Logo"
              className="shrink-0 self-start w-4 aspect-square"
            />
            <div className="flex-auto">CareerGuide</div>
          </div>
          <div id="sm-toogle-div" onClick={() => setShow(!show)}>
            <img src={toogleImage} alt="toggle" />
          </div>
        </div>
        {show && (
          <nav className="flex gap-5 flex-col  items-center max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-3 flex-col self-start mt-1 text-sm capitalize text-stone-500 pt-2">
              <a href="#" className="text-sky-600 no-underline">
                Home
              </a>
              <a href="#" className="no-underline">
                Contact Us
              </a>
              <a href="#" className="no-underline">
                About Us
              </a>
            </div>
            <div className=" self-start gap-2 flex-col text-xs leading-7">
              <Link to="/signin">
                <button className="justify-center px-4 py-1 text-sky-600 rounded-md border border-sky-600 border-solid">
                  Sign in
                </button>
              </Link>
              <Link to="/signup">
                <button className="justify-center mx-2 px-4 py-1 text-white bg-sky-600 rounded-md">
                  Sign Up
                </button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  </div>
);

function LineBlock() {
  return (
    <main
      className="bg-sky-600 bg-opacity-20 min-h-[108px]"
      style={{ marginTop: "100px" }}
    ></main>
  );
}

const MainContent = () => (
  <main className="px-5">
    <section
      className="flex gap-2.5 py-2 pr-2 mt-24 text-4xl font-boldleading-[65px] max-md:flex-wrap max-md:mt-10"
      style={{ fontWeight: "700" }}
    >
      <div className="max-md:max-w-full" style={{ lineHeight: "1.3" }}>
        Your Path to Success in <br />
        <span className="text-sky-600"> Computer Science</span>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5667d451915336b839cf47ebb812bd6a71212c3999c557641e4ee723589bdfe?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
        alt=""
        className="shrink-0 self-start w-6 aspect-square"
      />
    </section>
    <div className="mt-2.5 text-xs font-medium leading-5 text-stone-500  max-md:ml-2.5">
      Empowering Fresh Graduates and Professionals
    </div>
    <div className="mt-2.5 text-xs font-medium leading-5 text-stone-500  max-md:ml-2.5">
      With CareerGuide, you can embark on a rewarding career <br /> in computer
      science by leveraging our extensive resources <br /> and expert advice.
    </div>
    <div class="flex flex-col mt-3 md:flex-row md:items-center mb-3 md:gap-5 text-xs max-md:ml-2.5">
      <Link
        to="/signin"
        class="w-full text-center md:w-auto justify-center text-decoration-none px-10 py-1.5 md:px-5 font-semibold leading-7 text-white bg-sky-600 rounded-md"
      >
        Get Started
      </Link>
      <div class="flex gap-2.5  md:mt-0 font-medium leading-5 text-neutral-400">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbe9078b5022f29133e30f01dd08c643a5a54aa8684f52157bbe3bccc983860f?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
          alt=""
          class="shrink-0 aspect-[1.05] fill-yellow-300 w-[22px]"
        />
        <div>12k + Reviews</div>
      </div>
    </div>
  </main>
);

const HowItWorks = () => (
  <section className="flex px-5 flex-col items-center w-full bg-opacity-20 min-h-[108px] md:max-w-full">
    <div className="shrink-0 self-center mt-6 h-1.5 rounded-2xl bg-zinc-800 w-[145px]" />
    <h2 className="self-center text-2xl font-semibold leading-[50.04px] text-zinc-800">
      How it works
    </h2>
    <div className="mt-12 w-full max-w-full md:max-w-[calc(33.333% - 2.5rem)]">
      <div className="flex flex-col md:flex-row gap-5">
        <Step
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/cd889470faf1e352634e99c4e8485bf537761726c1aef2125e67c643d0f5ab0c?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
          title="Easy Onboarding"
          description="Seamless onboarding process to get you started and navigating your career path efficiently"
        />
        <Step
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a42bf75f00bcdd2d48eeafb23e382137bb65c12fdadcceb811d1583ee05ad9a2?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
          title="Activate your account"
          description="Create your account to access personalized career guidance and opportunities"
        />
        <Step
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/26921c444ad6cf013e0d6ea718d6249dc2cf46d397de5bf00812b4409ea46aac?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
          title="Endless Opportunities"
          description="Explore a wide range of career paths, job openings, and networking opportunities tailored to your skills and aspirations"
        />
      </div>
    </div>
  </section>
);

const Step = ({ imgSrc, title, description }) => (
  <div className="flex flex-col w-full md:w-[calc(33.333% - 2.5rem)]">
    <div className="flex flex-col items-center mt-6 w-full md:mt-0">
      <img
        loading="lazy"
        src={imgSrc}
        alt={title}
        className="aspect-square w-12 md:w-[33px]"
      />
      <div className="mt-4 text-lg font-semibold leading-3 text-neutral-700">
        {title}
      </div>
      <p className="mt-4 text-xs font-medium leading-5 text-center text-zinc-500">
        {description}
      </p>
    </div>
  </div>
);

const Testimonials = () => (
  <>
    <section className="flex flex-col mt-24 px-3  max-w-full font-bold text-zinc-800 w-full max-md:mt-10">
      <h2 className="text-3xl font-semibold whatwedotext leading-10 w-[336px] max-md:max-w-full">
        We provide the best <br /> for you
      </h2>
      <p className="text-sm  whatwedotext font-medium tracking-wide leading-5 text-zinc-600  max-md:max-w-full">
        CareerGuide is dedicated to empowering computer science students and
        professionals with the tools and guidance they need to excel in their
        careers. We provide comprehensive resources, including expert advice,
        mentorship, and personalized career planning. Our platform connects
        users with industry professionals who offer valuable insights and
        practical guidance, ensuring that every member can navigate their career
        path with confidence and clarity.
      </p>
    </section>
   
  </>
);
const TestimonialSectionOne = () => {
  return(
    <section className="text-center mt-12 md:mt-20">
    <h2 className="mt-7 text-xl font-bold text-sky-600 max-md:mt-10">
      Testimonials
    </h2>
    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-center  w-full">
      CareerGuide is the Best Career Platform
    </h2>
  </section>
  )
}

const TestimonialSectionTwo = () => {
  return (
    <div className="mt-11 w-full max-w-full  md:mx-auto">
      <div className="flex flex-col md:flex-row gap-4 px-3  testimonial-container w-full justify-center ">
        <Testimonial
          text="CareerGuide is the best affiliate platform"
          description="CareerGuide has been a fantastic opportunity for me. The platform helped me streamline my skills and focus on a specific career path in software development"
          imgSrc={PlaceholderImage}
          userName="Kingsley Sabo"
          userId="User 1154"
          logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/aef35e4e99d56cd128c7a0a5282cf3c1f6122fccf6ad9adfdcdb56a595e5e0d6?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
        />
        <Testimonial
          text="CareerGuide is the best affiliate platform"
          description="Thanks to CareerGuide, I was able to identify my strengths and narrow down my career goals. It truly helped me focus on what I am passionate about."
          imgSrc={PlaceholderImage}
          userName="Lawanson folakemi"
          userId="User 1154"
          logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/aef35e4e99d56cd128c7a0a5282cf3c1f6122fccf6ad9adfdcdb56a595e5e0d6?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
        />
        <Testimonial
          text="CareerGuide is the best affiliate platform"
          description="CareerGuide offered the guidance I needed to refine my skills and pursue a clear career path in data science. It's been an invaluable resource"
          imgSrc={PlaceholderImage}
          userName="Odior-Adeku Joannes"
          userId="User 1154"
          logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/aef35e4e99d56cd128c7a0a5282cf3c1f6122fccf6ad9adfdcdb56a595e5e0d6?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
        />
      </div>
    </div>
  );
};

const Testimonial = ({
  text,
  description,
  imgSrc,
  userName,
  userId,
  logoSrc,
}) => (
  <div className="flex flex-col w-full max-w-full md:max-w-[calc(33.333% - 2.5rem)]">
    <div className="flex flex-col grow px-3 pt-3 pb-1 mx-auto w-full bg-sky-600 rounded-md backdrop-blur-[14.350000381469727px]">
      <p className="mt-1 text-xs tracking-normal text-stone-300">
        {description}
      </p>
      <div className="flex gap-5 justify-between items-start mt-6 w-full">
        <div className="flex gap-0.5">
          <img
            loading="lazy"
            src={imgSrc}
            alt={userName}
            className="shrink-0 rounded-full aspect-square w-[29px]"
          />
          <div className="flex flex-col my-auto">
            <div className="text-xs font-semibold tracking-wide text-neutral-100">
              {userName}
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src={logoSrc}
          alt=""
          className="shrink-0 mt-4 aspect-[2.13] w-[38px]"
        />
      </div>
    </div>
  </div>
);

function IconLinks() {
  return (
    <div className="flex gap-4 items-start mt-2.5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f159ef5b088396f17b355e61e4cec3ab20c54599225c1bd26c9588846e8bf29b?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
        alt="Link Icon 1"
        className="shrink-0 self-stretch my-auto aspect-square w-[18px] cursor-pointer"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f14298126d66d345ff35f0c52d6a8d7058c4e2fa4bacbbf3d3d20764764855ec?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
        alt="Link Icon 2"
        className="shrink-0 w-6 aspect-square cursor-pointer"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/15c5ba493e2a2fc4dd4ac30d043670e553cd25964c1c0282fe0c20de2b475148?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
        alt="Link Icon 3"
        className="shrink-0 w-6 aspect-square cursor-pointer"
      />
    </div>
  );
}

function Footer() {
  return (
    <section className="flex flex-col items-start pt-2 pr-20 pb-12 pl-3.5 max-md:pr-5 bg-sky-600 w-full">
      <header className="flex gap-0 items-center text-2xl font-semibold text-white whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/37218d9e082be0b5a6af3da230c83d8eb38082dba6b7c2f028e32e9e153489fa?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
          alt="Logo Image"
          className="shrink-0 self-start aspect-square w-[21px]"
        />
        <div className="flex-auto"> CareerGuide</div>
      </header>
      <p
        className="mt-6 text-base tracking-wide leading-4 text-gray-200"
        style={{ lineHeight: "1.5" }}
      >
        Start your journey with CareerGuide today and unlock <br /> your
        potential in the world of computer science
      </p>
      <IconLinks />
    </section>
  );
}

function Index() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col pt-2.5 bg-white">
      <Header show={show} setShow={setShow} />
      <MainContent />
      <LineBlock />
      <HowItWorks />
      <Testimonials />
      <TestimonialSectionOne/>
      <TestimonialSectionTwo />
       <br />
      <br />
      <Footer />
    </div>
  );
}

export default Index;
