import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button, { ButtonClassKey, ButtonProps } from "@material-ui/core/Button";

declare module "@material-ui/core/styles/overrides" {
  interface ComponentNameToClassKey {
    MuiAdsButton: ButtonClassKey;
  }
}

const useStyles = makeStyles(
  () => {
    return {
      root: {
        backgroundColor: "lightblue",
      },
    };
  },
  { name: "MuiAdsButton" }
);

const AdsButton = (props: ButtonProps) => {
  const classes = useStyles(props);
  return <Button classes={classes}>This is an ads</Button>;
};

export default AdsButton;
