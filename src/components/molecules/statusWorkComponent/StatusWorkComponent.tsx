import CustomTypography from "../../atoms/CustomTypography/customTypography";
import { useStatusWorkComponentStyle } from "./styles";
import { useCallback } from "react";

interface IStatusWorkComoponent {
  date: string;
  status: string;
  client: string;
  place: string;
}

const StatusWorkComponent = (props: IStatusWorkComoponent) => {
  const { date, client, status, place } = props;
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
      <div style={{ marginTop: 8 }}> {Line("LOCATION", place)}</div>
      {Line("DATE", date)}
      <div style={{ marginTop: 8 }}> {Line("STATUS", status)}</div>
      <div style={{ marginTop: 8 }}> {Line("CLIENT", client)}</div>
    </>
  );
};

export default StatusWorkComponent;
