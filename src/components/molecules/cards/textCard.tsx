"use client";
import { Box, BoxProps, Button, ButtonProps, Typography } from "@mui/material";
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

export default function TextCard(props: Props) {
  const {
    title,
    title2,
    subtitle,
    subtitle2,
    subtitle3,
    bgcolor = "primary.dark",
    buttonVariant = "contained",
  } = props;

  const renderStyledSubtitle = (subtitle: string | undefined) => {
    if (!subtitle) return null; // Check if subtitle is undefined or null
    const words = subtitle.split(" ");
    if (words.length < 2) return null; // Ensure there are at least two words
    const firstWord = words[0];
    const secondWord = words[1];
    const restOfSubtitle = subtitle.substring(
      firstWord.length + secondWord.length + 1
    ); // Adding 1 for the space between the first and second word
    return (
      <>
        {firstWord}{" "}
        <span
          style={{
            fontWeight: "700",
            color: "#FEFFF8",
            fontSize: "inherit",
            lineHeight: "28.1px",
          }}
        >
          {secondWord}
        </span>{" "}
        {restOfSubtitle}
      </>
    );
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      paddingLeft={{ xl: "80px" }}
      borderRadius={"30px"}
      bgcolor={bgcolor}
      flex={1}
    >
      <Grid2 container>
        <Grid2>
          <Typography
            fontFamily={"iowan_old"}
            fontWeight={900}
            variant='h2'
            color={"#FEFFF8"}
            width={{ xs: "70%", xl: "568.44px" }}
            marginX={{ xs: "auto", xl: "initial" }}
            textAlign={{ xs: "center", xl: "initial" }}
            height={{ xs: "auto", xl: "195px" }}
            sx={{
              fontSize: {
                xs: "2.25rem",
                sm: "2rem",
                lg: "2.75rem",
                xl: "55px",
              },
              marginTop: { xs: "1rem", xl: "initial" },
              lineHeight: { xs: "initial", xl: "65px" },
            }}
          >
            {title}
          </Typography>
        </Grid2>
        {title2 && (
          <Grid2 xs={12}>
            <Typography
              fontFamily={"iowan_old"}
              fontWeight={900}
              variant='h2'
              color={"#FEFFF8"}
              width={{ xs: "70%", xl: "568.44px" }}
              marginX={{ xs: "auto", xl: "initial" }}
              textAlign={{ xs: "center", xl: "initial" }}
              height={{ xs: "auto", xl: "195px" }}
              sx={{
                fontSize: {
                  xs: "2.25rem",
                  sm: "2rem",
                  lg: "2.75rem",
                  xl: "55px",
                },
                marginTop: { xs: "1rem", xl: "initial" },
                lineHeight: { xs: "initial", xl: "65px" },
              }}
            >
              {title2}
            </Typography>
          </Grid2>
        )}
        <Box
          width={{ xs: "auto", xl: "568.44px" }}
          paddingX={{ xs: "5rem", sm: "2rem", md: "3rem", xl: "initial" }}
        >
          <Grid2 paddingY={0}>
            <Typography
              fontFamily={"Lato"}
              color={"#FEFFF8"}
              fontWeight={400}
              marginTop={"40px"}
              sx={{ fontSize: { lg: "23.41px" }, lineHeight: "28.1px" }}
            >
              {renderStyledSubtitle(subtitle)}
            </Typography>
          </Grid2>
          <Grid2 paddingY={0}>
            <Typography
              fontFamily={"Lato"}
              color={"#FEFFF8"}
              fontWeight={400}
              sx={{
                fontSize: { lg: "23.41px" },
                lineHeight: "28.1px",
                marginTop: "15px",
              }}
            >
              {renderStyledSubtitle(subtitle2)}
            </Typography>
          </Grid2>
          <Grid2 paddingY={0}>
            <Typography
              fontFamily={"Lato"}
              color={"#FEFFF8"}
              fontWeight={400}
              sx={{
                fontSize: { lg: "23.41px" },
                lineHeight: "28.1px",
                marginTop: "15px",
              }}
            >
              {renderStyledSubtitle(subtitle3)}
            </Typography>
          </Grid2>
          <Grid2
            marginTop={"40px"}
            display={{ xs: "flex", lg: "block" }}
            justifyContent={{ xs: "center", xl: "initial" }}
            paddingBottom={{ xs: "1rem", lg: "initial" }}
          >
            <Button
              variant='contained'
              sx={{
                backgroundColor: "#038732",
                paddingY: "20px",
                paddingX: "40px",
                width: "224px",
                height: "62px",
                borderRadius: "100px",
                whiteSpace: "nowrap",
                fontWeight: "900",
                fontSize: "18px",
                lineHeight: "22px",
              }}
            >
              Get Free Estimate
            </Button>
          </Grid2>
        </Box>
      </Grid2>
    </Box>
  );
}
