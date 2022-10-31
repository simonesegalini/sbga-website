import useAxios from "axios-hooks";
import { DataSchema, HomeSchema, Settings } from "../schemas";
import { useEffect, useMemo } from "react";
import { AxiosError } from "axios";
import { useGlobal } from "../state/global/useGlobal";
import { useLandingPageDataLoader } from "../pages/landingPage/hooks/useLandingPagePageDataLoader";

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
    return !loadingH || !loadingS;
  }, [loadingH, loadingS]);

  useEffect(() => {
    if (!dataLoaded || !home || !settings) {
      return;
    }
    setIsDataLoaded({ data: { home, settings } });
  }, [dataLoaded, home, setIsDataLoaded, settings]);

  return {
    error: errorH || errorS,
  };
};

export const useAllDataLoader = (): IUseAllDataLaoder => {
  useLandingPageDataLoader(); //** THIS HOOK MANAGES LOADING LANDING PAGE IMAGES **//
  const { error } = useLoadingData();
  return { error };
};
