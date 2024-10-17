import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Posts } from "./pages/Posts";
import { IssuesProvider } from "./contexts/IssuesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <IssuesProvider>
        <Posts />
      </IssuesProvider>
    </ThemeProvider>
  )
}
