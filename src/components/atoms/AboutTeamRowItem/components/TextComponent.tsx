import { useAboutItemStyle } from "../styles";
import CustomTypography from "../../CustomTypography/customTypography";

interface ITextComponentProps {
  text: string;
}

const TextComponent = (props: ITextComponentProps) => {
  const { text } = props;
  const styles = useAboutItemStyle();

  return (
    <div
      style={{
        ...styles.textContainer,
      }}
    >
      <CustomTypography style={styles.text} fontWeight={"light"}>
        {text}
      </CustomTypography>
    </div>
  );
};

export default TextComponent;
