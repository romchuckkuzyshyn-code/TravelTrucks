import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <p className={css.logo}>
        Travel<span>Trucks</span>
      </p>
      <Link className={css.links} href="/app/layout.tsx">
        Home
      </Link>
      <Link className={css.links} href="/app/catalog/page.tsx">
        Catalog
      </Link>
    </header>
  );
};

export default Header;
