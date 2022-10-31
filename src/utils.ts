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
