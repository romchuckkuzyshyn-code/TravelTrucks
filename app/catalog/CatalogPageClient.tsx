"use client";
import CampersList from "@/components/CampersList/CampersList";
import css from "./catalog.module.css";
import FiltersSidebar from "@/components/FiltersSidebar/FiltersSidebar";
import { ChangeEvent, useState } from "react";

const CatalogPageClient = () => {
  const [location, setLocation] = useState("");
  const [camperForm, setCamperForm] = useState("");
  const [engine, setEngine] = useState("");
  const [transmission, setTransmission] = useState("");
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
      <CampersList filters={filters} />
    </div>
  );
};

export default CatalogPageClient;
