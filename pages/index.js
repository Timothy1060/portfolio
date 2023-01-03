import CardItem from "../components/card";
import Head from "next/head";

export default function Home() {
  return (
    <section className="text-zinc-400">
      <h1 className="text-4xl lg:text-8xl text-center my-2 font-black text-white">
        FRONTEND DEVELOPER
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-4 lg:px-20 pt-4 pb-2">
        <CardItem classNames="flex items-center justify-between lg:col-span-2">
          <div>
            <h4 className="text-2xl font-semibold">Hey, I&#39;m Timothy 👋</h4>
            <p className="font-light mt-3">A Frontend Developer</p>
          </div>
          <i className="bi bi-arrow-left-circle text-xl"></i>
        </CardItem>

        <CardItem classNames="flex justify-between">
          <div>
            <p className="font-light mt-3">Web Development</p>
            <h4 className="text-2xl font-semibold">ReactJs</h4>
          </div>
          <i className="bi bi-arrow-up-left-circle text-xl self-end"></i>
        </CardItem>

        <CardItem classNames="flex justify-between">
          <div>
            <p className="font-light mt-3">App Development</p>
            <h4 className="text-2xl font-semibold">React Native</h4>
          </div>
          <i className="bi bi-arrow-up-left-circle text-xl self-end"></i>
        </CardItem>

        <a href="https://drive.google.com/file/d/1uTOofvH94eBtbnuGrIjdcczTQ1M8jWw9/view?usp=sharing">
          <CardItem classNames="flex items-end justify-between">
            <div>
              <i className="bi bi-filetype-pdf text-4xl"></i>
              <p className="font-light text-sm mt-3">Learn more About me</p>
              <h4 className="text-xl font-semibold">See my resume</h4>
            </div>
            <i className="bi bi-arrow-right-circle text-xl self-end"></i>
          </CardItem>
        </a>

        <a href="https://github.com/Timothy1060">
          <CardItem classNames="flex items-center justify-center">
            <i className="bi bi-github text-6xl"></i>
          </CardItem>
        </a>

        <CardItem classNames="flex items-center justify-between lg:col-span-2">
          <div>
            <p className="font-light uppercase text-sm">What i do</p>
            <div className="flex flex-col lg:flex-row gap-x-11 text-lg font-medium mt-3">
              <p>Web Development</p>
              <p>App Development</p>
              <p>Freelance</p>
            </div>
          </div>
        </CardItem>
      </section>
    </section>
  );
}
