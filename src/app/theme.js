import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                bg: mode("black.800")(props),
                color: mode("whiteAlpha.800")(props),
                maxWidth: "720px",
                mx: "auto",
                textAlign: "center",
            },
        }),
    },
});
