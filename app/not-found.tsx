import { Metadata } from "next";
import css from "./not-found.module.css";

export const metadata: Metadata = {
  title: "404 - TravelTrucks",
  description: "The page you are looking for could not be found.",
  openGraph: {
    title: "404 - TravelTrucks",
    description: "The page you are looking for could not be found.",
    url: "http://localhost:3000/not-found",
  },
};

const NotFound = () => {
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, this page does not exist or may have been removed.
      </p>
    </>
  );
};

export default NotFound;
