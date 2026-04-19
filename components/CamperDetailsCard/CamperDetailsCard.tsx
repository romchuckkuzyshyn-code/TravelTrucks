import { FaRegMap, FaStar } from "react-icons/fa";
import { CamperDetails } from "../../types/campersType";
import css from "./CamperDetailsCard.module.css";

interface CamperDetailsProps {
  camper: CamperDetails;
}

const CamperDetailsCard = ({ camper }: CamperDetailsProps) => {
  const formatAmenity = (value: string) => {
    if (value.toLowerCase() === "tv") return "TV";
    if (value.toLowerCase() === "ac") return "AC";

    return value
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <div className={css.camperDesc}>
      <div className={css.vehicleDesc}>
        <h2 className={css.title}>{camper.name}</h2>
        <div className={css.infoRow}>
          <p className={css.rating}>
            <FaStar className={css.starIcon} />
            {camper.rating}({camper.totalReviews} Reviews)
          </p>

          <p className={css.location}>
            <FaRegMap className={css.mapFind} />
            {camper.location}
          </p>
          <p className={css.price}>€{camper.price}</p>
        </div>
        <p className={css.descr}>{camper.description}</p>
      </div>
      <div className={css.vehicleFullDet}>
        <div className={css.vehicleDet}>
          <h2 className={css.title}>Vehicle details</h2>
          <ul className={css.vehicleList}>
            <li className={css.vehicleItem}>
              {camper.engine
                .split("_")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </li>
            <li className={css.vehicleItem}>
              {camper.transmission
                .split("_")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </li>
            {camper.amenities.map((item) => (
              <li key={item} className={css.vehicleItem}>
                {formatAmenity(item)}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className={css.specsList}>
            <li className={css.specItem}>
              <span>Form</span>
              <span>
                {camper.form
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </span>
            </li>
            <li className={css.specItem}>
              <span>Length</span>
              <span>{camper.length}</span>
            </li>
            <li className={css.specItem}>
              <span>Width</span>
              <span>{camper.width}</span>
            </li>
            <li className={css.specItem}>
              <span>Height</span>
              <span>{camper.height}</span>
            </li>
            <li className={css.specItem}>
              <span>Tank</span>
              <span>{camper.tank}</span>
            </li>
            <li className={css.specItem}>
              <span>Consumption</span>
              <span>{camper.consumption}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CamperDetailsCard;
