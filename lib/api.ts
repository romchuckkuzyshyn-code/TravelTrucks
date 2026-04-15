import axios from "axios";
import { Camper, CampersResponse } from "../types/campersType";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
const endpoint = "/campers";
const url = BASE_URL + endpoint;

export const getCampers = async () => {
  const res = await axios.get<CampersResponse>(url);
  return res.data;
};

export const getCamperById = async (id: string) => {
  const res = await axios.get<Camper>(`${url}/${id}`);
  return res.data;
};
