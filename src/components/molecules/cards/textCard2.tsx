"use client";
import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Theme,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

type Props = {
  title: string;
  title2?: string;
  subtitle: string;
  subtitle2?: string;
  subtitle3?: string;
  bgcolor?: BoxProps["color"];
  buttonVariant?: ButtonProps["variant"];
};

const TextCard = (props: Props) => {
  const {
    title,
    title2,
    subtitle,
    subtitle2,
    subtitle3,
    bgcolor = "primary.dark",
    buttonVariant = "contained",
  } = props;

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      padding={{ lg: 5, md: 4, xs: 4 }}
      borderRadius={0.5}
      bgcolor={bgcolor}
      flex={1}
    >
      <Grid2 container spacing={2.5}>
        <Grid2>
          <Typography
            fontFamily={"iowan_old"}
            fontWeight={900}
            variant='h3'
            sx={{ fontSize: { xs: "2.25rem", lg: "55px" } }}
            color={"white"}
          >
            {title}
          </Typography>
        </Grid2>
        {title2 && (
          <Grid2 xs={12}>
            <Typography
              fontFamily='iowan_old'
              fontWeight={900}
              variant='h3'
              color='white'
              marginTop={"-1rem"}
              sx={{ fontSize: { xs: "2.25rem", lg: "55px" } }}
            >
              {title2}
            </Typography>
          </Grid2>
        )}
        <Grid2>
          <Typography
            fontFamily={"Lato"}
            color={"#FEFFF8"}
            sx={{ fontSize: { lg: "23.5px" } }}
            width={450}
          >
            {subtitle}
          </Typography>
          <Typography
            fontFamily={"Lato"}
            color={"#FEFFF8"}
            sx={{ fontSize: { lg: "23.5px" } }}
            mt={"1rem"}
            width={450}
          >
            {subtitle2}
          </Typography>
        </Grid2>
        <Grid2>
          <Button variant={buttonVariant}>Get Free Estimate</Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default TextCard;
