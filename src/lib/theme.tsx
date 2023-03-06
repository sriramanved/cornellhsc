import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#3B3B98",
    secondary: "#B83227",
    tertiary: "#F5B041",
    quaternary: "#F7DC6F",
    background: "#F2F2F2",
  },
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Open Sans', sans-serif",
  },
  styles: {
    global: {
      "html, body": {
        bg: "background",
        color: "primary",
        fontFamily: "body",
        fontSize: "md",
      },
    },
  },
});

export default theme;
