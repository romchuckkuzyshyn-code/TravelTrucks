import { BounceLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.loader}>
        <BounceLoader color="rgba(130, 155, 145, 1)" />
      </div>
    </div>
  );
};

export default Loader;
