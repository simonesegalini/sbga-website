import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useMailPageStyle } from "./styles";
import { Paths } from "../../navigation/types";
import { useNavigation } from "../../navigation/useNavigation";
import { useGlobal } from "../../state/global/useGlobal";

interface IUseMailPage {
  type?: string;
}

export const useMailPage = (props: IUseMailPage) => {
  const { type } = props;
  const { data } = useGlobal();
  const { settings } = data!;
  const { mail_types } = settings;
  const styles = useMailPageStyle();
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const [showContactLabel, setShowContactLabel] = useState(true);

  const mail = useMemo(() => {
    return mail_types.find((mail) => mail.id.toString() === type);
  }, [mail_types, type]);

  useEffect(() => {
    if (!mail) {
      navigate(Paths.Home);
    }
  }, [mail, mail_types, navigate, type]);

  const title = useMemo(() => {
    if (!type || !mail) {
      return "";
    }

    return mail.title;
  }, [mail, type]);

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
