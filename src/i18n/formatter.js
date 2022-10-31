import i18n from "i18next";
import config from "../config/config";

export const getFormattedValue = (attribute, value) => {
  if (config.number0DigitAttributes.includes(attribute)) return i18n.t("formatters:number0Digit", { number: value });
  if (config.number1DigitAttributes.includes(attribute)) return i18n.t("formatters:number1Digit", { number: value });
  if (config.number2DigitAttributes.includes(attribute)) return i18n.t("formatters:number2Digit", { number: value });

  if (config.number3DigitAttributes.includes(attribute)) return i18n.t("formatters:number3Digit", { number: value });
  if (config.number4DigitAttributes.includes(attribute)) return i18n.t("formatters:number4Digit", { number: value });
  if (config.number5DigitAttributes.includes(attribute)) return i18n.t("formatters:number5Digit", { number: value });
  return value;
};
