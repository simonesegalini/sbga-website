import { Mail } from "../../../schemas";
import CustomTypography from "../CustomTypography/customTypography";
import { useContactMailStyle } from "./styles";
import CustomButton from "../Button/CustomButton";
import Box from "@mui/material/Box";
import { fromEmailTypeToEmailName } from "../../../utils";
import { useCallback } from "react";
import {useNavigation} from "../../../navigation/useNavigation";

interface IContactMail {
  mail: Mail;
}
const ContactMail = (props: IContactMail) => {
  const { mail } = props;
  const styles = useContactMailStyle();
  const { navigate } = useNavigation();

  const goToMailPage = useCallback(() => {
      navigate(`/contact/mail/${mail.title}`)
  }, [mail.title, navigate]);

  return (
    <div style={styles.container}>
      <CustomTypography
        style={{ ...styles.typography, ...styles.title }}
        fontWeight={"bold"}
      >
        {fromEmailTypeToEmailName(mail.title)}
      </CustomTypography>
      <Box component="div" mt={2}>
        <CustomTypography
          style={{ ...styles.typography, ...styles.subtitle }}
          fontWeight={"light"}
        >
          {mail.description}
        </CustomTypography>
      </Box>
      <Box component="div" mt={2} width={1}>
        <CustomButton style={styles.button} onClick={goToMailPage}>
          Write us an email...
        </CustomButton>
      </Box>
    </div>
  );
};

export default ContactMail;
