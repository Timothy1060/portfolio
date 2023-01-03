import Link from "next/link";

const Footer = () => {
  return (
    <section className="mt-3 flex items-center justify-center gap-x-7 text-white">
      <a href="tel:+23409069917252">
        <i className="bi bi-telephone"></i>
      </a>
      <Link href="https://twitter.com/manliketimmyy" target="_blank">
        <i className="bi bi-twitter"></i>
      </Link>
      <Link href="https://www.instagram.com/man_like_timmy" target="_blank">
        <i className="bi bi-instagram"></i>
      </Link>
      <Link href="https://wa.me/+2349069917252" target="_blank">
        <i className="bi bi-whatsapp"></i>
      </Link>
      <Link
        href="https://linkedin.com/in/timothy-iliya-45b2aa163"
        target="_blank"
      >
        <i className="bi bi-linkedin"></i>
      </Link>
      <Link href="mailto:timothyiliya21@gmail.com" target="_blank">
        <i className="bi bi-envelope"></i>
      </Link>
    </section>
  );
};

export default Footer;
