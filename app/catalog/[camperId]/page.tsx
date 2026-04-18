import { CamperDetails } from "../../../types/campersType";
import { getCamperById, getCamperReviewsById } from "../../../lib/api";
import CamperGallery from "../../../components/CamperGallery/CamperGallery";
import CamperDetailsCard from "../../../components/CamperDetailsCard/CamperDetailsCard";
import css from "./page.module.css";
import ReviewsList from "../../../components/ReviewsList/ReviewsList";

interface PageProps {
  params: Promise<{ camperId: CamperDetails["id"] }>;
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
      <div className={css.review}>
        <h2 className={css.title}>Reviews</h2>
        <ReviewsList reviews={camperReviews} />
      </div>
    </main>
  );
};

export default Page;
