import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAppState } from "modules/app/selector";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { filterEmployees } from "modules/app/actions";

export const NavigationItem = ({ jobId, title }) => {
  const dispatch = useDispatch();
  const appState = useSelector(selectAppState);

  const action = useCallback(() => {
    if (appState.selectedJob.includes(jobId)) {
      return dispatch(filterEmployees.removeFilterEmployees(jobId));
    }

    dispatch(filterEmployees.addFilterEmployees(jobId));
  }, [dispatch, jobId, appState.selectedJob]);

  return (
    <ListItemButton onClick={action} selected={appState.selectedJob.includes(jobId)}>
      <ListItemText primary={title} />
    </ListItemButton>
  );
};
