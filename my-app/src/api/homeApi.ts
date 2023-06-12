import axios from "axios";
import { JobListResponse } from "./../types/Home";

const getJobList = (): JobListResponse =>
  axios
    .get(`${process.env.REACT_APP_API_BASE_URL}/data`, {
      headers: {
        Authorization: `Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`,
      },
    })
    .then(function (response) {
      return response.data;
    });

export { getJobList };
