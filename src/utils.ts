import { MailType, MailTypes, Types } from "./schemas";
import { Paths } from "./navigation/types";

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
    case Paths.Services:
      return Types.services;
    default:
      return;
  }
};

export const fromEmailTypeToEmailName = (type: MailType) => {
  switch (type) {
    case MailTypes.general_enquiry:
      return MailTypes.general_enquiry.replace("_", " ");
    case MailTypes.job_enquiry:
      return MailTypes.job_enquiry.replace("_", " ");
    case MailTypes.press_contact:
      return MailTypes.press_contact.replace("_", " ");
    case MailTypes.tendering_enquiry:
      return MailTypes.tendering_enquiry.replace("_", " ");
  }
};
