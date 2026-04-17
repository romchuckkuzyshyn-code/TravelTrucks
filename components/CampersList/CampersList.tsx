"use client";
import { useEffect, useState } from "react";
import css from "./CampersList.module.css";
import { Camper } from "../../types/campersType";
import { useQuery } from "@tanstack/react-query";
import { getCampers } from "../../lib/api";
import Image from "next/image";
import { FaCar, FaGasPump, FaRegMap, FaStar } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";
import Link from "next/link";

interface CampersListProps {
  filters: {
    location: string;
    form: string;
    engine: string;
    transmission: string;
  };
  page: number;
  onLoadMore: () => void;
}
const CampersList = ({ filters, page, onLoadMore }: CampersListProps) => {
  const [visibleCampers, setVisibleCampers] = useState<Camper[]>([]);
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
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (!data?.campers) return;

    if (page === 1) {
      setVisibleCampers(data.campers);
    } else {
      setVisibleCampers((prev) => [...prev, ...data.campers]);
    }
  }, [data, page]);

  return (
    <div>
      <ul className={css.camperList}>
        {visibleCampers.map((camper) => {
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
                    <p className={css.rating}>
                      <FaStar className={css.starIcon} />
                      {camper.rating}({camper.totalReviews} Reviews)
                    </p>

                    <p className={css.location}>
                      <FaRegMap className={css.mapFind} />
                      {camper.location}
                    </p>
                  </div>

                  <p className={css.description}>{camper.description}</p>

                  <ul className={css.features}>
                    <li className={css.feature}>
                      <FaGasPump className={css.gas} />
                      {camper.engine.charAt(0).toUpperCase() +
                        camper.engine.slice(1)}
                    </li>
                    <li className={css.feature}>
                      <TbManualGearbox className={css.gas} />
                      {camper.transmission.charAt(0).toUpperCase() +
                        camper.transmission.slice(1)}
                    </li>
                    <li className={css.feature}>
                      <FaCar className={css.gas} />
                      {camper.form
                        .split("_")
                        .map(
                          (word) =>
                            word.charAt(0).toUpperCase() + word.slice(1),
                        )
                        .join(" ")}
                    </li>
                  </ul>

                  <Link
                    href={`/catalog/${camper.id}`}
                    className={css.button}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Show more
                  </Link>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
      {data && data.totalPages > 1 && page < data.totalPages && (
        <button className={css.loadMoreBtn} type="button" onClick={onLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CampersList;
