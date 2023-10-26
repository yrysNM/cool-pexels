import { request } from "@/utils/https";

export interface IPexels {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
}

export const getPexels = async (per_page: number) => {
  const pexels = await request<IPexels, {}>(`curated?per_page=${per_page}`, {});

  return pexels;
};
