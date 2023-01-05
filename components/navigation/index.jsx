import Image from "next/image";
import Link from "next/link";

// import me from "../../assets/me.jpg";

const Navlinks = [
  { title: "Overview", link: "/" },
  { title: "Projects", link: "/projects" },
  { title: "About", link: "/about" },
  {
    title: "Resume",
    link: "https://drive.google.com/file/d/1uTOofvH94eBtbnuGrIjdcczTQ1M8jWw9/view?usp=sharing",
  },
];

const Navigation = () => {
  return (
    <nav className="px-4 lg:px-14 py-3 flex flex-col lg:flex-row justify-between items-center">
      <Link
        href="/"
        className="flex items-center mt-4 lg:mt-0 gap-x-4 py-2 px-4 rounded-3xl bg-blue-500 lg:bg-transparent text-white lg:text-blue-500"
      >
        <p className="font-semibold text-base lg:text-xl tracking-wide">
          Timothy Iliya
        </p>
      </Link>
      <section className="flex justify-center lg:justify-start w-full lg:w-fit items-center gap-x-11 mt-6 lg:mt-0 text-zinc-400">
        <div className="grid grid-cols-4 gap-y-2 lg:inline">
          {Navlinks.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="font-semibold px-4 text-sm lg:text-base"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <a
          href="mailto:timothyiliya21@gmail.com"
          target="_blank"
          className="hidden lg:inline py-1.5 px-6 text-sm font-medium text-white border border-zinc-400 rounded-md"
          rel="noreferrer"
        >
          Get in Touch
        </a>
      </section>
    </nav>
  );
};

export default Navigation;
