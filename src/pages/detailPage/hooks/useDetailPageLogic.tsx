import { Item } from "../../../schemas";
import { useGlobal } from "../../../state/global/useGlobal";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import { useGetPath } from "../../../hooks/useGetPath";
import { getSubtitleFromTypes, getTypeFromBasePath } from "../../../utils";
import { Paths } from "../../../navigation/types";
import HeaderImageComponent from "../../../components/atoms/HeaderImageComponent/headerImageComponent";
import { Grid } from "@mui/material";
import StatusWorkComponent from "../../../components/molecules/statusWorkComponent/StatusWorkComponent";
import { useDetailPageStyle } from "../styles";
import ImageWithLoader from "../../../components/atoms/Image/Image";
import CustomTypography from "../../../components/atoms/CustomTypography/customTypography";
import { useNavigation } from "../../../navigation/useNavigation";

type DetailPageParams = {
  id: string;
};

export const useDetailPageLogic = () => {
  const { data } = useGlobal();
  const goHomeRef = useRef<boolean>(false);
  const { id } = useParams<DetailPageParams>();
  const path = useGetPath();
  const { navigate } = useNavigation();
  const styles = useDetailPageStyle();

  useEffect(() => {
    if (goHomeRef.current) {
      return navigate(Paths.Home);
    }
  }, [navigate]);

  const renderComponent = useCallback(
    (item: Item) => {
      const {
        img_header,
        title,
        types,
        date,
        status,
        client,
        images,
        content,
      } = item;
      return (
        <>
          <HeaderImageComponent
            image={img_header}
            showLogo={false}
            title={title}
            subtitle={getSubtitleFromTypes(types)}
          />
          <Grid container style={styles.gridContainer}>
            <Grid item xs={12} md={3} style={styles.contentContainer}>
              <StatusWorkComponent
                date={date}
                status={status}
                client={client}
              />
              <CustomTypography style={styles.contentTxt} fontWeight="light">
                {content}
              </CustomTypography>
            </Grid>
            <Grid item xs={12} md={9}>
              {images.map((image, index) => (
                <React.Fragment key={index}>
                  <ImageWithLoader
                    src={image.image}
                    alt={image.image_alt}
                    x_position={image.x_position}
                    y_position={image.y_position}
                    imgContainerStyle={{
                      ...styles.img,
                      marginTop: index !== 0 ? 60 : 0,
                    }}
                  />
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </>
      );
    },
    [
      styles.contentContainer,
      styles.contentTxt,
      styles.gridContainer,
      styles.img,
    ]
  );

  const DetailPage = useMemo(() => {
    if (!path) {
      goHomeRef.current = true;
      return;
    }
    const type = getTypeFromBasePath(path);

    if (!type) {
      goHomeRef.current = true;
      return;
    }
    const { rows } = data![type];

    let item: Item | undefined = undefined;
    rows.forEach((row) => {
      row.items.forEach((i) => {
        if (i.id.toString() === id) {
          item = i;
        }
      });
    });
    if (!item) {
      goHomeRef.current = true;
      return;
    }
    return renderComponent(item);
  }, [data, id, path, renderComponent]);

  return {
    DetailPage,
    styles,
  };
};
