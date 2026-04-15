"use client";
import { ChangeEvent, useState } from "react";
import FiltersSidebar from "../../components/FiltersSidebar/FiltersSidebar";
import CampersList from "../../components/CampersList/CampersList";

const Page = () => {
  const [location, setLocation] = useState("");
  const [camperForm, setCamperForm] = useState("");
  const [engine, setEngine] = useState("");
  const [transmission, setTransmission] = useState("");
  const [formValue, setFormValue] = useState({});
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

    const filters = {
      location,
      form: camperForm,
      engine,
      transmission,
    };
    setFormValue(filters);
  }
  function handleClearFilters() {
    setLocation("");
    setCamperForm("");
    setEngine("");
    setTransmission("");
  }

  return (
    <>
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
        filters={{
          location,
          form: camperForm,
          engine,
          transmission,
        }}
      />
    </>
  );
};

export default Page;
