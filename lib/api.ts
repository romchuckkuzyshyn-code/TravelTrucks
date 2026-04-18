import axios from "axios";
import {
  Camper,
  CamperDetails,
  CampersResponse,
  GetCampersParams,
  GetReviews,
} from "../types/campersType";

const BASE_URL = "https://campers-api.goit.study";
const endpoint = "/campers";
const url = BASE_URL + endpoint;

export const getCampers = async ({
  page = 1,
  perPage = 4,
  location,
  form,
  engine,
  transmission,
}: GetCampersParams): Promise<CampersResponse> => {
  const params: Record<string, string | number> = {
    page,
    perPage,
  };
  if (location) params.location = location;
  if (form) params.form = form;
  if (engine) params.engine = engine;
  if (transmission) params.transmission = transmission;
  const res = await axios.get<CampersResponse>(url, {
    params,
  });

  return res.data;
};

export const getCamperById = async (id: string) => {
  const res = await axios.get<CamperDetails>(`${url}/${id}`);
  return res.data;
};

export const getCamperReviewsById = async (id: string) => {
  const res = await axios.get<GetReviews[]>(`${url}/${id}/reviews`);
  return res.data;
};
