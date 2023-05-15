import { extendTheme } from "native-base";

export const theme = extendTheme({
  components: {
    Container: {
      baseStyle: {
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        background: 'coolGray.800'
      }
    },
    Text: {
      baseStyle: {
        color: "#FDE2F3"
      }
    },
    Button: {
      backgroundColor: "#FDE2F3"
    }
  },
  fonts: {
    color: "#FDE2F3"
  },
  colors: {
    pallet: {
      primary: "#FDE2F3",
      lightPurple: "#917FB3",
      lightGray: '#5A5A5A'
    },
    text: {
      900: "#FDE2F3"
    }
  }
});