import { ChangeEvent } from "react";
import css from "./FiltersSidebar.module.css";
import { FaRegMap } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

interface FiltersSidebarProps {
  inputLocation: string;
  camperForm: string;
  engine: string;
  transmission: string;

  handleLocationChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFormChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEngineChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTransmissionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  handleClearFilters: () => void;
}

const FiltersSidebar = ({
  inputLocation,
  camperForm,
  engine,
  transmission,
  handleLocationChange,
  handleFormChange,
  handleEngineChange,
  handleTransmissionChange,
  handleSubmit,
  handleClearFilters,
}: FiltersSidebarProps) => {
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.locationGroup}>
        <label className={css.locationLabel} htmlFor="location">
          Location
        </label>

        <input
          className={css.locationInput}
          id="location"
          type="text"
          name="location"
          value={inputLocation}
          onChange={handleLocationChange}
          placeholder="Kyiv, Ukraine"
        />
        <FaRegMap className={css.mapFind} />
      </div>

      <div className={css.radioForm}>
        <h3 className={css.title}>Filters</h3>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Camper form</legend>

          <div className={css.optionsList}>
            <label className={css.optionLabel}>
              <input
                className={css.radioInput}
                type="radio"
                name="form"
                value="alcove"
                checked={camperForm === "alcove"}
                onChange={handleFormChange}
              />
              <span className={css.customRadio}></span>
              <span className={css.optionText}>Alcove</span>
            </label>

            <label className={css.optionLabel}>
              <input
                className={css.radioInput}
                type="radio"
                name="form"
                value="panel_van"
                checked={camperForm === "panel_van"}
                onChange={handleFormChange}
              />

              <span className={css.customRadio}></span>
              <span className={css.optionText}>Panel Van</span>
            </label>

            <label className={css.optionLabel}>
              <input
                className={css.radioInput}
                type="radio"
                name="form"
                value="integrated"
                checked={camperForm === "integrated"}
                onChange={handleFormChange}
              />

              <span className={css.customRadio}></span>
              <span className={css.optionText}>Integrated</span>
            </label>

            <label className={css.optionLabel}>
              <input
                className={css.radioInput}
                type="radio"
                name="form"
                value="semi_integrated"
                checked={camperForm === "semi_integrated"}
                onChange={handleFormChange}
              />

              <span className={css.customRadio}></span>
              <span className={css.optionText}>Semi Integrated</span>
            </label>
          </div>
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Engine</legend>

          <div className={css.optionsList}>
            <label className={css.optionLabel}>
              <input
                className={css.radioInput}
                type="radio"
                name="engine"
                value="diesel"
                checked={engine === "diesel"}
                onChange={handleEngineChange}
              />

              <span className={css.customRadio}></span>
              <span className={css.optionText}>Diesel</span>
            </label>

            <label className={css.optionLabel}>
              <input
                className={css.radioInput}
                type="radio"
                name="engine"
                value="petrol"
                checked={engine === "petrol"}
                onChange={handleEngineChange}
              />

              <span className={css.customRadio}></span>
              <span className={css.optionText}>Petrol</span>
            </label>

            <label className={css.optionLabel}>
              <input
                className={css.radioInput}
                type="radio"
                name="engine"
                value="hybrid"
                checked={engine === "hybrid"}
                onChange={handleEngineChange}
              />

              <span className={css.customRadio}></span>
              <span className={css.optionText}>Hybrid</span>
            </label>

            <label className={css.optionLabel}>
              <input
                className={css.radioInput}
                type="radio"
                name="engine"
                value="electric"
                checked={engine === "electric"}
                onChange={handleEngineChange}
              />

              <span className={css.customRadio}></span>
              <span className={css.optionText}>Electric</span>
            </label>
          </div>
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Transmission</legend>

          <div className={css.optionsList}>
            <label className={css.optionLabel}>
              <input
                className={css.radioInput}
                type="radio"
                name="transmission"
                value="automatic"
                checked={transmission === "automatic"}
                onChange={handleTransmissionChange}
              />

              <span className={css.customRadio}></span>
              <span className={css.optionText}>Automatic</span>
            </label>

            <label className={css.optionLabel}>
              <input
                className={css.radioInput}
                type="radio"
                name="transmission"
                value="manual"
                checked={transmission === "manual"}
                onChange={handleTransmissionChange}
              />

              <span className={css.customRadio}></span>
              <span className={css.optionText}>Manual</span>
            </label>
          </div>
        </fieldset>
      </div>

      <div className={css.actions}>
        <button className={css.searchBtn} type="submit">
          Search
        </button>

        <button
          className={css.clearBtn}
          type="button"
          onClick={handleClearFilters}
        >
          <IoCloseSharp className={css.xClose} />
          Clear filters
        </button>
      </div>
    </form>
  );
};

export default FiltersSidebar;
