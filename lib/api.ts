import axios from "axios";
import { Camper, CampersResponse } from "../types/campersType";

const BASE_URL = "https://campers-api.goit.study";
const endpoint = "/campers";
const url = BASE_URL + endpoint;
const options = {
  params: {
    page: 1,
    perPage: 4,
  },
};
export const getCampers = async () => {
  const res = await axios.get<CampersResponse>(url, options);
  return res.data;
};

export const getCamperById = async (id: string) => {
  const res = await axios.get<Camper>(`${url}/${id}`);
  return res.data;
};
