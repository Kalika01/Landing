import React, { useEffect, useState } from "react";
import { Grid, Box, useMediaQuery } from "@mui/material";
import { getJobList } from "../../api/homeApi";
import { JobList, JobListItem } from "../../types/Home";
import JobCart from "./components/JobCart";
import JobCardMobile from "./components/JobCardMobiles";
import { useNavigate } from "react-router-dom";
import { setJobToLocalStorage } from "../../helpers/localStorage";
import { appLinks } from "../../helpers/routes";

const Home: React.FC = () => {
  const [state, setState] = useState<JobList>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();

  const handleCardClick = (data: JobListItem) => {
    setJobToLocalStorage(data);
    navigate(appLinks.details.asLink(data.id));
  };

  useEffect(() => {
    getJobList().then((response) => {
      setState(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        overflowX: "hidden",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ maxWidth: "1400px", overflowX: "hidden" }}
      >
        {state.map((card) =>
          isMobile ? (
            <JobCardMobile data={card}  onClick={handleCardClick}  key={card.id}/>
          ) : (
            <JobCart data={card} onClick={handleCardClick}  key={card.id}/>
          )
        )}
      </Grid>
    </Box>
  );
};

export default Home;
