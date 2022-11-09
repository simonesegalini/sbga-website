import { useMemo } from "react";
import { IAboutRowItem, ITeamRowItem } from "./types";
import { useAboutItemStyle } from "./styles";
import TextComponent from "./components/TextComponent";
import ImageComponent from "./components/ImageComponent";
import { useDimensions } from "../../../hooks/useDimensions";

const AboutTeamRowItem = (props: IAboutRowItem | ITeamRowItem) => {
  const { index, image, text } = props;
  const styles = useAboutItemStyle();
  const { isSmall } = useDimensions();

  const LeftComponent = useMemo(() => {
    return (
      <>
        <ImageComponent image={image} />
        <TextComponent text={text} />
      </>
    );
  }, [image, text]);

  const RightComponent = useMemo(() => {
    return (
      <>
        <TextComponent text={text} />
        <ImageComponent image={image} right={true} />
      </>
    );
  }, [image, text]);

  const MainComponent = useMemo(() => {
    if (isSmall) {
      return (
        <>
          <ImageComponent image={image} />
          <TextComponent text={text} />
        </>
      );
    }

    return index % 2 === 0 ? LeftComponent : RightComponent;
  }, [LeftComponent, RightComponent, image, index, isSmall, text]);

  return <div style={styles.container}>{MainComponent}</div>;
};

export default AboutTeamRowItem;
