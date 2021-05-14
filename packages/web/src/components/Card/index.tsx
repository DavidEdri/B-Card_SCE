import { Grid } from "@material-ui/core";
import { CardPopulatedFields } from "@project/types";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { useFetch } from "../../hooks";
import { useTypedSelector } from "../../redux";
import { removeCard } from "../../redux/actions/cardActions";
import { setCard } from "../../redux/slices/card";
import Loading from "../common/Loading";
import { CardEdit } from "../user/Card/CardEdit";
import { CardContainer } from "./CardContainer";

type CardProps = RouteComponentProps<{
  handle: string;
  mode?: string;
}>;

export const Card = ({ match: { params } }: CardProps) => {
  const dispatch = useDispatch();
  const { handle, mode } = params;
  const {
    data: card,
    error,
    loading,
  } = useFetch<CardPopulatedFields>(`/guests/cards/getByHandle/${handle}`);
  const user = useTypedSelector((state) => state.auth.user);
  const isEditable = !!card && !!user && card.owner._id === user._id;
  const isEditMode = isEditable && mode === "edit";

  useEffect(() => {
    if (card) {
      dispatch(setCard(card));

      document.title = `${card.mainText.title}, B-Card`;
    }
    return () => {
      dispatch(removeCard());
      document.title = "B-Card";
    };
  }, [dispatch, card]);

  useEffect(
    () => () => {
      dispatch(setCard(null));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (loading) return <Loading />;

  if (error || !card) {
    return <p style={{ color: "red" }}>שגיאה: כרטיס לא קיים</p>;
  }

  return (
    <Grid container>
      <CardContainer />
      {isEditable && <CardEdit editMode={isEditMode} />}
    </Grid>
  );
};
