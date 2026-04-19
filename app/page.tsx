import css from "./page.module.css";
import Hero from "../components/Hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Find the camper of your dreams with TravelTrucks. Browse our camper catalog and choose the perfect vehicle for your next trip.",
};

const Page = () => {
  return (
    <main className={css.page}>
      <section className={css.heroWrapper}>
        <div className={css.hero}>
          <div className={css.overlay}></div>
          <div className={css.content}>
            <Hero />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
