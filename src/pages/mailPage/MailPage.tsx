import { useMailPage } from "./useMailPage";
import AnimatedPage from "../../components/templates/AnimatedPage";
import { Paths } from "../../navigation/types";
import CustomTypography from "../../components/atoms/CustomTypography/customTypography";
import Mail from "../../components/molecules/mail/Mail";
import { useParams } from "react-router-dom";
import { MailType } from "../../schemas";

type MailPageParams = {
  type: MailType;
};

const MailPage = () => {
  const { type } = useParams<MailPageParams>();
  const { styles, showContactLabel, t, title, hideContact } = useMailPage({
    type,
  });

  return (
    <AnimatedPage key={Paths.Contact} style={styles.container}>
      <>
        <div style={styles.formContainer}>
          <div style={styles.componentContainer}>
            {showContactLabel && (
              <>
                <CustomTypography style={styles.contactText}>
                  {t("label.contact").toUpperCase()}
                </CustomTypography>
                <CustomTypography style={styles.mailText}>
                  {title}
                </CustomTypography>
              </>
            )}
            {type ? <Mail type={type} onSuccess={hideContact} /> : <></>}
          </div>
        </div>
      </>
    </AnimatedPage>
  );
};

export default MailPage;
