import React from "react";
import Image, { StaticImageData } from "next/image";
import { BetCard } from "./BetCard";
import { useWindowSize } from "../hooks/useWindowSize";
import { Box } from "@mui/system";
type BannerTypes = {
  fight: StaticImageData;
  mainCard?: boolean;
};

export const BannerCombat = ({ fight, mainCard }: BannerTypes) => {
  const size = useWindowSize();
  console.log(size);

  return (
    <Box
      display="table"
      justifyContent="center"
      alignItems="center"
      margin="auto"
    >
      <Image src={fight} width={size.width} height={size.height} alt="carola" />
      <BetCard />
    </Box>
  );
};
