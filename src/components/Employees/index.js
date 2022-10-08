import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectAppState } from "modules/app/selector";
import { EMPLOYEES } from "modules/api/endpoints";
import { useFetch } from "hooks/useFetch";
import { ProfileGrid } from "components/common/ProfileGrid";

export const Employees = () => {
  const appState = useSelector(selectAppState);
  const { response, performFetch } = useFetch(EMPLOYEES);
  const { loading, data } = response;

  const preparingData = useMemo(() => {
    if (!Array.isArray(data)) return [];

    if (appState.selectedJob.length === 0) return data;

    return data.filter((employee) => appState.selectedJob.includes(employee.job));
  }, [data, appState.selectedJob]);

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  return <ProfileGrid loading={loading} profiles={preparingData} />;
};
