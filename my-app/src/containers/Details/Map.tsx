import React from "react";
import Mapimage from "../../assets/Map.png";
import Shape from "../../assets/Shape.png"
import { Box, Typography } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import colors from "../../theme/colors";

const Map =()=> {
   return (
     <>
       <Box
         sx={{
         width: {xs: '100%', sm: '100%', md: '402px',},
           minHeight: "218px",
           background: "#2A3047",
           borderRadius: "8px 8px 0px 0px",
           position: "relative",
           overflow: "hidden",
           padding: "31px 63px 31px 62px",
           "&:before": {
             content: '""',
             position: "absolute",
             width: "273px",
             height: "273px",
             background: "#202336",
             borderRadius: "50%",
             top: "-15%",
             left: "-50%",
           },
         }}
       >
         <Box sx={{ position: "relative", zIndex: 2 }}>
           <Typography variant="h3" sx={{color:colors.white}}>
             Department name. University Hospital Giessen.
           </Typography>
         </Box>
       </Box>
     </>
   );
}

export default Map