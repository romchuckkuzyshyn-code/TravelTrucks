import { CamperDetails } from "../../../types/campersType";
import { getCamperById } from "../../../lib/api";
import CamperGallery from "../../../components/CamperGallery/CamperGallery";
import CamperDetailsCard from "../../../components/CamperDetailsCard/CamperDetailsCard";

interface PageProps {
  params: Promise<{ camperId: CamperDetails["id"] }>;
}

const Page = async ({ params }: PageProps) => {
  const { camperId } = await params;
  const camper = await getCamperById(camperId);

  return (
    <main>
      <CamperGallery gallery={camper.gallery} name={camper.name} />
      <CamperDetailsCard camper={camper} />
    </main>
  );
};

export default Page;
