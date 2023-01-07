import useAxios from "axios-hooks";
import { Data, DataSchema, Types } from "../schemas";
import { useEffect, useMemo } from "react";
import { AxiosError } from "axios";
import { useGlobal } from "../state/global/useGlobal";

export const makeApiUrl = (url: string) => {
  return `/api/v1/rest${url}`;
};

interface IUseAllDataLaoder {
  data?: Data;
  loaded?: boolean;
  error?: AxiosError<boolean, boolean> | null;
}

const fromDataSchemaToData = (dataSchema: DataSchema): Data => {
  const data = dataSchema.data;
  return {
    [Types.architectures]: {
      image: data[0][Types.architectures].image,
      rows: data[0][Types.architectures].rows.map((row) => ({
        ...row,
        items: row.items.map((r) => ({
          ...r,
          type: Types.architectures,
        })),
      })),
    },
    [Types.design]: {
      image: data[1][Types.design].image,
      rows: data[1][Types.design].rows.map((row) => ({
        ...row,
        items: row.items.map((r) => ({
          ...r,
          type: Types.design,
        })),
      })),
    },
    [Types.services]: {
      image: data[2][Types.services].image,
      rows: data[2][Types.services].rows.map((row) => ({
        ...row,
        items: row.items.map((r) => ({
          ...r,
          type: Types.services,
        })),
      })),
    },
    [Types.portfolio]: {
      image: data[3][Types.portfolio].image,
      rows: data[3][Types.portfolio].rows.map((row) => ({
        ...row,
        items: row.items.map((r) => ({
          ...r,
          type: Types.portfolio,
        })),
      })),
    },
    about: data[4].about,
    team: data[5].team,
    home: data[6].home,
    settings: data[7].settings,
  };
};

export const useLoadingData = () => {
  const { setIsDataLoaded } = useGlobal();
  const [{ data, loading: loadingD, error: errorD }] = useAxios<
    DataSchema,
    boolean,
    boolean
  >({
    url: makeApiUrl(""),
    method: "GET",
  });

  const dataLoaded = useMemo(() => {
    return !loadingD;
  }, [loadingD]);

  useEffect(() => {
    if (!dataLoaded || !data) {
      return;
    }
    setIsDataLoaded({ data: fromDataSchemaToData(data) });
  }, [dataLoaded, data, setIsDataLoaded]);

  return {
    error: errorD,
  };
};

export const useAllDataLoader = (): IUseAllDataLaoder => {
  //useLandingPageDataLoader(); //** THIS HOOK MANAGES LOADING LANDING PAGE IMAGES **//
  const { error } = useLoadingData();
  return { error };
};
