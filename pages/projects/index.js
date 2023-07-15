import ListItem from "../../components/list";

const projects = [
  {
    id: "1",
    type: "Website",
    title: "Retala.app",
    link: "https://retala.app/",
  },
  {
    id: "2",
    type: "Website",
    title: "Pecksas.com",
    link: "https://pecksas.com/",
  },
  {
    id: "3",
    type: "Webapp",
    title: "Affiliate.retala.app",
    link: "https://affiliate.retala.app/",
  },
  {
    id: "4",
    type: "Website",
    title: "Sendvoy.com",
    link: "https://sendvoy.com/",
  },
  {
    id: "5",
    type: "Android app",
    title: "Sendvoy",
    link: "https://play.google.com/store/apps/details?id=com.sendvoy.app",
  },
];

const Projects = () => {
  return (
    <section className="grid overflow-hidden grid-cols-1 lg:grid-cols-2 my-4 gap-6 px-7 lg:px-20 pt-4 pb-2">
      <h1 className="overflow-hidden text-4xl lg:text-8xl text-center my-2 font-black text-white">
        PROJECTS
      </h1>
      {projects.map((project) => (
        <ListItem key={project.id} project={project} />
      ))}
    </section>
  );
};

export default Projects;
