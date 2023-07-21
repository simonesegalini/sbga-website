import { MailTypes, Types } from "./schemas";
import { Paths } from "./navigation/types";
import { LatLngTuple } from "leaflet";

export const consoleHelper = (message?: any, ...optionalParams: any[]) => {
  if (process.env.NODE_ENV === "production") return;
  console.log(message, ...optionalParams);
};

export const getPropertyByLanguage = (
  dataObject: any,
  property: string,
  language: string
) => {
  const prop = property + language;
  return dataObject[prop];
};

export const createMarkup = (html?: string) => {
  if (!html) {
    return;
  }
  return {
    __html: html,
  };
};

export const getBasePathFromType = (type: Types) => {
  switch (type) {
    case Types.architectures:
      return Paths.Architecture;
    case Types.design:
      return Paths.Design;
    case Types.services:
      return Paths.Services;
    case Types.portfolio:
      return Paths.Portfolio;
    default:
      return Paths.Home;
  }
};

export const getTypeFromBasePath = (path: Paths) => {
  switch (path) {
    case Paths.ArchitectureDetail:
      return Types.architectures;
    case Paths.DesignDetail:
      return Types.design;
    case Paths.ServicesDetail:
      return Types.services;
    case Paths.PortfolioDetail:
      return Types.portfolio;
    default:
      return;
  }
};

export const fromEmailNameToEmailRoute = (type: any) => {
  switch (type) {
    case "General enquiry":
      return MailTypes.general_enquiry;
    case "Job enquiry":
      return MailTypes.job_enquiry;
    case "Press contact":
      return MailTypes.press_contact;
    case "Tendering enquiry":
      return MailTypes.tendering_enquiry;
    default:
      return MailTypes.general_enquiry;
  }
};

export const getSubtitleFromTypes = (types: Types[]) => {
  const getType = (type: Types) => {
    switch (type) {
      case Types.architectures:
        return "Architecture";
      case Types.services:
        return "Service";
      case Types.design:
        return "Design";
      default:
        return "";
    }
  };
  let s = "";
  types.map((t, index) => {
    if (index !== 0) {
      s = s + `\\`;
    }
    s = s + getType(t);
  });
  return s;
};

export const chunkArray = <T>(arr: T[], chunk_size: number): T[][] => {
  let index: number | undefined;
  const arrayLength = arr.length;
  const tempArray = [];
  for (index = 0; index < arrayLength; index += chunk_size) {
    const myChunk = arr.slice(index, index + chunk_size);
    tempArray.push(myChunk);
  }
  return tempArray;
};

export const addressLatLngPosition: LatLngTuple = [
  45.45353138165518, 9.164999857718554,
];
