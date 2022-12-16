import { useDetailPageLogic } from "./hooks/useDetailPageLogic";
import { Paths } from "../../navigation/types";
import AnimatedPage from "../../components/templates/AnimatedPage";

const DetailPage = () => {
  const { DetailPage, styles } = useDetailPageLogic();
  return (
    <AnimatedPage key={Paths.ArchitectureDetail} style={styles.body}>
      <>{DetailPage}</>
    </AnimatedPage>
  );
};

export default DetailPage;
