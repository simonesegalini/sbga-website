import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import intervalPlural from "i18next-intervalplural-postprocessor";
import translation_en from "./locales/en/translation.json";
import translation_it from "./locales/it/translation.json";
import formatters from "./locales/en/formatters.json";

const resources = {
  en: {
    translation: translation_en,
    formatters: formatters,
  },
  it: {
    translation: translation_it,
    formatters: formatters,
  },
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // for interval in plurals, used for a different translation when count is zero
  .use(intervalPlural)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: "en",
    fallbackLng: "en",
    returnEmptyString: false,
    debug: true,
    resources: resources,
    interpolation: {
      format: (value, format, lng) => {
        if (format === "intlDateTime") {
          return new Intl.DateTimeFormat(lng, {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
            .format(value)
            .concat(" ")
            .concat(
              new Intl.DateTimeFormat(lng, {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }).format(value)
            );
        }
        if (format === "intlDate") {
          return new Intl.DateTimeFormat(lng, {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }).format(value);
        }
        if (format === "intlTime") {
          return new Intl.DateTimeFormat(lng, {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }).format(value);
        }
        if (format === "intlDateLong") {
          return new Intl.DateTimeFormat(lng, {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(value);
        }
        if (format === "intlNumberMax2Digit") {
          return new Intl.NumberFormat(lng, {
            maximumFractionDigits: 2,
          }).format(value);
        }
        if (format === "intlNumber0Digit") {
          return new Intl.NumberFormat(lng, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(value);
        }
        if (format === "intlNumber1Digit") {
          return new Intl.NumberFormat(lng, {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          }).format(value);
        }
        if (format === "intlNumber2Digit") {
          return new Intl.NumberFormat(lng, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(value);
        }
        if (format === "intlNumber3Digit") {
          return new Intl.NumberFormat(lng, {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
          }).format(value);
        }
        if (format === "intlNumber4Digit") {
          return new Intl.NumberFormat(lng, {
            minimumFractionDigits: 4,
            maximumFractionDigits: 4,
          }).format(value);
        }
        if (format === "intlNumber5Digit") {
          return new Intl.NumberFormat(lng, {
            minimumFractionDigits: 5,
            maximumFractionDigits: 5,
          }).format(value);
        }
        return value;
      },
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
