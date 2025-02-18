import { extendTheme,type ThemeConfig } from "@chakra-ui/react";

const config:ThemeConfig={
    initialColorMode:"light",
    useSystemColorMode:false, //what user chose
}
const theme = extendTheme({config});

export default theme;