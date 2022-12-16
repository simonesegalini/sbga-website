import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useMailPageStyle } from "./styles";
import { MailType, MailTypes } from "../../schemas";
import { Paths } from "../../navigation/types";
import { useNavigation } from "../../navigation/useNavigation";

interface IUseMailPage {
  type?: MailType;
}

export const useMailPage = (props: IUseMailPage) => {
  const { type } = props;
  const styles = useMailPageStyle();
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const [showContactLabel, setShowContactLabel] = useState(true);

  useEffect(() => {
    if (!type || !Object.keys(MailTypes).includes(type)) {
      navigate(Paths.Home);
    }
  }, [navigate, type]);

  const title = useMemo(() => {
    if (!type) {
      return "";
    }

    return type.replace("_", " ");
  }, [type]);

  const hideContact = useCallback(() => {
    setShowContactLabel(false);
  }, []);

  return {
    styles,
    t,
    title: title.toUpperCase(),
    showContactLabel,
    hideContact,
  };
};
