import { TabsClassKey } from "@material-ui/core/Tabs";
import { ButtonClassKey } from "@material-ui/core/Button";
import { TabClassKey } from "@material-ui/core/Tab";
import { InputBaseClassKey } from "@material-ui/core/InputBase";
import { blue, grey } from "@material-ui/core/colors";
import { createMuiTheme, fade } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/overrides" {
  interface ComponentNameToClassKey {
    MuiFirebaseButton: ButtonClassKey;
    MuiGithubButton: ButtonClassKey;
    MuiTwitterButton: ButtonClassKey;
    MuiGmailTabs: TabsClassKey;
    MuiGmailTab: TabClassKey;
    MuiContainedTab: TabClassKey;
    MuiElevatedTabs: TabsClassKey;
    MuiElevatedTab: TabClassKey;
    MuiFirebaseTabs: TabsClassKey;
    MuiFirebaseTab: TabClassKey;
    MuiInstagramTabs: TabsClassKey;
    MuiInstagramTab: TabClassKey;
    MuiPillTabs: TabsClassKey;
    MuiPillTab: TabClassKey;
    MuiPlainTab: TabClassKey;
    MuiTwitterTab: TabClassKey;
    MuiContrastInputBase: InputBaseClassKey;
  }
}

const { palette, typography, breakpoints, spacing, shadows } = createMuiTheme({
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

const pxToRem = (px: number, oneRemPx = 17) => `${px / oneRemPx}rem`;
const width = pxToRem(52);
const height = pxToRem(40);
const size = pxToRem(32);
const gap = (40 - 32) / 2;
const primaryColor = "#60A29B";

const defaultBgColor = palette.grey[300];
const defaultSelectedBgColor = "#272C34";
const defaultMinWidth = {
  md: 120,
};

const borderRadius = spacing(1);
const tabsBackground = "linear-gradient(60deg, #ab47bc, #8e24aa)";
const indicatorBackground = "rgba(255, 255, 255, .2)";
const tabsGutter = spacing(2);
const labelColor = "#ffffff";

const getTextColor = (color: string) => {
  if (true) return palette.text.primary;
  return palette.common.white;
};

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
    MuiSelect: {
      select: {
        display: "flex",
        minWidth: 240,
        background: "white",
        borderStyle: "none",
        borderRadius: 8,
        paddingLeft: 24,
        paddingTop: 14,
        paddingBottom: 15,
        boxShadow: "none",
        "&:focus": {
          borderRadius: 8,
          background: "white",
        },
        '&[aria-expanded="true"]': {
          background: grey[50],
        },
        "& > div": {
          display: "inline-flex", // this shows the icon in the SelectInput but not the dropdown
        },
      },
      icon: {
        color: blue[500],
        right: 12,
        position: "absolute",
        userSelect: "none",
        pointerEvents: "none",
      },
    },
    MuiRadio: {
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
    MuiSwitch: {
      root: {
        width,
        height,
        padding: 0,
        margin: spacing(1),
        overflow: "unset",
      },
      switchBase: {
        padding: pxToRem(gap),
        "&$checked": {
          color: "#fff",
          transform: `translateX(calc(${width} - ${size} - ${pxToRem(
            2 * gap
          )}))`,
          "& + $track": {
            backgroundColor: "unset",
            opacity: 1,
          },
          "& $thumb": {
            backgroundColor: "#fff",
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="${encodeURIComponent(
              primaryColor
            )}" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>')`,
          },
        },
      },
      track: {
        borderRadius: 40,
        backgroundColor: "unset",
        border: "solid #fff",
        borderWidth,
        opacity: 0.48,
      },
      thumb: {
        width: size,
        height: size,
        boxShadow: "none",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="${encodeURIComponent(
          primaryColor
        )}" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
      checked: {},
    },
    MuiFirebaseButton: {
      root: {
        borderRadius: 8,
      },
      text: {
        paddingLeft: 16,
        paddingRight: 16,
      },
      contained: {
        boxShadow: "none",
        "&:active": {
          boxShadow: shadows[0],
        },
      },
      containedPrimary: {
        backgroundColor: "#039be5",
        color: palette.common.white,
        "&:hover": {
          backgroundColor: "#0388ca",
          boxShadow: "none",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "#0388ca",
          },
        },
      },
      label: {
        textTransform: "none",
        letterSpacing: "0.5px",
        fontWeight: 500,
      },
    },
    MuiGithubButton: {
      root: {
        lineHeight: "20px",
        padding: "6px 12px",
        minHeight: "auto",
        color: "#24292e",
        "& svg": {
          fontSize: 16,
          marginLeft: -2,
          marginRight: spacing(0.5),
        },
      },
      label: {
        textTransform: "none",
        fontWeight: 600,
      },
      contained: {
        transition: "none",
        boxShadow: "none",
        border: "1px solid rgba(27,31,35,.2)",
        backgroundPosition: "-1px -1px",
        backgroundRepeat: "repeat-x",
        backgroundSize: "110% 110%",
        backgroundColor: "#eff3f6",
        backgroundImage: "linear-gradient(-180deg,#fafbfc,#eff3f6 90%)",
        "&:hover": {
          backgroundColor: "#e6ebf1",
          backgroundImage: "linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%)",
          backgroundPosition: "-0.5em",
          borderColor: "rgba(27,31,35,.35)",
          boxShadow: "none",
        },
        "&:active": {
          backgroundColor: "#e9ecef",
          backgroundImage: "none",
          borderColor: "rgba(27,31,35,.35)",
          boxShadow: "inset 0 0.15em 0.3em rgba(27,31,35,.15)",
        },
      },
      containedPrimary: {
        color: palette.common.white,
        backgroundColor: "#28a745",
        backgroundImage: "linear-gradient(-180deg,#34d058,#28a745 90%)",
        "&:hover": {
          backgroundColor: "#269f42",
          backgroundImage: "linear-gradient(-180deg,#2fcb53,#269f42 90%)",
        },
        "&:active": {
          backgroundColor: "#279f43",
          borderColor: "rgba(27,31,35,.35)",
        },
      },
    },
    MuiTwitterButton: {
      root: {
        borderRadius: 100,
        minHeight: 30,
        padding: "0 1em",
      },
      label: {
        textTransform: "none",
        fontSize: 15,
        fontWeight: 700,
      },
      outlined: {
        padding: "0 1em",
      },
      outlinedPrimary: {
        borderColor: "rgb(29, 161, 242)",
        color: "rgb(29, 161, 242)",
        "&:hover": {
          borderColor: "rgb(29, 161, 242)",
          color: "rgb(29, 161, 242)",
          backgroundColor: "rgb(29, 161, 242, 0.1)",
        },
      },
      contained: {
        minHeight: 30,
        boxShadow: shadows[0],
        "&:hover": {
          boxShadow: shadows[0],
        },
        "&:active": {
          boxShadow: shadows[0],
        },
      },
      containedPrimary: {
        backgroundColor: "rgb(29, 161, 242)",
        color: palette.common.white,
        "&:hover": {
          backgroundColor: "rgb(29, 145, 218)",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "rgb(29, 145, 218)",
          },
        },
      },
      sizeLarge: {
        padding: "0 1em",
        minHeight: 39,
      },
    },
    MuiGmailTabs: {
      indicator: {
        display: "none",
      },
    },
    MuiGmailTab: {
      root: ({
        bgColor = defaultBgColor,
        minWidth = defaultMinWidth,
      }: {
        bgColor?: string;
        minWidth?: { md: number };
      }) => ({
        opacity: 1,
        overflow: "initial",
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
        borderTopLeftRadius: spacing(1),
        borderTopRightRadius: spacing(1),
        color: getTextColor(bgColor),
        backgroundColor: bgColor,
        transition: "0.2s",
        [breakpoints.up("md")]: {
          minWidth: minWidth.md,
        },
        "&:before": {
          transition: "0.2s",
        },
        "&:not(:first-of-type)": {
          "&:before": {
            content: '" "',
            position: "absolute",
            left: 0,
            display: "block",
            height: 20,
            width: 1,
            zIndex: 1,
            marginTop: spacing(0.5),
            backgroundColor: palette.grey[500],
          },
        },
        "& + $selected:before": {
          opacity: 0,
        },
        "&:hover": {
          "&:not($selected)": {
            backgroundColor: "#f5f5f5",
          },
          "&::before": {
            opacity: 0,
          },
          "& + $root:before": {
            opacity: 0,
          },
        },
      }),
      selected: ({
        selectedBgColor = defaultSelectedBgColor,
      }: {
        selectedBgColor?: string;
      }) => ({
        backgroundColor: selectedBgColor,
        color: getTextColor(selectedBgColor),
        "& + $root": {
          zIndex: 1,
        },
        "& + $root:before": {
          opacity: 0,
        },
      }),
      wrapper: {
        zIndex: 2,
        marginTop: spacing(0.5),
        textTransform: "initial",
      },
    },
    MuiContainedTab: {
      root: ({
        // @ts-ignore
        bgColor = defaultBgColor,
        // @ts-ignore
        minWidth = defaultMinWidth,
        // @ts-ignore
        selectedBgColor = defaultSelectedBgColor,
      }) => ({
        opacity: 1,
        overflow: "initial",
        color: getTextColor(bgColor),
        backgroundColor: bgColor,
        transition: "0.2s",
        [breakpoints.up("md")]: {
          minWidth: minWidth.md,
        },
        "&:before": {
          transition: "0.2s",
        },
        "&:not(:first-of-type)": {
          "&:before": {
            content: '" "',
            position: "absolute",
            left: 0,
            display: "block",
            height: 20,
            width: 1,
            zIndex: 1,
            backgroundColor: palette.grey[300],
          },
        },
        "& + $selected:before": {
          opacity: 0,
        },
        "&:hover": {
          "&:not($selected)": {
            backgroundColor: fade(selectedBgColor, 0.87),
          },
          "&::before": {
            opacity: 0,
          },
          "& + $root:before": {
            opacity: 0,
          },
        },
      }),
      // @ts-ignore
      selected: ({ selectedBgColor = defaultSelectedBgColor }) => ({
        backgroundColor: selectedBgColor,
        color: getTextColor(selectedBgColor),
        "& + $root": {
          zIndex: 1,
        },
        "& + $root:before": {
          opacity: 0,
        },
      }),
      wrapper: {
        zIndex: 2,
        textTransform: "initial",
      },
    },
    MuiElevatedTabs: {
      root: {
        width: "100%",
        borderRadius: spacing(1),
        background: tabsBackground,
        padding: 10,
        boxShadow: "0px 3px 15px rgba(34, 35, 58, 0.5)",
      },
      indicator: {
        height: "100%",
        borderRadius,
        backgroundColor: indicatorBackground,
      },
    },
    MuiElevatedTab: {
      root: {
        textTransform: "initial",
        margin: `0 ${tabsGutter}px`,
        minWidth: 0,
        [breakpoints.up("md")]: {
          minWidth: 0,
        },
      },
      wrapper: {
        fontWeight: "normal",
        letterSpacing: 0.5,
        color: labelColor,
      },
    },
    MuiFirebaseTabs: {
      root: {
        marginLeft: spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: palette.common.white,
      },
    },
    MuiFirebaseTab: {
      root: {
        textTransform: "initial",
        margin: spacing(0, 2),
        minWidth: 0,
        [breakpoints.up("md")]: {
          minWidth: 0,
        },
      },
      wrapper: {
        fontWeight: "normal",
        letterSpacing: 0.5,
      },
    },
    MuiInstagramTabs: {
      root: {
        boxShadow: "inset 0 1px 0 0 #efefef",
        overflow: "visible",
      },
      fixed: {
        overflow: "visible !important",
      },
      indicator: {
        height: 1,
        transform: "translateY(-52px)",
        backgroundColor: "#262626",
      },
    },
    MuiInstagramTab: {
      root: {
        lineHeight: "inherit",
        minWidth: 0,
        "&:not(:last-child)": {
          marginRight: 24,
          [breakpoints.up("sm")]: {
            marginRight: 60,
          },
        },
        [breakpoints.up("md")]: {
          minWidth: 0,
        },
      },
      labelIcon: {
        minHeight: 53,
        "& $wrapper > *:first-child": {
          marginBottom: 0,
        },
      },
      textColorInherit: {
        opacity: 0.4,
      },
      wrapper: {
        flexDirection: "row",
        letterSpacing: "1px",
        textTransform: "uppercase",
        "& svg, .material-icons": {
          fontSize: 16,
          marginRight: 8,
        },
      },
    },
    MuiPillTabs: {
      root: {
        width: "100%",
      },
      indicator: {
        display: "none",
      },
      centered: {
        alignItems: "center",
        justifyContent: "center",
      },
    },
    MuiPillTab: {
      root: {
        position: "relative",
        display: "block",
        borderRadius: "30px",
        textAlign: "center",
        transition: "all .5s",
        padding: "10px 15px",
        color: "#555555",
        height: "auto",
        opacity: "1",
        margin: "10px 0",
        float: "none",
        [breakpoints.up("md")]: {
          minWidth: 120,
        },
        "& + button": {
          margin: "10px 0",
        },
        "&$selected": {
          "&, &:hover": {
            color: "#FFFFFF",
            backgroundColor: "#00acc1",
            boxShadow: "0 7px 10px -5px rgba(76, 175, 80, 0.4)",
          },
        },
      },
      selected: {},
      wrapper: {
        lineHeight: "24px",
        textTransform: "uppercase",
        fontSize: "12px",
        fontWeight: 500,
        position: "relative",
        display: "block",
        color: "inherit",
      },
    },
    MuiPlainTab: {
      root: {
        border: "1px solid #e9e9e9",
        "&:not(:first-of-type)": {
          marginLeft: -1,
        },
        background: "#f7f7f7",
        opacity: 1,
      },
      selected: {
        borderBottomWidth: 0,
        background: "#ffffff",
        "& $wrapper": {
          opacity: 1,
        },
      },
      wrapper: {
        opacity: 0.7,
      },
    },
    MuiTwitterTab: {
      root: {
        minHeight: 53,
        minWidth: 80,
        [breakpoints.up("md")]: {
          minWidth: 120,
        },
        "&:hover": {
          backgroundColor: "rgba(29, 161, 242, 0.1)",
          "& $wrapper": {
            color: "#1da1f2",
          },
        },
        "&$selected": {
          "& *": {
            color: "#1da1f2",
          },
        },
      },
      selected: {},
      textColorInherit: {
        opacity: 1,
      },
      wrapper: {
        textTransform: "none",
        fontSize: 15,
        fontWeight: 700,
        color: "#657786",
      },
    },
    MuiContrastInputBase: {
      root: {
        borderRadius: 40,
        border: "1px solid",
        borderColor: palette.grey[400],
        overflow: "hidden",
        backgroundColor: "#fff",
        "&:hover:not($disabled)": {
          borderColor: palette.grey[500],
        },
        "& > svg": {
          color: palette.grey[500],
        },
      },
      adornedStart: {
        paddingLeft: "0.5rem",
      },
      adornedEnd: {
        paddingRight: "0.5rem",
      },
      colorSecondary: {},
      focused: {
        boxShadow: "0 2px 6px 0 rgba(0,0,0,0.24)",
        borderColor: palette.primary.main,
        "&:hover:not($disabled)": {
          borderColor: palette.primary.main,
        },
        "&$adornedStart": {
          "& > svg": {
            color: palette.primary.light,
          },
        },
        "&$colorSecondary": {
          borderColor: palette.secondary.main,
          "&:hover:not($disabled)": {
            borderColor: palette.secondary.main,
          },
          "&$adornedStart": {
            "& > svg": {
              color: palette.secondary.light,
            },
          },
        },
      },
      error: {
        backgroundColor: "#fff9f9",
        borderColor: "#ff5252",
        "&:hover:not($disabled)": {
          borderColor: "#ff5252",
        },
      },
      disabled: {
        backgroundColor: palette.grey[100],
      },
      input: {
        padding: "0.625rem 1rem",
        "&:not(:first-child)": {
          paddingLeft: "0.5rem",
        },
        "&:not(:last-child)": {
          paddingRight: "0.5rem",
        },
      },
    },
  },
});
