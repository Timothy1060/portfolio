const Header = () => {
  return (
    <section className="flex justify-between items-center padding-x py-6">
      <div className="flex items-center gap-x-3.5">
        <i className="bi bi-code-slash" />
        <p className="font-bold text-base">Nox</p>
      </div>

      <a
        href="mailto:timothyiliya21@gmail.com"
        className="text-sm px-4 lg:px-6 py-1.5 border-2 border-white rounded-2xl"
      >
        Email me
      </a>
    </section>
  );
};

export default Header;
