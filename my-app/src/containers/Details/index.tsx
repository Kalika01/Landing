import { Box, Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { getJobFromLocalStorage } from "../../helpers/localStorage";
import ShapeIcon from "../../assets/ShapeIcon.png";
import Rectangle from "../../assets/Rectangle.png";
import Square from "../../assets/Square.png";
import Arrow from "../../assets/Arrow.png";
import { NavLink } from "react-router-dom";
const Details: React.FC = () => {
  const data = getJobFromLocalStorage();

  return (
    <Box
      sx={{
        maxWidth: "1050px",
        margin: "0 auto",
        mt: "56px",
        padding: "0px 10px 0px 10px",
        overflowX: "hidden",
      }}
    >
      <Grid
        container
        flexWrap="nowrap"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Grid item xs={12} md={6} lg={8}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="h1">Job Details</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={3}>
                <Grid
                  item
                  sx={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <Grid item>
                    <Box
                      component="img"
                      src={Rectangle}
                      alt="sry"
                      sx={{ width: "16px", pt: "4px" }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">Save to my list</Typography>
                  </Grid>
                </Grid>
                <Grid item sx={{ display: "flex", gap: "16px" }}>
                  <Grid item>
                    <Box
                      component="img"
                      src={ShapeIcon}
                      alt="sry"
                      sx={{ width: "16px", height: "20px", pt: "4px" }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">Share</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={{ marginTop: "49px" }}>
            <Button sx={{ fontWeight: 600, fontSize: "12px" }}>
              APPLY NOW
            </Button>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            sx={{ marginTop: "32px" }}
          >
            <Grid item sx={{ maxWidth: "501px" }}>
              <Typography variant="h2">{data.title}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3">${data.salary}</Typography>
              <Typography variant="body1">Brutto, per year</Typography>
            </Grid>
          </Grid>
          <Grid sx={{ marginY: "7px" }}>
            <Typography
              variant="body1"
              sx={{ color: "rgba(56, 65, 93, 0.356)" }}
            >
              Posted 2 days ago
            </Typography>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography sx={{ mb: "35px" }}>
                At WellStar, we all share common goals. That’s what makes us so
                successful – and such an integral part of our communities. We
                want the same things, for our organization, for our patients,
                and for our colleagues. As the most integrated healthcare
                provider in Georgia, this means we pride ourselves on investing
                in the communities that we serve. We continue to provide
                innovative care models, focused on improving quality and access
                to healthcare.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3" sx={{ mb: "15px" }}>
                Responsopilities
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ mb: "25px" }}>
                Wellstar Medical Group, a physician-led multi-specialty group in
                Atlanta, Georgia, is currently recruiting for a BC/BE
                cardiothoracic surgeonto join their existing cardiovascular
                program. This is an opportunity to play a key role on a
                multidisciplinary team of cardiologists and surgeons.
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ mb: "25px" }}>
                The ideal candidate will have five or more years of experience
                in cardiac surgery. This candidate should be facile with
                off-pump revascularization, complex aortic surgery, minimally
                invasive valve and valve repair, transcatheter valve
                replacement, surgical atrial fibrillation ablation, ventricular
                assist device placement, and extra corporeal membrane
                oxygenation.
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ mb: "25px" }}>
                Wellstar is one of the largest integrated healthcare systems in
                the Southeast with 11 hospitals in Atlanta metro region. With
                two open heart programs at Kennestone Regional Medical Center
                and Atlanta Medical Center, Wellstar cardiac surgeons perform
                over 1200 cardiac procedures per year. The cardiac service line
                is the only center in Georgia with the Joint Commission’s
                Comprehensive Cardiac Center certification.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3" sx={{ mb: "15px" }}>
                Compensation & Benefits:
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <Box
                  component="img"
                  src={Square}
                  alt="sry"
                  sx={{ marginRight: "10px" }}
                />
                Our physicians enjoy a wide range of benefits, including:
              </Typography>

              <Typography>
                <Box
                  component="img"
                  src={Square}
                  alt="sry"
                  sx={{ marginRight: "10px" }}
                />
                Verycompetitive compensation package with bonuses Medical,
              </Typography>
              <Typography>
                <Box
                  component="img"
                  src={Square}
                  alt="sry"
                  sx={{ marginRight: "10px" }}
                />
                Dental,and Vision Insurance Occurrence-based
              </Typography>
              <Typography>
                <Box
                  component="img"
                  src={Square}
                  alt="sry"
                  sx={{ marginRight: "10px" }}
                />
                Malpractice Coverage Short-term and Long-term
              </Typography>
              <Typography>
                <Box
                  component="img"
                  src={Square}
                  alt="sry"
                  sx={{ marginRight: "10px" }}
                />
                Disability Insurance and life insurance
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Grid item sx={{ marginTop: "39px" }}>
              <Button sx={{ fontWeight: 600, fontSize: "12px" }}>
                APPLY NOW
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="h1" sx={{ marginTop: "86px" }}>
                Additional info
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ marginTop: "25px" }}>
                Employment type
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sx={{ display: "flex" }}>
              <Typography
                variant="h4"
                sx={{
                  marginTop: "10px",
                  marginRight: "8px",
                  color: "#55699E",
                  background: "rgba(161, 177, 219, 0.317343)",
                  border: "1px solid rgba(85, 105, 158, 0.3)",
                  "&:hover": {
                    color: "lightgreen",
                    border: "1px solid lightgreen",
                  },
                }}
              >
                Full time
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  marginTop: "10px",
                  marginRight: "8px",
                  color: "#55699E",
                  background: "rgba(161, 177, 219, 0.317343)",
                  border: "1px solid rgba(85, 105, 158, 0.3)",
                  "&:hover": {
                    color: "lightgreen",
                    border: "1px solid lightgreen",
                  },
                }}
              >
                Part time
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  marginTop: "10px",
                  color: "#55699E",
                  background: "rgba(161, 177, 219, 0.317343)",
                  border: "1px solid rgba(85, 105, 158, 0.3)",
                  "&:hover": {
                    color: "lightgreen",
                    border: "1px solid lightgreen",
                  },
                }}
              >
                Temporary
              </Typography>
            </Grid>
            <Grid item sx={{ marginTop: "23px" }}>
              <Typography>Benefits </Typography>
            </Grid>
            <Grid item sx={{ display: "flex" }}>
              <Typography
                variant="h4"
                sx={{
                  marginTop: "10px",
                  marginRight: "10px",
                  background: "rgba(255, 207, 0, 0.15)",
                  border: "1px solid #FFCF00",
                  color: "#988B49",
                  "&:hover": {
                    color: "#f57d00",
                    border: "1px solid #cc9a02",
                  },
                }}
              >
                 Flexible shedule
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  marginTop: "10px",
                  marginRight: "10px",
                  background: "rgba(255, 207, 0, 0.15)",
                  border: "1px solid #FFCF00",
                  color: "#988B49",
                  "&:hover": {
                    color: "#f57d00",
                    border: "1px solid #cc9a02",
                  },
                }}
              >
                Relocation assistance
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  marginTop: "10px",
                  marginRight: "10px",
                  background: "rgba(255, 207, 0, 0.15)",
                  border: "1px solid #FFCF00",
                  color: "#988B49",
                  "&:hover": {
                    color: "#f57d00",
                    border: "1px solid #cc9a02",
                  },
                }}
              >
                Full time
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h1"
                sx={{ marginTop: "86px", marginBottom: "32px" }}
              >
                Attached images
              </Typography>
            </Grid>
            <Grid item>
              {data.pictures.map((picture, index) => {
                return (
                  <img
                    key={`${picture}-${index}`}
                    src={picture}
                    alt="Photos"
                    style={{
                      width: "180px",
                      height: "133px",
                      marginRight: "20px",
                    }}
                  />
                );
              })}
            </Grid>
            <Grid item sx={{ marginTop: "107px" }}>
              <Typography sx={{ fontWeight: 600, color: "black" }}>
                <Box
                  component="img"
                  src={Arrow}
                  alt="sry"
                  sx={{ marginRight: "19px" }}
                />

                <Link component={NavLink} to="/">
                  RETURN TO JOB BOARD
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs item sx={{ marginTop: "30px", marginLeft: "50px" }}></Grid>
      </Grid>
    </Box>
  );
};

export default Details;
