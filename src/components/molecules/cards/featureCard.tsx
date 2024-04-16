import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = {
  title: string;
  imageSource: string;
  subtitle: string;
};

const FeatureCard = ({ title, imageSource, subtitle, ...rest }: Props) => {
  return (
      <Card
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component='img'
          height='350'
          image={imageSource}
          alt={title}
        />
        <CardContent
          sx={{
            p: 5,
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
          {...rest}
        >
          <Typography
            color={"primary.dark"}
            fontWeight={"900"}
            gutterBottom
            variant='h4'
            component='div'
            fontFamily={"Lato"}
          >
            {title}
          </Typography>
          <Typography
            fontFamily={"Lato"}
            color='#004318'
            sx={{ paddingBottom: "1rem" }}
          >
            {subtitle}
          </Typography>
          {/* <Box mt={1} mb={2}>
            <Button variant="dashed">Learn More</Button>
          </Box> */}
        </CardContent>
      </Card>
  );
};

export default FeatureCard;
