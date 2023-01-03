import Link from "next/link";

const ListItem = ({ project }) => {
  const { type, title, link } = project;
  return (
    <Link href={link} target="_blank">
      <div className="py-8 px-4 rounded text-white border-b-[0.5] border-zinc-50 bg-slate-50 bg-opacity-25">
        <p>{type}</p>
        <h4 className="font-semibold text-lg lg:text-2xl">{title}</h4>
      </div>
    </Link>
  );
};

export default ListItem;
