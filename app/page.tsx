import Link from "next/link";
import css from "./Page.module.css";

const Page = () => {
  return (
    <main>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>
      <Link href="/app/catalog/page.tsx">View Now</Link>
    </main>
  );
};

export default Page;
