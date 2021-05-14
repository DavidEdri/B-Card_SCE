import { Container } from "@material-ui/core";
import {
  CardPopulatedFields,
  CityFields,
  JobTitleFields,
} from "@project/types";
import React from "react";
import { useFetch } from "../../../../hooks";
import { useGuaranteedUserSelector } from "../../../../redux";
import Loading from "../../../common/Loading";
import { CardCreateForm } from "./CardCreateForm";

type Props = {
  card?: CardPopulatedFields;
};

export const CardCreate = ({ card = undefined }: Props) => {
  const user = useGuaranteedUserSelector();
  const { data: cities, loading: l1 } = useFetch<CityFields[]>(
    "/guests/data/cities",
  );
  const { data: jobTitles, loading: l2 } = useFetch<JobTitleFields[]>(
    "/guests/data/jobTitles",
  );

  React.useEffect(() => {
    // if passing card through props then its edit mode and won't redirect
    if (!card && user.gotCard) window.location.href = "/user";
  });

  if (!cities || !jobTitles || l1 || l2) return <Loading />;

  return (
    <Container>
      <CardCreateForm cities={cities} jobTitles={jobTitles} card={card} />
    </Container>
  );
};
