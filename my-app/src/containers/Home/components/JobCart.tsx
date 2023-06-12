import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { JobListItem } from "../../../types/Home";
import locationIcon from "../../../assets/Location.png";
import stars from "../../../assets/Rating.png";
import rectangle from "../../../assets/Rectangle.png";

interface Props {
  data: JobListItem;
  onClick(data: JobListItem): void;
}

const JobCart: React.FC<Props> = (props: Props) => {
  const { data, onClick } = props;

  return (
    <Card sx={{ width: 1, '&:hover': {cursor: 'pointer'} }} onClick={() => onClick(data)}>
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid item xs={8}>
            <Grid container spacing={3} flexWrap="nowrap" sx={{ width: 1 }}>
              <Grid item>
                <img
                  src={data.pictures[0]}
                  alt="sorry"
                  style={{
                    width: "85px",
                    height: "85px",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid
                item
                sx={{
                  maxWidth: 720,
                }}
              >
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    <Typography variant="h3">{data.title}</Typography>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={1}>
                      <Grid item>
                        <Typography variant="subtitle1">{data.name}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">•</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          {data.address}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item>
                        <img
                          src={locationIcon}
                          alt="locationIcon"
                          style={{
                            width: "13px",
                            height: "18px",
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          Vienna, Austria
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              alignItems="center"
              sx={{ height: "100%" }}
              spacing={4}
            >
              <Grid item>
                <img src={stars} alt="stars" />
              </Grid>
              <Grid item sx={{ height: "100%" }}>
                <Grid
                  container
                  direction="column"
                  sx={{ height: "100px" }}
                  justifyContent="space-between"
                  alignItems="flex-end"
                >
                  <Grid item>
                    <img src={rectangle} alt="gg" />
                  </Grid>
                  <Grid item >
                    <Typography variant="subtitle1">2 days ago</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default JobCart;
