"use client";
import { useEffect, useState } from "react";
import css from "./CampersList.module.css";
import { Camper } from "../../types/campersType";
import { useQuery } from "@tanstack/react-query";
import { getCampers } from "../../lib/api";
import Image from "next/image";

interface CampersListProps {
  filters: {
    location: string;
    form: string;
    engine: string;
    transmission: string;
  };
  page: number;
}
const CampersList = ({ filters, page }: CampersListProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getCampers", filters, page],
    queryFn: () =>
      getCampers({
        page,
        perPage: 4,
        location: filters.location,
        form: filters.form,
        engine: filters.engine,
        transmission: filters.transmission,
      }),
  });

  return (
    <ul className={css.camperList}>
      {data?.campers.map((camper) => {
        return (
          <li key={camper.id} className={css.item}>
            <article className={css.card}>
              <Image
                className={css.image}
                src={camper.coverImage}
                alt={camper.name}
                width={219}
                height={240}
              />

              <div className={css.content}>
                <div className={css.topRow}>
                  <h2 className={css.name}>{camper.name}</h2>
                  <p className={css.price}>€{camper.price}</p>
                </div>

                <div className={css.infoRow}>
                  <p className={css.rating}>⭐ {camper.rating}</p>
                  <p className={css.location}>{camper.location}</p>
                </div>

                <p className={css.description}>{camper.description}</p>

                <ul className={css.features}>
                  <li className={css.feature}>{camper.engine}</li>
                  <li className={css.feature}>{camper.transmission}</li>
                  <li className={css.feature}>{camper.form}</li>
                </ul>

                <button className={css.button} type="button">
                  Show more
                </button>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

export default CampersList;
