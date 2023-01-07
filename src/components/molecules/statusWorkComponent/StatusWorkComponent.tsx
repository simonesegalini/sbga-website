import CustomTypography from "../../atoms/CustomTypography/customTypography";
import { useStatusWorkComponentStyle } from "./styles";
import { useCallback } from "react";

interface IStatusWorkComoponent {
  date: string;
  status: string;
  client: string;
}

const StatusWorkComponent = (props: IStatusWorkComoponent) => {
  const { date, client, status } = props;
  const styles = useStatusWorkComponentStyle();

  const Line = useCallback(
    (title: string, value: string) => {
      return (
        <>
          {value ? (
            <CustomTypography style={styles.txt} fontWeight={"bold"}>
              {title} {value}
            </CustomTypography>
          ) : (
            <></>
          )}
        </>
      );
    },
    [styles.txt]
  );

  return (
    <>
      {Line("DATE", date)}
      {Line("STATUS", status)}
      {Line("CLIENT", client)}
    </>
  );
};

export default StatusWorkComponent;
