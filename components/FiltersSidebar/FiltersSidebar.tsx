import css from "./FiltersSidebar.module.css";

const FiltersSidebar = () => {
  return (
    <form>
      <div>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          name="location"
          value={location}
          onChange={handleLocationChange}
        />
      </div>

      <h3>Filters</h3>

      <fieldset>
        <legend>Camper form</legend>

        <label>
          <input
            type="radio"
            name="form"
            value="Alcove"
            checked={form === "Alcove"}
            onChange={handleFormChange}
          />
          Alcove
        </label>

        <label>
          <input
            type="radio"
            name="form"
            value="Panel Van"
            checked={form === "Panel Van"}
            onChange={handleFormChange}
          />
          Panel Van
        </label>

        <label>
          <input
            type="radio"
            name="form"
            value="Integrated"
            checked={form === "Integrated"}
            onChange={handleFormChange}
          />
          Integrated
        </label>

        <label>
          <input
            type="radio"
            name="form"
            value="Semi Integrated"
            checked={form === "Semi Integrated"}
            onChange={handleFormChange}
          />
          Semi Integrated
        </label>
      </fieldset>

      <fieldset>
        <legend>Engine</legend>

        <label>
          <input
            type="radio"
            name="engine"
            value="Diesel"
            checked={engine === "Diesel"}
            onChange={handleEngineChange}
          />
          Diesel
        </label>

        <label>
          <input
            type="radio"
            name="engine"
            value="Petrol"
            checked={engine === "Petrol"}
            onChange={handleEngineChange}
          />
          Petrol
        </label>

        <label>
          <input
            type="radio"
            name="engine"
            value="Hybrid"
            checked={engine === "Hybrid"}
            onChange={handleEngineChange}
          />
          Hybrid
        </label>

        <label>
          <input
            type="radio"
            name="engine"
            value="Electric"
            checked={engine === "Electric"}
            onChange={handleEngineChange}
          />
          Electric
        </label>
      </fieldset>

      <fieldset>
        <legend>Transmission</legend>

        <label>
          <input
            type="radio"
            name="transmission"
            value="Automatic"
            checked={transmission === "Automatic"}
            onChange={handleTransmissionChange}
          />
          Automatic
        </label>

        <label>
          <input
            type="radio"
            name="transmission"
            value="Manual"
            checked={transmission === "Manual"}
            onChange={handleTransmissionChange}
          />
          Manual
        </label>
      </fieldset>

      <div>
        <button type="submit">Search</button>
        <button type="button">Clear filters</button>
      </div>
    </form>
  );
};

export default FiltersSidebar;
