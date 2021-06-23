import { makeStyles, StyleRules } from "@material-ui/core/styles";
import { ButtonClassKey } from "@material-ui/core/Button";

const useAdsButtonStyles = makeStyles(() => {
  const styles: Partial<StyleRules<ButtonClassKey>> = {
    root: {
      backgroundColor: "lightblue",
    },
    // will show error
    // test: {},
  };
  return styles as StyleRules<ButtonClassKey>;
});

export default useAdsButtonStyles;
