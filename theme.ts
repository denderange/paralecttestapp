import { Input, createTheme } from "@mantine/core";
import { inter } from "./styles/fonts";
import styles from './styles/mantineTheme.module.css'

export const theme = createTheme({
  fontFamily: inter.style.fontFamily,
  components: {
    Input: Input.extend({ classNames: styles }),
  },
});
