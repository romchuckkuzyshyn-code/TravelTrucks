"use client";
import { ChangeEvent, useState } from "react";
import FiltersSidebar from "../../components/FiltersSidebar/FiltersSidebar";
import CampersList from "../../components/CampersList/CampersList";
import css from "./catalog.module.css";

const Page = () => {
  const [location, setLocation] = useState("");
  const [camperForm, setCamperForm] = useState("");
  const [engine, setEngine] = useState("");
  const [transmission, setTransmission] = useState("");
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    location: "",
    form: "",
    engine: "",
    transmission: "",
  });

  function handleLocationChange(e: ChangeEvent<HTMLInputElement>) {
    setLocation(e.target.value);
  }
  function handleFormChange(e: ChangeEvent<HTMLInputElement>) {
    setCamperForm(e.target.value);
  }
  function handleEngineChange(e: ChangeEvent<HTMLInputElement>) {
    setEngine(e.target.value);
  }
  function handleTransmissionChange(e: ChangeEvent<HTMLInputElement>) {
    setTransmission(e.target.value);
  }
  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    setFilters({
      location,
      form: camperForm,
      engine,
      transmission,
    });
    setPage(1);
  }
  function handleClearFilters() {
    setLocation("");
    setCamperForm("");
    setEngine("");
    setTransmission("");
    setFilters({
      location: "",
      form: "",
      engine: "",
      transmission: "",
    });
    setPage(1);
  }
  function handleClickMoreBtn() {
    setPage((prev) => prev + 1);
  }

  return (
    <div className={css.container}>
      <FiltersSidebar
        handleLocationChange={handleLocationChange}
        handleFormChange={handleFormChange}
        handleEngineChange={handleEngineChange}
        handleTransmissionChange={handleTransmissionChange}
        handleSubmit={handleSubmit}
        handleClearFilters={handleClearFilters}
        inputLocation={location}
        camperForm={camperForm}
        engine={engine}
        transmission={transmission}
      />
      <CampersList
        filters={filters}
        page={page}
        onLoadMore={handleClickMoreBtn}
      />
    </div>
  );
};

export default Page;
