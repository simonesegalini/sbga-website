import React, { useMemo } from "react";
import useMail, { IEmail } from "./useMail";
import DataScreen from "./content/dataScreen";
import SuccessScreen from "./content/SuccessScreen";

const Email = (props: IEmail) => {
  const { screen, styles, ...others } = useMail(props);
  const { onSuccess } = props;
  const { loading } = others;

  const Screen = useMemo(() => {
    if (screen === "success") {
      onSuccess && onSuccess();
      return <SuccessScreen />;
    }
    return <DataScreen {...others} />;
  }, [loading, others, screen]);

  return <div style={styles.mailContent}>{Screen}</div>;
};

export default Email;
