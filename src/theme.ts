import { createMuiTheme, fade } from "@material-ui/core/styles";

const { palette, typography, breakpoints, spacing } = createMuiTheme({
  palette: {
    primary: {
      main: "#007aac",
    },
    background: {
      default: "#fff",
    },
    divider: "#f0f0f2",
  },
  typography: {
    fontFamily: "'Fira Sans', sans-serif",
  },
});

const { white } = palette.common;
const inputRadius = 4;
const borderWidth = 1;
const inputPadding = ".375rem .75rem";
const fontFamily = [
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");
const borderColor = "#ced4da";
// you can change normal color to primary using
// palette.primary.main
const normalColor = "#80bdff";
const validColor = "#28a745";
const errorColor = "#dc3545";
const helperTextColor = "#6c757d";
const helperTextFontSize = 12.8;
const mainColor = "#137cbd";
const lightColor = fade(mainColor, 0.8);

export const applicationTheme = createMuiTheme({
  palette,
  typography,
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 50,
        "&:hover": {
          borderBottom: "none",
        },
      },
      label: {
        textTransform: "initial",
      },
      contained: {
        boxShadow: "none",
        backgroundColor: palette.grey[200],
        "&:active": {
          boxShadow: "none",
        },
      },
      containedPrimary: {
        textShadow: "0 1px 0 rgba(0,0,0,0.2)",
        transition: "0.2s",
        background: `linear-gradient(to top, ${palette.primary.main}, #7fb8d0)`,
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: `0 4px 6px 2px rgba(0,0,0,0.2), 0px 2px 4px 0px rgba(0,0,0,0.14), inset 0 -2px 0 0 rgba(0,0,0,0.12)`,
        },
        "&:focus": {
          transform: "translateY(0px)",
          boxShadow: "none",
          // boxShadow: `inset 0 4px 4px 0 rgba(0,0,0,0.14)`,
        },
        "& $label": {
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        },
      },
      text: {
        padding: "6px 16px",
      },
    },
    MuiTabs: {
      root: {
        backgroundColor: palette.type === "light" ? "#eee" : palette.divider,
        borderRadius: 10,
        minHeight: 44,
      },
      flexContainer: {
        display: "inline-flex",
        position: "relative",
        zIndex: 1,
      },
      scroller: {
        [breakpoints.up("md")]: {
          padding: "0 8px",
        },
      },
      indicator: {
        top: 3,
        bottom: 3,
        right: 3,
        height: "auto",
        background: "none",
        "&:after": {
          content: '""',
          display: "block",
          position: "absolute",
          top: 0,
          left: 4,
          right: 4,
          bottom: 0,
          borderRadius: 8,
          backgroundColor:
            palette.type === "light" ? "#fff" : palette.action.selected,
          boxShadow: "0 4px 12px 0 rgba(0,0,0,0.16)",
        },
      },
    },
    MuiTab: {
      root: {
        "&:hover": {
          opacity: 1,
        },
        minHeight: 44,
        minWidth: 96,
        [breakpoints.up("md")]: {
          minWidth: 120,
        },
      },
      wrapper: {
        // zIndex: 2,
        // marginTop: spacing(0.5),
        color: palette.text.primary,
        textTransform: "initial",
      },
    },
    MuiInput: {
      root: {
        "&.-valid $input": {
          borderColor: `${validColor} !important`,
          "&:focus": {
            boxShadow: `0 0 0 0.2rem ${fade(validColor, 0.75)}`,
          },
        },
      },
      error: {
        "& $input": {
          borderColor: `${errorColor} !important`,
          "&:focus": {
            boxShadow: `0 0 0 0.2rem ${fade(errorColor, 0.75)}`,
          },
        },
      },
      input: {
        boxSizing: "border-box",
        borderRadius: inputRadius,
        position: "relative",
        backgroundColor: white,
        borderWidth,
        borderStyle: "solid",
        borderColor,
        fontSize: 16,
        height: "calc(1.5em + .75rem + 2px)",
        width: "auto",
        padding: inputPadding,
        lineHeight: 1.5,
        transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        // Use the system font instead of the default Roboto font.
        fontFamily,
        "&:focus": {
          outline: "none",
          borderRadius: inputRadius,
          borderColor: normalColor,
          boxShadow: `0 0 0 0.2rem ${fade(
            normalColor,
            palette.type === "dark" ? 0.48 : 0.75
          )}`,
        },
      },
    },
    MuiInputLabel: {
      root: {
        position: "initial",
        textAlign: "left",
        transform: "none",
        fontSize: 16,
        color: palette.text.primary,
        fontFamily,
        "&& + *": {
          // override initial styles
          // label + .MuiInput-formControl
          marginTop: spacing(0.5),
        },
      },
      focused: {
        "&$root": {
          color: palette.text.primary,
        },
      },
    },
    MuiFormHelperText: {
      root: {
        fontFamily,
        color: helperTextColor,
        lineHeight: "19.2px",
        marginTop: spacing(0.5),
        fontSize: helperTextFontSize,
        "&.-valid": {
          color: validColor,
        },
        "&.-error": {
          color: errorColor,
        },
      },
    },
    MuiListItem: {
      root: {
        color: "#36313d",
        font: "100%/1.5 -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
        fontKerning: "normal",
        fontFeatureSettings: '"kern", "liga", "clig", "calt"',
        fontSize: 14,
        minHeight: 45,
        lineHeight: "21px",
        margin: 0,
        padding: "12px 48px 12px 1.5rem",
        "&:before, &:after": {
          content: '" "',
          top: "1.3em",
          height: 8,
          position: "absolute",
          transition: "all 250ms cubic-bezier(0.4,0,0.2,1)",
        },
        "&:before": {
          left: "0.5rem",
          width: 8,
          borderRadius: "100%",
        },
        "&:after": {
          left: 0,
          top: "1.3em",
          height: 8,
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
          transform: "translateX(-100%)",
        },
        "&:hover, &:focus": {
          background: "rgba(241,222,250,0.275)",
          color: "#663399",
          "&:before": {
            background: "#8a4baf",
            transform: "scale(1)",
          },
        },
      },
      selected: {
        "&.Mui-selected": {
          color: "rgb(138, 75, 175)",
          background: "initial",
          fontWeight: 500,
          "&:hover, &:focus": {
            background: "rgba(241,222,250,0.275)",
            color: "#663399",
            "&:before": {
              background: "#8a4baf",
              transform: "scale(1)",
            },
          },
          "&:after": {
            width: "calc(0.5rem + 8px)",
            background: "rgb(138, 75, 175)",
            transform: "translateX(0)",
          },
        },
      },
    },
    MuiCheckbox: {
      root: {
        "& + *": {
          marginTop: "2px",
          fontSize: "0.875rem",
        },
        "&:hover, &.Mui-focusVisible": {
          backgroundColor: "transparent !important",
        },
        "& input + *": {
          borderRadius: "50%",
          width: 16,
          height: 16,
        },
        "& input:disabled + *": {
          boxShadow: "inset 0 0 0 1px rgba(16,22,26,.3) !important",
          background: "rgba(206,217,224,.5) !important",
        },
        "&:not($checked)": {
          "& input + *": {
            boxShadow:
              "0 1px 3px 0 rgba(0,0,0,0.12), inset 0 0 0 1px rgba(16,22,26,.5)",
            backgroundColor: "#fff",
          },
          "& input:hover ~ *, & input:focus + *": {
            boxShadow: `inset 0 0 0 1px ${mainColor}, inset 0 -1px 0 ${mainColor}`,
            backgroundColor: lightColor,
          },
        },
      },
      checked: {
        "& input + *": {
          boxShadow: `inset 0 0 0 1px ${mainColor}`,
          backgroundColor: "#fff",
          backgroundImage:
            "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
          "&:before": {
            display: "block",
            width: 16,
            height: 16,
            backgroundImage: `radial-gradient(${mainColor},${mainColor} 28%,rgba(0,0,0,0) 32%)`,
            content: '""',
          },
        },
        "& input:focus + *": {
          backgroundColor: lightColor,
        },
      },
    },
  },
});
