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
      padding={{ lg: 8, md: 4, xs: 4 }}
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
            sx={{ fontSize: { xs: "2.25rem", md: "48px" } }}
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
              sx={{ fontSize: { xs: "2.25rem", md: "48px" } }}
            >
              {title2}
            </Typography>
          </Grid2>
        )}
        <Grid2>
          <Typography fontFamily={"Lato"} color={"white"}>
            {subtitle}
          </Typography>
          <Typography fontFamily={"Lato"} color={"white"} mt={"1rem"}>
            {subtitle2}
          </Typography>
        </Grid2>
        <Grid2>
          <Button variant={buttonVariant}>Learn More</Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default TextCard;
