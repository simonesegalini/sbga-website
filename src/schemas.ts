export interface Item {
  id: number;
  title: string;
  color_bcg?: string;
  img_header: Image;
  images: Image[];
  content: string;
  subtitle: string;
}

export interface Row {
  id: number;
  items: Item[];
}

export interface AboutRow {
  id: number;
  image: Image;
  text: string;
}

export interface TeamRow {
  id: number;
  image: Image;
  text: string;
}

export interface Person {
  img_thumbnail: Image;
  name: string;
  role: string;
  bio?: string;
  isBoss?: boolean;
}

export interface HomeData {
  name: string;
  img: Image;
}

export interface HomeSchema extends Record<string, any> {
  id: number;
  img_thumbnail: Image;
  categories: Array<HomeData>;
}

export interface Settings {
  id: number;
  logo: Image;
  address: string;
  cap: string;
  city: string;
  nation: string;
  vat: string;
  mail_types: string[];
  link_facebook: string;
  link_instagram: string;
  link_linkedin: string;
}

export interface Data {
  architectures: {
    image: Image;
    rows: Row[];
  };
  services: {
    image: Image;
    rows: Row[];
  };
  design: {
    image: Image;
    rows: Row[];
  };
  about: {
    image_top: Image;
    image_bottom: Image;
    rows: AboutRow[];
  };
  team: {
    image: Image;
    rows: TeamRow[];
    data: Person[];
  };
}

export interface DataSchema {
  data: Data[];
  home: HomeSchema[];
  settings: Settings[];
}

export interface Image {
  id: number;
  image: string;
  image_alt: string;
  x_position?: number;
  y_position?: number;
}
