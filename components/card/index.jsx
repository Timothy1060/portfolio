const CardItem = ({ children, classNames }) => {
  return (
    <div
      className={`px-6 py-5 h-48 cursor-pointer hover:bg-opacity-20 rounded-xl bg-zinc-50 bg-opacity-25 text-white ${classNames}`}
    >
      {children}
    </div>
  );
};

export default CardItem