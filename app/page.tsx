import css from "./page.module.css";
import Hero from "../components/Hero/Hero";

const Page = () => {
  return (
    <main className={css.container}>
      <Hero />
    </main>
  );
};

export default Page;
