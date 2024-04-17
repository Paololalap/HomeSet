import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import styles from "./page.module.css";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Container,
  Input,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import FeatureCard from "@/components/molecules/cards/featureCard";
import { HOME_PAGE_FEATURES_LIST } from "@/constants/HOME_PAGE_CONSTANTS";
import TextCard from "@/components/molecules/cards/textCard";
import TextCard2 from "@/components/molecules/cards/textCard2";
import { CheckCircleOutline } from "@mui/icons-material";
import Image from "@/components/atoms/image/image";

export default function Home() {
  return (
    // <Container maxWidth={"xl"}>
    <Box m={{ xs: 3, lg: 5 }} sx={{ flexGrow: 1 }}>
      <Grid2
        container
        alignItems='stretch'
        // rowGap={4}
        // columnGap={4}
        spacing={{ xs: 4, md: 4 }}
      >
        <Grid2 xs={12} maxWidth={"1444px"} marginX={"auto"}>
          <Box
            display={"flex"}
            borderRadius={0.5}
            overflow={"hidden"}
            position={"relative"}
            mt={"2rem"}
            maxHeight={"600px"}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Image
                src='./assets/new_banner.png'
                style={{
                  flex: 1,
                  width: "100%",
                  opacity: "0.5",
                }}
                alt=''
              />
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <Image
                src='./assets/home_banner_mobile.png'
                style={{
                  flex: 1,
                  maxWidth: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                alt=''
              />
            </Box>

            <Box
              position={"absolute"}
              left={0}
              right={0}
              top={0}
              bottom={0}
              alignItems={"center"}
              p={5}
              // justifyContent={"center"}
              // bgcolor={"red"}
              display={"flex"}
            >
              <Box maxWidth={{ xs: "500px", lg: "700px" }}>
                <Typography
                  fontWeight={900}
                  fontFamily={"iowan_old"}
                  variant='h2'
                  color={"primary.dark"}
                  lineHeight={"4rem"}
                  sx={{ fontSize: { xs: "3rem", sm: "3.5rem", lg: "80px" } }}
                >
                  Paint your home the easy way
                </Typography>
                {/* <Typography
                    fontWeight={900}
                    variant="h2"
                    color={"primary.dark"}
                  >
                    
                  </Typography> */}
                <Typography
                  maxWidth={500}
                  fontFamily={"Lato"}
                  fontWeight={"900"}
                  color={"primary.dark"}
                  mt={"1rem"}
                >
                  HomeSet is a professional home painting company that offers
                  quick estimates and transparent pricing
                </Typography>
                <Button variant='contained' sx={{ marginTop: "1rem" }}>
                  Get Started
                </Button>

                {/* <Grid2
                  mt={2}
                  container
                  bgcolor={"white"}
                  paddingBlock={2}
                  paddingInline={4}
                  borderRadius={0.5}
                >
                  <Grid2 display={"flex"} xs alignItems={"center"}>
                    <InputBase
                      sx={{
                        // borderColor: "white",
                        fontFamily: "Lato",
                      }}
                      placeholder='Your Address'
                    />
                  </Grid2>

                </Grid2> */}
              </Box>
            </Box>
          </Box>
        </Grid2>

        <Grid2
          alignItems={"stretch"}
          container
          xs={12}
          maxWidth={"1444px"}
          marginX={"auto"}
        >
          {/* <Grid2 container bgcolor={'blue'}> */}
          {HOME_PAGE_FEATURES_LIST.map(({ title, imageSource, subtitle }) => {
            return (
              <Grid2
                display={"flex"}
                alignItems={"stretch"}
                key={title}
                lg={4}
                xs={12}
              >
                <FeatureCard
                  title={title}
                  imageSource={imageSource}
                  subtitle={subtitle}
                />
              </Grid2>
            );
          })}
        </Grid2>
        <Grid2 container maxWidth={"1444px"} marginX={"auto"}>
          <Grid2
            display={"flex"}
            borderRadius={0.5}
            overflow={"hidden"}
            xs={12}
            lg={6}
            md={6}
            flex={1}
          >
            <TextCard
              title='We make it easy to complete your painting project'
              subtitle='1. Estimate: Answer a few questions about your project and get an estimate for the cost and timeline in as little as 30 seconds.'
              subtitle2='2. Plan: Finalize your project by uploading a few pictures with more detail, and then schedule with our crew in minutes.'
              subtitle3='3. Execute: Relax while our skilled team delivers the highest quality paint job in your home, giving you complete peace of mind'
            />
          </Grid2>
          <Grid2 position={"relative"} xs={12} md={6} lg={6} xl={6} flex={1}>
            <Image
              src='./assets/home_construction.png'
              style={{ flex: 1, width: "100%" }}
              alt=''
            />
          </Grid2>
        </Grid2>
        <Grid2
          display={"flex"}
          xs={12}
          maxWidth={"1444px"}
          marginX={"auto"}
          container
          paddingX={"30px"}
        >
          <Box
            bgcolor={"primary.light"}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            flex={1}
            padding={{ md: 10, xs: 5 }}
            minHeight={300}
            borderRadius={0.5}
          >
            <Box
              maxWidth={1000}
              sx={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              <Typography
                textAlign={"center"}
                color={"primary.dark"}
                fontWeight={900}
                sx={{ fontSize: { xs: "1.5rem", md: "40px" } }}
                fontFamily={"lato_black"}
              >
                Proudly serving the{" "}
                <span style={{ textDecoration: "underline" }}>
                  Inner Sydney
                </span>{" "}
                area where we have been busy painting over 1,474 homes
              </Typography>
              <Button variant='contained' sx={{ margin: "0 auto" }}>
                Get Free Estimate
              </Button>
            </Box>
          </Box>
        </Grid2>
        <Grid2 container maxWidth={"1444px"} marginX={"auto"}>
          <Grid2 position={"relative"} xs={12} md={6} lg={6} xl={6}>
            <Image
              src='./assets/no_hidden_fees.png'
              style={{ flex: 1, width: "100%" }}
              alt=''
            />
          </Grid2>
          <Grid2
            display={"flex"}
            borderRadius={0.5}
            overflow={"hidden"}
            xs={12}
            lg={6}
            md={6}
          >
            <TextCard2
              title='No hidden fees'
              title2='No surprises'
              subtitle='We believe that all homeowners deserve access to high quality craftsmanship, regardless of who they are or where they live.'
              subtitle2="With HomeSet, there's no more guessing about how much your next paint project will cost - our online estimate tool and flat-rate pricing ensures you'll always know exactly what to expect."
            />
          </Grid2>
        </Grid2>
        <Grid2
          display={"flex"}
          xs={12}
          maxWidth={"1444px"}
          marginX={"auto"}
          container
          paddingX={"30px"}
        >
          <Box
            bgcolor={"black"}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            flex={1}
            p={{ md: 10, xs: 5 }}
            minHeight={300}
            borderRadius={0.5}
            flexDirection={{ sm: "column", md: "row" }}
          >
            <Box
              maxWidth={1000}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                textAlign={"center"}
                variant='h2'
                color={"white"}
                fontWeight={900}
                sx={{ fontSize: { xs: "2.25rem", md: "60px" } }}
                fontFamily={"iowan_old"}
              >
                Don&apos;t just take our word for it
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: { xs: "100%", lg: "1000px" },
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Grid2 display={"flex"} alignItems={"stretch"} lg={6} xs={12}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "0px",
                    }}
                  >
                    <CardMedia
                      component='img'
                      height='350'
                      image='./assets/interior_painting.png'
                      alt=''
                    />
                    <CardContent
                      sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        background: "black",
                        p: 0,
                      }}
                    >
                      <Typography sx={{ marginY: "0.5rem" }}>
                        ⭐⭐⭐⭐⭐️
                      </Typography>
                      <Typography
                        color='white'
                        fontWeight='900'
                        gutterBottom
                        component='div'
                        fontFamily='Lato'
                      >
                        We used Craftwork to repair and paint the accent wall in
                        our kitchen, and we&apos;re very happy with it.
                      </Typography>
                      <Typography
                        fontFamily={"Lato"}
                        color='white'
                        sx={{ paddingBottom: "1rem" }}
                      >
                        The wall had damage from the previous owner, and the
                        Craftwork team did an incredible job fixing it and apply
                        a fresh coat of paint on top!
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid2>
                <Grid2 display={"flex"} alignItems={"stretch"} lg={6} xs={12}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "0px",
                    }}
                  >
                    <CardMedia
                      component='img'
                      height='350'
                      image='./assets/exterior_painting.png'
                      alt=''
                    />
                    <CardContent
                      sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        background: "black",
                        p: 0,
                      }}
                    >
                      <Typography sx={{ marginY: "0.5rem" }}>
                        ⭐⭐⭐⭐⭐️
                      </Typography>
                      <Typography
                        color='white'
                        fontWeight='900'
                        gutterBottom
                        component='div'
                        fontFamily='Lato'
                      >
                        We used Craftwork to repair and paint the accent wall in
                        our kitchen, and we&apos;re very happy with it.
                      </Typography>
                      <Typography
                        fontFamily={"Lato"}
                        color='white'
                        sx={{ paddingBottom: "1rem" }}
                      >
                        The wall had damage from the previous owner, and the
                        Craftwork team did an incredible job fixing it and apply
                        a fresh coat of paint on top!
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid2>
              </Box>
            </Box>
          </Box>
        </Grid2>
        <Grid2 container maxWidth={"1444px"} marginX={"auto"}>
          <Grid2
            display={"flex"}
            borderRadius={0.5}
            overflow={"hidden"}
            xs={12}
            lg={6}
            md={6}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              padding={{ lg: 8, md: 4, xs: 4 }}
              borderRadius={0.5}
              bgcolor='#F2F8E2'
              flex={1}
            >
              <Grid2 container spacing={2.5}>
                <Grid2>
                  <Typography
                    fontFamily={"iowan_old"}
                    fontWeight={900}
                    variant='h2'
                    color={"primary.dark"}
                    sx={{ fontSize: { xs: "2.5rem", lg: "60px" } }}
                  >
                    Meet our talented Inner Sydney team
                  </Typography>
                </Grid2>
                <Grid2>
                  <Typography
                    fontFamily={"lato"}
                    color={"black"}
                    sx={{ fontSize: "25px", fontWeight: "400" }}
                  >
                    It can be uncomfortable inviting strangers into your home,
                    so let&#39;s get acquainted - here a few examples of the
                    talented people we have on our team!
                  </Typography>
                  <Typography
                    fontFamily={"lato"}
                    color={"black"}
                    mt={"1rem"}
                    sx={{ fontSize: "25px", fontWeight: "400" }}
                  >
                    We train our painters from apprentice to seasoned veteran,
                    to ensure that we always deliver the highest quality paint
                    work in your home.
                  </Typography>
                </Grid2>
                <Grid2 sx={{ marginTop: "1rem" }}>
                  <Button variant='contained'>Get Free Estimate</Button>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
          <Grid2 position={"relative"} xs={12} md={6} lg={6} xl={6}>
            <Image
              src='./assets/image 43.png'
              style={{ flex: 1, width: "100%" }}
              alt=''
            />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}
