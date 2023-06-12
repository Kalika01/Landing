import { JobListItem } from "./../types/Home";

const localStorageEnum = {
  SELECTED_JOB_DATA: "selected_job_data",
};
const setJobToLocalStorage = (job: JobListItem): void =>
  localStorage.setItem(localStorageEnum.SELECTED_JOB_DATA, JSON.stringify(job));

const getJobFromLocalStorage = (): JobListItem =>
  JSON.parse(
    localStorage.getItem(localStorageEnum.SELECTED_JOB_DATA) as string
  );

const delateJobFromLocalStorage = (): void =>
  localStorage.removeItem(localStorageEnum.SELECTED_JOB_DATA);

export {
  setJobToLocalStorage,
  getJobFromLocalStorage,
  delateJobFromLocalStorage,
};
