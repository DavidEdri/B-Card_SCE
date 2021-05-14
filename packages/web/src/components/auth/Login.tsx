import React, { useEffect } from "react";
import { Link, useHistory, RouteComponentProps } from "react-router-dom";
import { constants, validation } from "@project/common";
import { useDispatch } from "react-redux";
import { Button, Grid, Box } from "@material-ui/core";
import EZFormikUI, { Fields, AfterDefaultSubmit } from "../common/EZFormikUI";
import { isProduction } from "../../helpers/functions";
import { loginUser } from "../../redux/actions/authActions";
import { useTypedSelector } from "../../redux";

const { text } = constants;

const fields: Fields = [
  {
    fieldName: "email",
    label: text.emailLabel,
    type: "text",
    options: "email",
    initialValue: "",
  },
  {
    fieldName: "password",
    label: text.passLabel,
    type: "text",
    options: "password",
    initialValue: "",
  },
];

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = RouteComponentProps<{}, {}, { lastPath?: string }>;

const Login: React.FC<Props> = ({ location: { state: redirect } }) => {
  const lastPath = redirect ? redirect.lastPath : null;
  const history = useHistory();
  const isLoggedin = useTypedSelector((state) => state.auth.isLoggedin);
  const dispatch = useDispatch();

  const afterDefaultSubmit: AfterDefaultSubmit = (res) => {
    const { token } = res.data;
    dispatch(loginUser(token));

    if (lastPath) history.push(lastPath);
    else history.push("/user");
  };

  useEffect(() => {
    if (isLoggedin) {
      history.push("/dashboard");
    }
  }, [isLoggedin, history]);

  return (
    <Grid container justify="center">
      <Grid item md={6} xs={12}>
        <EZFormikUI
          fields={fields}
          title={text.login}
          paragraph={text.loginParagraph}
          onSubmit="/guests/auth/login"
          afterDefaultSubmit={afterDefaultSubmit}
          validationSchema={validation.auth.login}
          useCaptcha={isProduction()}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Button color="primary" component={Link} to="/register">
            {text.noAccount}
          </Button>
          <Button color="primary" component={Link} to="/forgotPassword">
            {text.forgotPass}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
