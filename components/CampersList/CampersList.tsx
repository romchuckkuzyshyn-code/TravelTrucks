import css from "./CampersList.module.css";

interface CampersListProps {
  filters: {
    location: string;
    form: string;
    engine: string;
    transmission: string;
  };
}
const CampersList = ({ filters }: CampersListProps) => {
  return <div>CampersList</div>;
};

export default CampersList;
