export enum Types {
  "architectures" = "architectures",
  "services" = "services",
  "design" = "design",
}

export interface Item {
  id: number;
  date: string;
  title: string;
  color_bcg?: string;
  img_header: Image;
  images: Image[];
  content: string;
  subtitle: string;
  status: string;
  client: string;
  type: Types;
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
  surname: string;
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

export enum MailTypes {
  general_enquiry = "general_enquiry",
  tendering_enquiry = "tendering_enquiry",
  press_contact = "press_contact",
  job_enquiry = "job_enquiry",
}

export type MailType = `${MailTypes}`;

export interface Mail {
  title: MailType;
  description: string;
}

export interface Settings {
  id: number;
  logo: Image;
  address: string;
  cap: string;
  city: string;
  nation: string;
  vat: string;
  mail_types: Mail[];
  link_facebook: string;
  link_instagram: string;
  link_linkedin: string;
}

export interface Data {
  [Types.architectures]: {
    image: Image;
    rows: Row[];
  };
  [Types.services]: {
    image: Image;
    rows: Row[];
  };
  [Types.design]: {
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
