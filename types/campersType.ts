export interface CampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  amenities: string[];
  coverImage: string;
  totalReviews: number;
}
export interface CamperGallery {
  thumb: string;
  original: string;
}

export interface CamperReview {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface GetCampersParams {
  page?: number;
  perPage?: number;
  location?: string;
  form?: string;
  engine?: string;
  transmission?: string;
}
