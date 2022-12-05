import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TeamPerson } from "../../molecules/teamComponent/types";
import { useDimensions } from "../../../hooks/useDimensions";

const variants: Variants = {
  open: {
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, transition: { duration: 0.2 } },
};

interface IPerson {
  person: TeamPerson;
  index: number;
  setOpenDetail: (index: number) => void;
  setCloseDetail: (index: number) => void;
}

const PersonComponent = (props: IPerson) => {
  const { person, index, setCloseDetail, setOpenDetail } = props;
  const { img_thumbnail, open } = person;
  const theme = useTheme();
  const { isSmall } = useDimensions();
  const [imOpen, setImOpen] = useState(open);

  useEffect(() => {
    setImOpen(false);
  }, [isSmall]);

  const onDetailCardClick = useCallback(() => {
    if (isSmall) {
      setImOpen(false);
      return;
    }
    setCloseDetail(index);
  }, [index, isSmall, setCloseDetail]);

  const onProfileCardClick = useCallback(() => {
    if (isSmall) {
      setImOpen(true);
      return;
    }
    setOpenDetail(index);
  }, [index, isSmall, setOpenDetail]);

  const openDetail = useMemo(() => {
    return open || imOpen;
  }, [imOpen, open]);

  const Detail = () => {
    return (
      <motion.div
        variants={variants}
        animate={openDetail ? "open" : "closed"}
        style={{
          position: "absolute",
          flex: 1,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: theme.palette.background.paper,
          visibility: openDetail ? "visible" : "hidden",
        }}
        onClick={onDetailCardClick}
      >
        DETTAGLIO + {person.name}
      </motion.div>
    );
  };

  return (
    <Grid
      item
      xs={12}
      md={open ? 12 : 4}
      mt={8}
      style={{
        backgroundColor: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
        position: "relative",
      }}
    >
      {openDetail ? (
        <Detail />
      ) : (
        <div onClick={onProfileCardClick}>
          <img
            src={img_thumbnail.image}
            alt={img_thumbnail.image_alt}
            style={{ width: "50%", height: "100%" }}
          />
          <>{person.name}</>
        </div>
      )}
    </Grid>
  );
};

export default PersonComponent;
