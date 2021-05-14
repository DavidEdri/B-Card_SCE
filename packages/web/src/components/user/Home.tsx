/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import { Box, Button, Grid } from "@material-ui/core";
import Axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useGuaranteedUserSelector } from "../../redux";
import { refreshJwt } from "../../redux/actions/authActions";
import { setGotCard } from "../../redux/slices/auth";

export default function Home() {
  const user = useGuaranteedUserSelector();
  const history = useHistory();
  const dispatch = useDispatch();

  const { gotCard } = user;

  const createCard = () => {
    history.push("/user/card/create");
  };

  const deleteCard = async () => {
    try {
      if (!confirm("האם אתה בטוח?")) return;
      await Axios.delete("/users/cards/");
      dispatch(setGotCard(false));
      refreshJwt(dispatch);
    } catch (error) {}
  };

  const editCard = () => {
    history.push(`/card/${user.cardHandle}/edit`);
  };

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={12}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {gotCard && (
            <>
              <Button
                variant="contained"
                color="secondary"
                onClick={deleteCard}
              >
                מחק את הכרטיס
              </Button>
              <Button variant="contained" color="primary" onClick={editCard}>
                עריכת הכרטיס
              </Button>
            </>
          )}
          {!gotCard && (
            <Button variant="contained" color="primary" onClick={createCard}>
              צור כרטיס חדש
            </Button>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
