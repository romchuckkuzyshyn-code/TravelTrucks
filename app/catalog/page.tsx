import { Metadata } from "next";
import CatalogPageClient from "./CatalogPageClient";

export const metadata: Metadata = {
  title: "Catalog",
  description:
    "Browse the camper catalog, use filters by location, vehicle form, engine, and transmission, and find the best camper for your trip.",
};

const Page = () => {
  return <CatalogPageClient />;
};

export default Page;
