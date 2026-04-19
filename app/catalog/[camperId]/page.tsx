import { CamperDetails } from "../../../types/campersType";
import { getCamperById, getCamperReviewsById } from "../../../lib/api";
import CamperGallery from "../../../components/CamperGallery/CamperGallery";
import CamperDetailsCard from "../../../components/CamperDetailsCard/CamperDetailsCard";
import css from "./page.module.css";
import ReviewsList from "../../../components/ReviewsList/ReviewsList";
import BookingForm from "../../../components/BookingForm/BookingForm";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ camperId: CamperDetails["id"] }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { camperId } = await params;

  try {
    const camper = await getCamperById(camperId);

    return {
      title: camper.name,
      description: `${camper.name} in ${camper.location}. Rating: ${camper.rating}. Price: €${camper.price}. ${camper.description}`,
      openGraph: {
        title: camper.name,
        description: `${camper.name} in ${camper.location}. Price: €${camper.price}.`,
        images: [
          {
            url: camper.gallery[0]?.original || "",
          },
        ],
      },
    };
  } catch {
    return {
      title: "Camper details",
      description: "Detailed information about the selected camper.",
    };
  }
}

const Page = async ({ params }: PageProps) => {
  const { camperId } = await params;
  const camper = await getCamperById(camperId);
  const camperReviews = await getCamperReviewsById(camperId);

  return (
    <main className={css.container}>
      <div className={css.camperDetail}>
        <CamperGallery gallery={camper.gallery} name={camper.name} />
        <CamperDetailsCard camper={camper} />
      </div>
      <h2 className={css.title}>Reviews</h2>
      <div className={css.review}>
        <ReviewsList reviews={camperReviews} />
        <BookingForm id={camperId} />
      </div>
    </main>
  );
};

export default Page;
