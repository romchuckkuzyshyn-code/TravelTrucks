import Link from "next/link";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={css.heroBox}>
      <div className={css.title}>
        <h1 className={css.headline}>Campers of your dreams</h1>
        <p className={css.descr}>
          You can find everything you want in our catalog
        </p>
      </div>

      <Link className={css.button} href="/catalog">
        View Now
      </Link>
    </div>
  );
};

export default Hero;
