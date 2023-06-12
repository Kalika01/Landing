import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { JobListItem } from "../../../types/Home";
import ratingMobile from "../../../assets/RatingMobile.png";
import location from "../../../assets/Location.png";

interface Props {
  data: JobListItem;
  onClick(data: JobListItem): void;
}

const JobCardMobile: React.FC<Props> = ({ data, onClick }: Props) => {
  return (
    <Card
      sx={{
        width: 1,
        boxShadow:
          "1px 1px 1px rgba(56, 69, 100, 0), 1px 2px 1px -1px rgba(56, 69, 100, 0), 1px 1px 3px rgba(56, 69, 100, 0.5)",
        borderRadius: "8px",
        mb: 2,
      }}
      onClick={() => onClick(data)}
    >
      <CardContent>
        <Grid container spacing={3} flexWrap="nowrap" sx={{ width: 1 }}>
          <Grid item sx={{ mt: "30px" }}>
            <Box
              component="img"
              src={data.pictures[0]}
              alt="Sorry"
              sx={{ borderRadius: "50%", width: "66px", height: "66px" }}
            />
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Box component="img" src={ratingMobile} alt="Sorry" />
              </Grid>
              <Grid item>
                <Typography variant="subtitle2">Posted 2 days ago</Typography>
              </Grid>
            </Grid>
            <Grid container direction="column" sx={{ mt: "14px" }}>
              <Grid item>
                <Typography variant="body1">{data.title}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  {data.name} • {data.address}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <Box component="img" src={location} alt="sry" />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">Vienna, Austria</Typography>
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

export default JobCardMobile;
