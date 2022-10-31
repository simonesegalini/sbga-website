import { Language } from "./state/global/global.types";

export interface HomeData {
  title_it: string;
  title_en: string;
  image_thumbnail: Image;
}

export interface HomeSchema extends Record<string, any> {
  id: number;
  img_background: Image;
  data: Array<HomeData>;
}

export interface Settings {
  id: number;
  email: string;
  languages: Language;
  link_facebook: string;
  link_instagram: string;
  link_linkedin: string;
}

export interface DataSchema {
  home: HomeSchema[];
  settings: Settings[];
}

export interface Image {
  id: number;
  image: string;
  image_alt: string;
}
