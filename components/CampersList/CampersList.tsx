"use client";
import css from "./CampersList.module.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getCampers } from "../../lib/api";
import Image from "next/image";
import { FaCar, FaGasPump, FaRegMap, FaStar } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";
import Link from "next/link";
import Loader from "../Loader/Loader";

interface CampersListProps {
  filters: {
    location: string;
    form: string;
    engine: string;
    transmission: string;
  };
}

const CampersList = ({ filters }: CampersListProps) => {
  const {
    data,
    isPending,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["getCampers", filters],
    queryFn: ({ pageParam }) =>
      getCampers({
        page: pageParam,
        perPage: 4,
        location: filters.location,
        form: filters.form,
        engine: filters.engine,
        transmission: filters.transmission,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.totalPages
        ? lastPage.page + 1
        : undefined;
    },
  });

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  if (isPending) {
    return (
      <div className={css.loaderWrap}>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <div>
      <ul className={css.camperList}>
        {campers.map((camper) => {
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

      {hasNextPage && (
        <button
          className={css.loadMoreBtn}
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
};

export default CampersList;
