import { Link } from "react-router-dom";

const projects = [
  {
    id: "4",
    type: "Website",
    title: "Sendvoy.com",
    link: "https://sendvoy.com/",
  },
  {
    id: "5",
    type: "Webapp",
    title: "Social Data Network",
    link: "https://www.socialdatanetwork.com/",
  },
  {
    id: "6",
    type: "Android app",
    title: "Deychop for customers",
    link: "https://play.google.com/store/apps/details?id=com.deychopuser.app",
  },
  {
    id: "7",
    type: "Website",
    title: "Portfolio and Blog",
    link: "https://www.adetolajide.com.ng/",
  },
  {
    id: "9",
    type: "Android app",
    title: "Deychop for Vendors",
    link: "https://play.google.com/store/apps/details?id=com.deychopvendor.app",
  },
  // {
  //   id: "8",
  //   type: "Website",
  //   title: "Malcaire consulting",
  //   link: "https://www.malcaireconsulting.com/",
  // },
];

const Home = () => {
  return (
    <>
      <section className="flex flex-col items-center py-16">
        <p className="poetsen text-center text-3xl lg:text-8xl">
          FRONTEND DEVELOPER
        </p>
        <p className="font-light text-center text-sm lg:text-xl mx-2 lg:mx-0 my-3">
          {
            "{ Javascript, React, Nextjs, React Native,Typescript, Tailwind CSS, SASS... }"
          }
        </p>
        <p className="font-medium lg:font-light text-sm lg:text-base text-center w-[80%] lg:w-[35%] mb-3 leading-6">
          Specializing in React & React Native and leveraging these technologies
          to bring web and app projects to life.
        </p>

        <div className="flex gap-x-4 lg:gap-x-8 items-center mt-6">
          <a
            href="/#project"
            className="text-sm lg:text-base px-5 lg:px-7 py-3 font-bold bg-custom-blue text-custom-black rounded-3xl"
          >
            View Projects
          </a>
          <Link
            to="https://drive.google.com/file/d/1uTOofvH94eBtbnuGrIjdcczTQ1M8jWw9/view?usp=sharing"
            target="_blank"
            className="text-sm lg:text-base pb-2 font-bold text-custom-blue border-b-2 border-b-custom-blue"
          >
            Download Resume
          </Link>
        </div>

        <div>
          <img
            className="h-[300px] lg:h-[700px] w-full"
            src="/file.png"
            alt="illustration"
          />
        </div>
      </section>

      <section id="project" className="py-6 padding-x">
        <p className="text-center mb-12 text-4xl lg:text-6xl uppercase font-bold">
          Projects
        </p>

        <div className="flex gap-5 flex-wrap">
          {projects.map((item) => (
            <Link
              to={item.link}
              target="_blank"
              key={item.id}
              className="bg-slate-50 bg-opacity-25 hover:bg-opacity-35 gap-x-4 lg:gap-x-16 pr-4 cursor-pointer basis-[100%] lg:basis-[49%] h-[150px] flex items-center rounded-xl"
            >
              <img
                src="/app-bg.png"
                className="w-[40%] h-auto lg:h-[90%] lg:w-auto opacity-75"
                alt="icon"
              />
              <div className="self-center">
                <p className="text-xs">{item.type}</p>
                <p className="text-base lg:text-xl font-medium">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-6 mb-14 padding-x">
        <p className="text-center mb-12 text-4xl lg:text-6xl uppercase font-bold">
          Philosophy
        </p>

        <p>
          I am passionate about creating and bringing ideas to life. My energy
          and self-motivation drive me to deliver exceptional results, meeting
          every challenge head-on with reliability and responsibility. I thrive
          in dynamic environments, easily integrating into teams and tackling
          problems with a collaborative spirit. Whether working with others or
          independently, I handle pressure and deadlines with resilience and
          initiative. Creativity is my guide. With a solid grasp of software
          design and agile methods, I craft solutions that are both functional
          and elegant. My startup experience has sharpened my ability to
          innovate and adapt.
          <br />
          <br />
          I am honest, dependable, and always eager to learn. Time management is
          key for me, ensuring quality and punctuality. My friendly and
          approachable nature helps me build positive relationships with
          colleagues and clients. In the fast-paced world of frontend
          development, independence is essential. I excel in busy settings,
          working autonomously when needed.
          <br />
          <br /> My outgoing and tactful approach allows me to listen
          effectively and solve problems thoughtfully. I live this philosophy in
          every line of code I write and every interface I design. My enthusiasm
          drives innovation, my adaptability fosters teamwork, my creativity
          inspires design, my integrity builds trust, and my independence
          ensures effective problem-solving. This is my path to a fulfilling and
          impactful career in technology.
        </p>
      </section>
    </>
  );
};

export default Home;
