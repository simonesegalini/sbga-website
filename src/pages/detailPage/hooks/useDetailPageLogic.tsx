import { Item } from "../../../schemas";
import { useGlobal } from "../../../state/global/useGlobal";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import { useGetPath } from "../../../hooks/useGetPath";
import {
  getPathToNavigate,
  getSubtitleFromTypes,
  getTypeFromBasePath,
} from "../../../utils";
import { Paths } from "../../../navigation/types";
import HeaderImageComponent from "../../../components/atoms/HeaderImageComponent/headerImageComponent";
import { Divider, Grid } from "@mui/material";
import StatusWorkComponent from "../../../components/molecules/statusWorkComponent/StatusWorkComponent";
import { useDetailPageStyle } from "../styles";
import ImageWithLoader from "../../../components/atoms/Image/Image";
import CustomTypography from "../../../components/atoms/CustomTypography/customTypography";
import { useNavigation } from "../../../navigation/useNavigation";
import { Helmet } from "react-helmet";
import DetailPageButton from "../../../components/atoms/DetailPageButton/DetailPageButton";
import { useDimensions } from "../../../hooks/useDimensions";

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
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "xs";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (goHomeRef.current) {
      return navigate(Paths.Home);
    }
  }, [navigate]);

  const openNewDetail = useCallback(
    (item: Item) => {
      const path = getPathToNavigate(item);
      if (path === Paths.Home) {
        navigate(Paths.Home);
        return;
      }
      navigate(path);
    },
    [navigate]
  );

  const renderButtons = useCallback(
    (prevItem: Item | undefined, nextItem: Item | undefined) => {
      return (
        <>
          <Grid item xs={12} sm={6} style={styles.contentContainer}>
            {prevItem && (
              <DetailPageButton
                label={"Previous"}
                title={prevItem.title}
                types={prevItem.types}
                onClick={() => openNewDetail(prevItem)}
              />
            )}
          </Grid>
          {prevItem && nextItem && isSmall && (
            <Grid item xs={12} sm={0}>
              <Divider style={styles.divider} variant={"inset"} />
            </Grid>
          )}
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              ...styles.contentContainer,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {nextItem && (
              <DetailPageButton
                label={"Next"}
                title={nextItem.title}
                types={nextItem.types}
                style={{ direction: "rtl" }}
                onClick={() => openNewDetail(nextItem)}
              />
            )}
          </Grid>
        </>
      );
    },
    [isSmall, openNewDetail, styles.contentContainer, styles.divider]
  );

  const renderComponent = useCallback(
    (items: {
      prevItem: Item | undefined;
      item: Item | undefined;
      nextItem: Item | undefined;
    }) => {
      if (!items.item) {
        return <></>;
      }
      const {
        img_header,
        title,
        types,
        date,
        status,
        client,
        images,
        place,
        content,
        seo_description,
        seo_keywords,
      } = items.item;
      return (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={seo_description} />
            <meta name="keywords" content={seo_keywords} />
          </Helmet>
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
                place={place}
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
                    imgContainerStyle={{
                      ...styles.img,
                      marginTop: index !== 0 ? 60 : 0,
                    }}
                  />
                </React.Fragment>
              ))}
            </Grid>
            <Grid container style={styles.buttonContainer}>
              {renderButtons(items.prevItem, items.nextItem)}
            </Grid>
          </Grid>
        </>
      );
    },
    [
      renderButtons,
      styles.buttonContainer,
      styles.contentContainer,
      styles.contentTxt,
      styles.gridContainer,
      styles.img,
    ]
  );

  const items:
    | {
        prevItem: Item | undefined;
        item: Item | undefined;
        nextItem: Item | undefined;
      }
    | undefined = useMemo(() => {
    const type = getTypeFromBasePath(path);
    if (!type) {
      return;
    }
    const { rows } = data![type];

    let prevItem: Item | undefined = undefined;
    let item: Item | undefined = undefined;
    let nextItem: Item | undefined = undefined;

    rows.forEach((row, rowIndex) => {
      row.items.forEach((i, itemIndex) => {
        if (i.id.toString() === id) {
          //***OTTENGO L'ELEMENTO PRIMA***//
          if (itemIndex === 0 && rowIndex !== 0) {
            prevItem = rows[rowIndex - 1].items.at(-1);
          } else {
            prevItem = row.items[itemIndex - 1];
          }

          //***OTTENGO L'ELEMENTO SUCCESSIVO***//
          if (
            itemIndex === row.items.length - 1 &&
            rowIndex !== rows.length - 1
          ) {
            nextItem = rows[rowIndex + 1].items[0];
          } else {
            nextItem = row.items[itemIndex + 1];
          }

          item = i;
        }
      });
    });
    return { prevItem, item, nextItem };
  }, [data, id, path]);

  const DetailPage = useMemo(() => {
    if (!path) {
      goHomeRef.current = true;
      return;
    }

    if (!items || !items.item) {
      goHomeRef.current = true;
      return;
    }
    return renderComponent(items);
  }, [items, path, renderComponent]);

  return {
    DetailPage,
    styles,
  };
};
