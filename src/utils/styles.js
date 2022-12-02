// Import Library's Hook
import { createTheme, styled } from "@mui/material/styles";

// Import Library's Component
import InputBase from "@mui/material/InputBase";

// Custome Breakpoint Header
export const theme = createTheme({
   breakpoints: {
      values: {
         xs: 0,
         sm: 600,
         md: 980,
         lg: 1200,
         xl: 1536,
      },
   },
   palette: {
      mode: "light",
      primary: {
         main: "#ffffff",
      },
   },
});

export const Search = styled("div")(({ theme }) => ({
   position: "relative",
   width: "100%",
   marginLeft: 0,

   borderRadius: theme.shape.borderRadius,
   [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
   },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
   position: "absolute",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   height: "100%",

   padding: theme.spacing(0, 2),
   pointerEvents: "none",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: "inherit",
   border: "1px solid rgba(0, 0, 0, 0.23)",
   borderRadius: "inherit",

   "& .MuiInputBase-input": {
      width: "120px",

      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),

      [theme.breakpoints.up("md")]: {
         width: "9ch",
         "&:focus": {
            width: "12ch",
         },
      },
   },
}));
