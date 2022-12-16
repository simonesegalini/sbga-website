import useAxios from "axios-hooks";
import { Data, DataSchema, HomeSchema, Settings } from "../schemas";
import { useEffect, useMemo } from "react";
import { AxiosError } from "axios";
import { useGlobal } from "../state/global/useGlobal";

export const makeApiUrl = (url: string) => {
  return `/api/v1${url}`;
};

interface IUseAllDataLaoder {
  data?: DataSchema;
  loaded?: boolean;
  error?: AxiosError<boolean, boolean> | null;
}

export const useLoadingData = () => {
  const { setIsDataLoaded } = useGlobal();
  const [{ data, loading: loadingD, error: errorD }] = useAxios<
    Data[],
    boolean,
    boolean
  >({
    url: makeApiUrl("/data"),
    method: "GET",
  });

  const [{ data: home, loading: loadingH, error: errorH }] = useAxios<
    HomeSchema[],
    boolean,
    boolean
  >({
    url: makeApiUrl("/home"),
    method: "GET",
  });
  const [{ data: settings, loading: loadingS, error: errorS }] = useAxios<
    Settings[],
    boolean,
    boolean
  >({
    url: makeApiUrl("/settings"),
    method: "GET",
  });

  const dataLoaded = useMemo(() => {
    return !loadingH || !loadingS || !loadingD;
  }, [loadingH, loadingS, loadingD]);

  useEffect(() => {
    if (!dataLoaded || !home || !settings || !data) {
      return;
    }
    setIsDataLoaded({ data: { data, home, settings } });
  }, [dataLoaded, home, data, setIsDataLoaded, settings]);

  return {
    error: errorH || errorS || errorD,
  };
};

export const useAllDataLoader = (): IUseAllDataLaoder => {
  //useLandingPageDataLoader(); //** THIS HOOK MANAGES LOADING LANDING PAGE IMAGES **//
  const { error } = useLoadingData();
  return { error };
};
