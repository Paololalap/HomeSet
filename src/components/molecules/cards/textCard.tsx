"use client";
import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
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
        <span style={{ fontWeight: "bold", color: "white" }}>{secondWord}</span>{" "}
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
            variant='h2'
            color={"white"}
            sx={{ fontSize: { xs: "2.5rem", lg:'2.75rem',xl: "60px" } }}
          >
            {title}
          </Typography>
        </Grid2>
        {title2 && (
          <Grid2 xs={12}>
            <Typography
              fontFamily='iowan_old'
              fontWeight={900}
              variant='h2'
              color='white'
              marginTop={"-1rem"}
              sx={{ fontSize: { xs: "2.5rem", lg:'2.75rem',xl: "60px" } }}
            >
              {title2}
            </Typography>
          </Grid2>
        )}
        <Grid2>
          <Typography fontFamily={"Lato"} color={"#ddd"}>
            {renderStyledSubtitle(subtitle)}
          </Typography>
        </Grid2>
        <Grid2>
          <Typography fontFamily={"Lato"} color={"#ddd"}>
            {renderStyledSubtitle(subtitle2)}
          </Typography>
        </Grid2>
        <Grid2>
          <Typography fontFamily={"Lato"} color={"#ddd"}>
            {renderStyledSubtitle(subtitle3)}
          </Typography>
        </Grid2>
        <Grid2>
          <Button variant={buttonVariant}>Get Free Estimate</Button>
        </Grid2>
      </Grid2>
    </Box>
  );
}
