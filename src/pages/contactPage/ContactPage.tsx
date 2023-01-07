import { useContactPageStyle } from "./styles";
import { Paths } from "../../navigation/types";
import AnimatedPage from "../../components/templates/AnimatedPage";
import MapComponent from "../../components/atoms/Map/MapComponent";
import { Grid } from "@mui/material";
import { useGlobal } from "../../state/global/useGlobal";
import ContactMail from "../../components/atoms/ContactMail/ContactMail";
import Box from "@mui/material/Box";

const ContactPage = () => {
  const { data } = useGlobal();

  const { mail_types } = data!.settings;
  const styles = useContactPageStyle();

  return (
    <AnimatedPage key={Paths.Contact}>
      <>
        <div style={styles.mapContainer}>
          <MapComponent />
        </div>
        <Grid container style={styles.gridContainer}>
          {mail_types.map((mail, index) => (
            <Grid
              item
              xs={12}
              md={6}
              style={{
                ...styles.gridItem,
                paddingBottom:
                  index === mail_types.length - 1
                    ? styles.paddingBottomValue.paddingBottom
                    : 0,
              }}
              key={index}
            >
              <Box component="div" style={styles.contactMail}>
                <ContactMail mail={mail} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </>
    </AnimatedPage>
  );
};

export default ContactPage;
