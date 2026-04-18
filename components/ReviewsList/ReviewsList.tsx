import { FaStar } from "react-icons/fa";
import { GetReviews } from "../../types/campersType";
import css from "./ReviewsList.module.css";

interface ReviewsListProps {
  reviews: GetReviews[];
}

const ReviewsList = ({ reviews }: ReviewsListProps) => {
  return (
    <ul className={css.reviewList}>
      {reviews.map((item) => {
        return (
          <li key={item.id} className={css.reviewItem}>
            <div className={css.reviewHeader}>
              <p className={css.avatarName}>{item.reviewer_name.slice(0, 1)}</p>
              <div className={css.nameStar}>
                <p className={css.name}>{item.reviewer_name}</p>
                <div>
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={
                        index < item.reviewer_rating ? css.activeStar : css.star
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className={css.reviewDesc}>{item.comment}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
