import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'chase', sans-serif`,
    body: `'chase', sans-serif`,
  },
  colors: {
    pantone310: {
      50: "#E5FAFC",
      100: "#C2F2F7",
      200: "#9DE9F2",
      300: "#78E1EC",
      400: "#53D9E7",
      500: "#2DCED9",
      600: "#26A7AF",
      700: "#1E8085",
      800: "#16585B",
      900: "#0E3031",
    },
    pantone546: {
      50: "#E5F3F4",
      100: "#BFDCE0",
      200: "#99C4CB",
      300: "#73ADB7",
      400: "#4D96A2",
      500: "#267F8E", // Adjusted to match #003A40 closely
      600: "#20666F",
      700: "#194D50",
      800: "#123331",
      900: "#0A1A1B",
    },
    pantone611: {
      50: "#FFF9E5",
      100: "#FEF1BF",
      200: "#FDE699",
      300: "#FCDD73",
      400: "#FBD34D",
      500: "#FAB926",
      600: "#C79920",
      700: "#947118",
      800: "#634910",
      900: "#322408",
    },
    whiteScheme: {
      50: "#FFFFFF",
      100: "#F7F7F7",
      200: "#EFEFEF",
      300: "#E7E7E7",
      400: "#DFDFDF",
      500: "#D7D7D7",
      600: "#CFCFCF",
      700: "#C7C7C7",
      800: "#BFBFBF",
      900: "#B7B7B7",
    },
  },
});

export default theme;
